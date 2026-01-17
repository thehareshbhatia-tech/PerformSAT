import React from 'react';

// Module data
const MODULES = [
  { id: 'linear-equations', title: 'Linear Equations', lessonCount: 24 },
  { id: 'functions', title: 'Functions', lessonCount: 10 },
  { id: 'systems', title: 'System of Equations', lessonCount: 14 },
  { id: 'transformations', title: 'Transformations', lessonCount: 15 },
  { id: 'exponents', title: 'Exponents & Exponential Functions', lessonCount: 12 },
  { id: 'percents', title: 'Percents', lessonCount: 17 },
  { id: 'equivalent-expressions', title: 'Equivalent Expressions', lessonCount: 3 },
  { id: 'quadratics', title: 'Quadratic Functions & Equations', lessonCount: 18 },
  { id: 'radians-degrees', title: 'Radians & Degrees', lessonCount: 4 },
  { id: 'triangles', title: 'Triangles', lessonCount: 35 },
  { id: 'circles', title: 'Circles', lessonCount: 22 },
  { id: 'volume', title: 'Volume', lessonCount: 9 },
  { id: 'statistics', title: 'Statistics', lessonCount: 12 },
  { id: 'dimensional-analysis', title: 'Dimensional Analysis', lessonCount: 4 }
];

const TOTAL_LESSONS = 199;

// Simple donut chart component
const DonutChart = ({ percent, size = 120, strokeWidth = 10, color = '#22c55e' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const StudentDashboard = ({
  user,
  completedLessons,
  practiceProgress,
  onNavigateToModule
}) => {
  // Calculate total completed
  const totalCompleted = Object.values(completedLessons).filter(l => l?.completed).length;
  const completionPercent = Math.round((totalCompleted / TOTAL_LESSONS) * 100);

  // Get completed count per module
  const getModuleCompleted = (moduleId) => {
    return Object.keys(completedLessons).filter(key =>
      key.startsWith(`${moduleId}-`) && completedLessons[key]?.completed
    ).length;
  };

  // Calculate module progress for strongest/weakest
  const moduleProgress = MODULES.map(m => ({
    ...m,
    completed: getModuleCompleted(m.id),
    percent: Math.round((getModuleCompleted(m.id) / m.lessonCount) * 100)
  }));

  // Get practice stats
  const practiceEntries = Object.entries(practiceProgress || {});
  const totalPracticed = practiceEntries.length;
  const totalCorrect = practiceEntries.reduce((sum, [_, p]) => sum + (p.bestScore || 0), 0);
  const totalQuestions = totalPracticed * 5;
  const practicePercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Find strongest and weakest modules (only those with progress)
  const startedModules = moduleProgress.filter(m => m.completed > 0);
  const strongest = startedModules.length > 0
    ? startedModules.reduce((a, b) => a.percent > b.percent ? a : b)
    : null;
  const weakest = startedModules.length > 1
    ? startedModules.reduce((a, b) => a.percent < b.percent ? a : b)
    : null;

  // Card style
  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    padding: '24px'
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <h1 style={{
        fontSize: '28px',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '32px'
      }}>
        Your SAT Math Progress
      </h1>

      {/* Top Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: '24px'
      }}>
        {/* Lessons Completed */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Lessons Completed
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <DonutChart percent={completionPercent} size={80} strokeWidth={8} color="#22c55e" />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {completionPercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                {totalCompleted}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                of {TOTAL_LESSONS} lessons
              </div>
            </div>
          </div>
        </div>

        {/* Modules Started */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Modules Started
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <DonutChart
                percent={Math.round((startedModules.length / MODULES.length) * 100)}
                size={80}
                strokeWidth={8}
                color="#3b82f6"
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {startedModules.length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                {moduleProgress.filter(m => m.percent === 100).length}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                completed
              </div>
            </div>
          </div>
        </div>

        {/* Practice Accuracy */}
        <div style={cardStyle}>
          <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '12px' }}>
            Practice Accuracy
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <DonutChart percent={practicePercent} size={80} strokeWidth={8} color="#f59e0b" />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {practicePercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                {totalCorrect}/{totalQuestions}
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                questions correct
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strongest / Weakest Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          ...cardStyle,
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#dcfce7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: '#16a34a'
          }}>
            {strongest?.percent || 0}%
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>
              Strongest Section
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
              {strongest?.title || 'Start learning to see'}
            </div>
          </div>
        </div>

        <div style={{
          ...cardStyle,
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fef3c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: '600',
            color: '#d97706'
          }}>
            {weakest?.percent || 0}%
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>
              Needs Work
            </div>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#111827' }}>
              {weakest?.title || 'Keep going!'}
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning */}
      <div style={{ ...cardStyle, marginBottom: '24px' }}>
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px'
        }}>
          Continue Learning
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {moduleProgress
            .filter(m => m.percent > 0 && m.percent < 100)
            .slice(0, 3)
            .map(module => (
              <div
                key={module.id}
                onClick={() => onNavigateToModule(module.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: '#f9fafb',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#ea580c'
                  }} />
                  <span style={{ fontSize: '14px', color: '#111827' }}>
                    {module.title}
                  </span>
                </div>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>
                  {module.completed}/{module.lessonCount} lessons
                </span>
              </div>
            ))}
          {moduleProgress.filter(m => m.percent > 0 && m.percent < 100).length === 0 && (
            <div style={{ color: '#6b7280', fontSize: '14px', padding: '12px' }}>
              Start a module to track your progress here
            </div>
          )}
        </div>
      </div>

      {/* All Modules */}
      <div style={cardStyle}>
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px'
        }}>
          All Modules
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px'
        }}>
          {moduleProgress.map(module => (
            <div
              key={module.id}
              onClick={() => onNavigateToModule(module.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: module.percent === 100 ? '#f0fdf4' : '#f9fafb',
                borderRadius: '8px',
                cursor: 'pointer',
                border: module.percent === 100 ? '1px solid #bbf7d0' : '1px solid transparent'
              }}
            >
              <span style={{
                fontSize: '14px',
                color: '#111827',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
                marginRight: '8px'
              }}>
                {module.title}
              </span>
              <span style={{
                fontSize: '13px',
                fontWeight: '500',
                color: module.percent === 100 ? '#16a34a' : module.percent > 0 ? '#ea580c' : '#9ca3af'
              }}>
                {module.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
