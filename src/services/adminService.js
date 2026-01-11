import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, getDoc, orderBy } from 'firebase/firestore';

/**
 * Gets all students for a specific school
 * @param {string} schoolId - School ID
 * @returns {Promise<Array>} Array of student objects
 */
export const getSchoolStudents = async (schoolId) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(
      usersRef,
      where('schoolId', '==', schoolId),
      where('role', '==', 'student'),
      orderBy('createdAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const students = [];

    querySnapshot.forEach((doc) => {
      students.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return students;
  } catch (error) {
    console.error('Error getting school students:', error);
    throw error;
  }
};

/**
 * Gets a specific student's profile
 * @param {string} userId - User ID
 * @returns {Promise<Object|null>} Student data or null
 */
export const getStudentProfile = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      return null;
    }

    return {
      id: userSnap.id,
      ...userSnap.data()
    };
  } catch (error) {
    console.error('Error getting student profile:', error);
    throw error;
  }
};

/**
 * Gets a specific student's progress
 * @param {string} userId - User ID
 * @returns {Promise<Object|null>} Progress data or null
 */
export const getStudentProgress = async (userId) => {
  try {
    const progressRef = doc(db, 'progress', userId);
    const progressSnap = await getDoc(progressRef);

    if (!progressSnap.exists()) {
      return {
        completedLessons: {},
        totalLessonsCompleted: 0
      };
    }

    return progressSnap.data();
  } catch (error) {
    console.error('Error getting student progress:', error);
    throw error;
  }
};

/**
 * Calculates school-wide statistics
 * @param {string} schoolId - School ID
 * @param {Array} modules - Array of module objects
 * @returns {Promise<Object>} School statistics
 */
export const calculateSchoolStats = async (schoolId, modules) => {
  try {
    const students = await getSchoolStudents(schoolId);

    if (students.length === 0) {
      return {
        totalStudents: 0,
        averageCompletion: 0,
        totalLessonsCompleted: 0,
        weeklyActiveStudents: 0
      };
    }

    // Calculate total lessons across all modules
    const totalLessons = modules.reduce((sum, module) => sum + module.lessonCount, 0);

    // Fetch progress for all students
    const progressPromises = students.map(student => getStudentProgress(student.id));
    const progressData = await Promise.all(progressPromises);

    // Calculate statistics
    const totalLessonsCompleted = progressData.reduce(
      (sum, progress) => sum + (progress.totalLessonsCompleted || 0),
      0
    );

    const averageCompletion = students.length > 0
      ? Math.round((totalLessonsCompleted / (students.length * totalLessons)) * 100)
      : 0;

    // Calculate weekly active students (students with activity in last 7 days)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weeklyActiveStudents = progressData.filter(progress => {
      if (!progress.lastUpdated) return false;
      const lastUpdate = progress.lastUpdated.toDate ? progress.lastUpdated.toDate() : new Date(progress.lastUpdated);
      return lastUpdate >= oneWeekAgo;
    }).length;

    return {
      totalStudents: students.length,
      averageCompletion,
      totalLessonsCompleted,
      weeklyActiveStudents
    };
  } catch (error) {
    console.error('Error calculating school stats:', error);
    throw error;
  }
};

/**
 * Gets module-by-module breakdown for a student
 * @param {string} userId - User ID
 * @param {Array} modules - Array of module objects with id and lessonCount
 * @param {Object} allLessons - Object with all lessons by module
 * @returns {Promise<Array>} Array of module progress objects
 */
export const getStudentModuleBreakdown = async (userId, modules, allLessons) => {
  try {
    const progress = await getStudentProgress(userId);
    const completedLessons = progress.completedLessons || {};

    return modules.map(module => {
      const moduleLessons = allLessons[module.id] || [];
      const completedCount = moduleLessons.filter(lesson => {
        const lessonKey = `${module.id}-${lesson.id}`;
        return completedLessons[lessonKey]?.completed;
      }).length;

      const percentage = moduleLessons.length > 0
        ? Math.round((completedCount / moduleLessons.length) * 100)
        : 0;

      return {
        moduleId: module.id,
        moduleTitle: module.title,
        totalLessons: moduleLessons.length,
        completedLessons: completedCount,
        percentage
      };
    });
  } catch (error) {
    console.error('Error getting student module breakdown:', error);
    throw error;
  }
};
