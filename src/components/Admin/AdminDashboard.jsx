import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSchoolStudents, calculateSchoolStats, getStudentProgress } from '../../services/adminService';
import { allLessons } from '../../data/lessons';

const AdminDashboard = ({ user, modules }) => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // 'name', 'progress', 'date'

  useEffect(() => {
    loadDashboardData();
  }, [user.schoolId]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);

      // Load students
      const studentsData = await getSchoolStudents(user.schoolId);

      // Load progress for each student
      const studentsWithProgress = await Promise.all(
        studentsData.map(async (student) => {
          const progress = await getStudentProgress(student.id);

          // Calculate total lessons across all modules
          const totalLessons = modules.reduce((sum, module) => sum + module.lessonCount, 0);
          const completionPercentage = totalLessons > 0
            ? Math.round((progress.totalLessonsCompleted || 0) / totalLessons * 100)
            : 0;

          return {
            ...student,
            progress: progress.totalLessonsCompleted || 0,
            completionPercentage,
            lastActive: progress.lastUpdated
          };
        })
      );

      setStudents(studentsWithProgress);

      // Calculate school stats
      const schoolStats = await calculateSchoolStats(user.schoolId, modules);
      setStats(schoolStats);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter(student => {
    const searchLower = searchTerm.toLowerCase();
    return (
      student.firstName?.toLowerCase().includes(searchLower) ||
      student.lastName?.toLowerCase().includes(searchLower) ||
      student.email?.toLowerCase().includes(searchLower)
    );
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return (a.firstName || '').localeCompare(b.firstName || '');
      case 'progress':
        return (b.completionPercentage || 0) - (a.completionPercentage || 0);
      case 'date':
        const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
        const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
        return dateB - dateA;
      default:
        return 0;
    }
  });

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Never';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
        <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px', color: '#1f2937' }}>
          Admin Dashboard
        </h1>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>
          Monitor student progress and engagement
        </p>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '24px',
            borderRadius: '12px',
            color: 'white'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>Total Students</div>
            <div style={{ fontSize: '36px', fontWeight: '700' }}>{stats.totalStudents}</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            padding: '24px',
            borderRadius: '12px',
            color: 'white'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>Avg Completion</div>
            <div style={{ fontSize: '36px', fontWeight: '700' }}>{stats.averageCompletion}%</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            padding: '24px',
            borderRadius: '12px',
            color: 'white'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>Lessons Completed</div>
            <div style={{ fontSize: '36px', fontWeight: '700' }}>{stats.totalLessonsCompleted}</div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            padding: '24px',
            borderRadius: '12px',
            color: 'white'
          }}>
            <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>Active This Week</div>
            <div style={{ fontSize: '36px', fontWeight: '700' }}>{stats.weeklyActiveStudents}</div>
          </div>
        </div>
      )}

      {/* Search and Sort Controls */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: '1',
              minWidth: '200px',
              padding: '12px 16px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                outline: 'none',
                background: 'white'
              }}
            >
              <option value="name">Name</option>
              <option value="progress">Progress</option>
              <option value="date">Join Date</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {sortedStudents.length === 0 ? (
          <div style={{ padding: '48px', textAlign: 'center', color: '#6b7280' }}>
            {searchTerm ? 'No students found matching your search.' : 'No students enrolled yet.'}
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Student</th>
                <th style={{ padding: '16px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Email</th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Progress</th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Joined</th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Last Active</th>
                <th style={{ padding: '16px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student, index) => (
                <tr
                  key={student.id}
                  style={{
                    borderBottom: index < sortedStudents.length - 1 ? '1px solid #e5e7eb' : 'none',
                    transition: 'background 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                  onClick={() => navigate(`/admin/student/${student.id}`)}
                >
                  <td style={{ padding: '16px' }}>
                    <div style={{ fontWeight: '500', color: '#1f2937' }}>
                      {student.firstName} {student.lastName}
                    </div>
                  </td>
                  <td style={{ padding: '16px', color: '#6b7280', fontSize: '14px' }}>
                    {student.email}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <div style={{
                        flex: '1',
                        maxWidth: '100px',
                        height: '8px',
                        background: '#e5e7eb',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${student.completionPercentage}%`,
                          background: student.completionPercentage >= 75 ? '#10b981' : student.completionPercentage >= 50 ? '#f59e0b' : '#667eea',
                          transition: 'width 0.3s'
                        }} />
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', minWidth: '40px' }}>
                        {student.completionPercentage}%
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
                    {formatDate(student.createdAt)}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
                    {formatDate(student.lastActive)}
                  </td>
                  <td style={{ padding: '16px', textAlign: 'center' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/student/${student.id}`);
                      }}
                      style={{
                        padding: '8px 16px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#5568d3'}
                      onMouseLeave={(e) => e.target.style.background = '#667eea'}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
