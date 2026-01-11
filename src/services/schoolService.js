import { db } from '../firebase/config';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';

/**
 * Validates if a school code exists and is active
 * @param {string} code - School code to validate
 * @returns {Promise<Object|null>} School data if valid, null if invalid
 */
export const validateSchoolCode = async (code) => {
  try {
    const schoolsRef = collection(db, 'schools');
    const q = query(
      schoolsRef,
      where('code', '==', code.toUpperCase()),
      where('isActive', '==', true)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const schoolDoc = querySnapshot.docs[0];
    return {
      id: schoolDoc.id,
      ...schoolDoc.data()
    };
  } catch (error) {
    console.error('Error validating school code:', error);
    throw error;
  }
};

/**
 * Gets school details by school ID
 * @param {string} schoolId - School ID
 * @returns {Promise<Object|null>} School data if found, null otherwise
 */
export const getSchoolById = async (schoolId) => {
  try {
    const schoolRef = doc(db, 'schools', schoolId);
    const schoolSnap = await getDoc(schoolRef);

    if (!schoolSnap.exists()) {
      return null;
    }

    return {
      id: schoolSnap.id,
      ...schoolSnap.data()
    };
  } catch (error) {
    console.error('Error getting school:', error);
    throw error;
  }
};

/**
 * Gets school details by code
 * @param {string} code - School code
 * @returns {Promise<Object|null>} School data if found, null otherwise
 */
export const getSchoolByCode = async (code) => {
  return validateSchoolCode(code);
};
