import { useState, useRef, useEffect } from 'react';
import { getAllPracticeTests } from '../data/practiceTests';

const PracticeTestList = ({ onSelectTest, onBack, onSelectTestWithMode, practiceTestResults, getTestBestScore, getTestAttempts, inProgressTests, onResumeTest }) => {
  const tests = getAllPracticeTests();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openDropdown]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            fontSize: '14px',
            cursor: 'pointer',
            padding: '0',
            marginBottom: '16px'
          }}
        >
          ← Back to Dashboard
        </button>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '8px'
        }}>
          Practice Tests
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280'
        }}>
          Full-length SAT Math practice tests to prepare for the real exam
        </p>
      </div>

      {/* Test cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {tests.map((test) => {
          const totalQuestions = test.modules.reduce((sum, m) => sum + m.questions.length, 0);
          const totalTime = test.modules.reduce((sum, m) => sum + (m.timeLimit || 35), 0);
          const bestScore = getTestBestScore ? getTestBestScore(test.id) : null;
          const attempts = getTestAttempts ? getTestAttempts(test.id) : 0;
          const inProgress = inProgressTests && inProgressTests[test.id];
          const answeredCount = inProgress ? Object.keys(inProgress.answers || {}).length : 0;
          const isOpen = openDropdown === test.id;

          return (
            <div
              key={test.id}
              style={{
                background: 'white',
                border: bestScore ? '2px solid #22c55e' : '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '24px',
                transition: 'box-shadow 0.2s ease'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h2 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#111827',
                      margin: 0
                    }}>
                      {test.title}
                    </h2>
                    {bestScore && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#f0fdf4',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        border: '1px solid #bbf7d0'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span style={{ fontSize: '13px', fontWeight: '600', color: '#16a34a' }}>
                          Best: {bestScore}
                        </span>
                        <span style={{ fontSize: '12px', color: '#22c55e' }}>
                          ({attempts} attempt{attempts !== 1 ? 's' : ''})
                        </span>
                      </div>
                    )}
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    marginBottom: '16px'
                  }}>
                    {test.description || 'Full-length SAT Math practice test with 2 modules'}
                  </p>

                  {/* Module breakdown */}
                  <div style={{ display: 'flex', gap: '24px', marginBottom: '16px' }}>
                    {test.modules.map((module, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: idx === 0 ? '#3b82f6' : '#10b981'
                        }} />
                        <span style={{ fontSize: '14px', color: '#374151' }}>
                          {module.title}: {module.questions.length} questions
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    fontSize: '13px',
                    color: '#6b7280'
                  }}>
                    <span>{totalQuestions} total questions</span>
                    <span>~{totalTime} minutes</span>
                  </div>
                </div>

                {/* Right side — dropdown button */}
                <div style={{ flexShrink: 0, position: 'relative' }} ref={isOpen ? dropdownRef : null}>
                  {inProgress && onResumeTest ? (
                    /* In-progress: show Resume + Start Over */
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button
                        onClick={() => onResumeTest(test, inProgress.isTimed)}
                        style={{
                          padding: '12px 28px',
                          background: '#16a34a',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px'
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Resume ({answeredCount}/{totalQuestions})
                      </button>
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : test.id)}
                        style={{
                          padding: '10px 20px',
                          background: 'white',
                          color: '#374151',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        Start Over
                        <svg
                          width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                          style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                        >
                          <path d="M3 4.5L6 7.5L9 4.5" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    /* Normal: single Start button with dropdown */
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : test.id)}
                      style={{
                        padding: '12px 28px',
                        background: '#111827',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      Start
                      <svg
                        width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                      >
                        <path d="M3.5 5.25L7 8.75L10.5 5.25" />
                      </svg>
                    </button>
                  )}

                  {/* Dropdown */}
                  {isOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: '6px',
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '10px',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
                      overflow: 'hidden',
                      zIndex: 10,
                      minWidth: '180px',
                      animation: 'ptDropdownIn 0.15s ease'
                    }}>
                      <style>{`
                        @keyframes ptDropdownIn {
                          from { opacity: 0; transform: translateY(-4px); }
                          to { opacity: 1; transform: translateY(0); }
                        }
                      `}</style>
                      <button
                        onClick={() => {
                          setOpenDropdown(null);
                          onSelectTestWithMode ? onSelectTestWithMode(test, true) : onSelectTest(test);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'white',
                          border: 'none',
                          borderBottom: '1px solid #f3f4f6',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#111827',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textAlign: 'left',
                          transition: 'background 0.1s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Timed
                        <span style={{ fontSize: '12px', color: '#9ca3af', marginLeft: 'auto' }}>~{totalTime}m</span>
                      </button>
                      <button
                        onClick={() => {
                          setOpenDropdown(null);
                          onSelectTestWithMode ? onSelectTestWithMode(test, false) : onSelectTest(test);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          background: 'white',
                          border: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#111827',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          textAlign: 'left',
                          transition: 'background 0.1s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        Untimed
                        <span style={{ fontSize: '12px', color: '#9ca3af', marginLeft: 'auto' }}>No limit</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info section */}
      <div style={{
        marginTop: '40px',
        padding: '24px',
        background: '#f9fafb',
        borderRadius: '12px'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '12px'
        }}>
          About Practice Tests
        </h3>
        <ul style={{
          margin: 0,
          paddingLeft: '20px',
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <li>Each test has 2 modules with 22 questions each (44 total)</li>
          <li>Questions match the style and difficulty of the official SAT</li>
          <li><strong>Timed mode</strong> simulates real test conditions with a countdown timer</li>
          <li><strong>Untimed mode</strong> lets you practice at your own pace without time pressure</li>
          <li>Review your answers and explanations after completing each module</li>
        </ul>
      </div>
    </div>
  );
};

export default PracticeTestList;
