import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentProfile, getStudentProgress, getStudentModuleBreakdown } from '../../services/adminService';
import { allLessons } from '../../data/lessons';

const StudentDetail = ({ modules }) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [moduleBreakdown, setModuleBreakdown] = useState([]);
  const [completedLessonsList, setCompletedLessonsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStudentData();
  }, [userId]);

  const loadStudentData = async () => {
    try {
      setLoading(true);

      // Load student profile
      const profile = await getStudentProfile(userId);
      if (!profile) {
        console.error('Student not found');
        return;
      }
      setStudent(profile);

      // Load progress
      const progress = await getStudentProgress(userId);

      // Calculate module breakdown
      const breakdown = await getStudentModuleBreakdown(userId, modules, allLessons);
      setModuleBreakdown(breakdown);

      // Get completed lessons list with details
      const completedLessons = Object.entries(progress.completedLessons || {})
        .filter(([_, data]) => data.completed)
        .map(([key, data]) => ({
          key,
          ...data,
          completedAt: data.completedAt?.toDate ? data.completedAt.toDate() : new Date(data.completedAt)
        }))
        .sort((a, b) => b.completedAt - a.completedAt);

      setCompletedLessonsList(completedLessons);
    } catch (error) {
      console.error('Error loading student data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Never';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return formatDate(date);
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '4px solid #e5e7eb',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }} />
        <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading student details...</p>
      </div>
    );
  }

  if (!student) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#ef4444', marginBottom: '16px' }}>Student Not Found</h2>
        <button
          onClick={() => navigate('/admin')}
          style={{
            padding: '12px 24px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const totalLessons = modules.reduce((sum, module) => sum + module.lessonCount, 0);
  const overallCompletion = totalLessons > 0
    ? Math.round((completedLessonsList.length / totalLessons) * 100)
    : 0;

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/admin')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          background: 'white',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          color: '#6b7280',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          marginBottom: '24px',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = '#667eea';
          e.target.style.color = '#667eea';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = '#e5e7eb';
          e.target.style.color = '#6b7280';
        }}
      >
        ← Back to Dashboard
      </button>

      {/* Student Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '32px',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '32px'
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>
          {student.firstName} {student.lastName}
        </h1>
        <p style={{ opacity: 0.9, fontSize: '16px', marginBottom: '16px' }}>{student.email}</p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>Joined</div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>{formatTimestamp(student.createdAt)}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>Last Active</div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>{formatTimestamp(student.lastLoginAt)}</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '4px' }}>Overall Progress</div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>{overallCompletion}% Complete</div>
          </div>
        </div>
      </div>

      {/* Module Breakdown */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#1f2937' }}>
          Module Progress
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px'
        }}>
          {moduleBreakdown.map((module) => (
            <div
              key={module.moduleId}
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                border: '2px solid #e5e7eb',
                transition: 'border-color 0.2s'
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#1f2937' }}>
                {module.moduleTitle}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  flex: '1',
                  height: '10px',
                  background: '#e5e7eb',
                  borderRadius: '5px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${module.percentage}%`,
                    background: module.percentage >= 75 ? '#10b981' : module.percentage >= 50 ? '#f59e0b' : '#667eea',
                    transition: 'width 0.3s'
                  }} />
                </div>
                <span style={{ fontSize: '16px', fontWeight: '700', color: '#1f2937', minWidth: '45px' }}>
                  {module.percentage}%
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>
                {module.completedLessons} of {module.totalLessons} lessons completed
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#1f2937' }}>
          Completed Lessons ({completedLessonsList.length})
        </h2>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          {completedLessonsList.length === 0 ? (
            <div style={{ padding: '48px', textAlign: 'center', color: '#6b7280' }}>
              No lessons completed yet.
            </div>
          ) : (
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ position: 'sticky', top: 0, background: '#f9fafb', zIndex: 1 }}>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Lesson</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Type</th>
                    <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Module</th>
                    <th style={{ padding: '16px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {completedLessonsList.map((lesson, index) => (
                    <tr
                      key={lesson.key}
                      style={{
                        borderBottom: index < completedLessonsList.length - 1 ? '1px solid #e5e7eb' : 'none'
                      }}
                    >
                      <td style={{ padding: '16px' }}>
                        <div style={{ fontWeight: '500', color: '#1f2937' }}>
                          {lesson.lessonTitle}
                        </div>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center' }}>
                        <span style={{
                          padding: '4px 12px',
                          background: lesson.lessonType === 'video' ? '#dbeafe' : '#e0e7ff',
                          color: lesson.lessonType === 'video' ? '#1e40af' : '#4338ca',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          textTransform: 'capitalize'
                        }}>
                          {lesson.lessonType}
                        </span>
                      </td>
                      <td style={{ padding: '16px', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
                        {modules.find(m => m.id === lesson.moduleId)?.title || lesson.moduleId}
                      </td>
                      <td style={{ padding: '16px', textAlign: 'right', color: '#6b7280', fontSize: '14px' }}>
                        {formatDate(lesson.completedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
