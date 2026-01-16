import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { useProgress } from './hooks/useProgress';
import LandingPage from './components/LandingPage';
import AiTutorChat, { AiTutorButton } from './components/AiTutorChat';
import { allLessons } from './data/lessons';
import { fetchTranscript } from './services/transcriptService';
import { getQuestionsForSection, hasQuestionsForSection } from './data/questions';

// Premium Design System - Clean, Modern, Professional
const design = {
  // Colors - Refined white/orange palette
  colors: {
    text: {
      primary: '#0a0a0a',      // Near black for maximum contrast
      secondary: '#525252',    // Neutral gray
      tertiary: '#737373',     // Light gray for labels
      muted: '#a3a3a3',        // Very light for subtle text
    },
    accent: {
      orange: '#ea580c',       // Primary accent
      orangeHover: '#c2410c',  // Darker orange for hover
      orangeLight: '#fff7ed',  // Light orange background
      orangeMuted: '#ffedd5',  // Muted orange for subtle backgrounds
    },
    surface: {
      white: '#ffffff',
      offWhite: '#fafafa',     // Subtle off-white
      gray: '#f5f5f5',         // Light gray backgrounds
      grayDark: '#e5e5e5',     // Borders
      dark: '#171717',         // Dark backgrounds for contrast cards
    },
    semantic: {
      success: '#16a34a',
      successLight: '#f0fdf4',
      error: '#dc2626',
      errorLight: '#fef2f2',
      info: '#2563eb',
      infoLight: '#eff6ff',
    }
  },
  // Typography - Premium scale with better hierarchy
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
    fontFamilyMath: 'Georgia, "Times New Roman", serif',
    sizes: {
      xs: '11px',
      sm: '13px',
      base: '15px',
      md: '17px',
      lg: '19px',
      xl: '22px',
      '2xl': '28px',
      '3xl': '36px',
      '4xl': '48px',
    },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.7',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.1em',
    }
  },
  // Spacing - Generous, breathable
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
  },
  // Border radius - Softer, modern
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '9999px',
  },
  // Shadows - Refined, subtle
  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.16)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  // Transitions
  transitions: {
    fast: '0.15s ease',
    normal: '0.2s ease',
    slow: '0.3s ease',
  }
};

const PerformSAT = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // For section-based practice
  const [view, setView] = useState('modules'); // 'modules', 'list', 'lesson', 'practice'
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [videoTimestamp, setVideoTimestamp] = useState(0);
  const [videoTranscript, setVideoTranscript] = useState(null);
  const [ytReady, setYtReady] = useState(false);
  const playerRef = useRef(null);
  const timestampIntervalRef = useRef(null);
  const playerInitializedForVideo = useRef(null);

  // Practice state
  const [practiceState, setPracticeState] = useState({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    showFeedback: false,
    answers: {},
    isComplete: false
  });

  // Calculator state for practice
  const [showCalculator, setShowCalculator] = useState(false);

  // ESC key handler for calculator
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showCalculator) {
        setShowCalculator(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showCalculator]);

  const { user, loading, logout } = useAuth();
  const { completedLessons, markLessonComplete: markComplete, getModuleProgress: calcProgress, isLessonCompleted, recordPracticeAttempt, hasPracticed, getBestScore } = useProgress(user?.uid);

  const markLessonComplete = (moduleId, lessonId) => {
    const moduleLessons = allLessons[moduleId] || [];
    const lesson = moduleLessons.find(l => l.id === lessonId);
    if (lesson && user) {
      markComplete(moduleId, lessonId, {
        title: lesson.title,
        type: lesson.type
      });
    }
  };

  const getModuleProgress = (moduleId, lessons) => {
    if (!user || !lessons || lessons.length === 0) return 0;
    return calcProgress(moduleId, lessons.length);
  };

  // Practice functions
  const startSectionPractice = (moduleId, sectionName) => {
    setPracticeState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      showFeedback: false,
      answers: {},
      isComplete: false
    });
    setActiveModule(moduleId);
    setActiveSection(sectionName);
    setShowCalculator(false);
    setView('practice');
  };

  const handleSelectAnswer = (answerId) => {
    if (!practiceState.showFeedback) {
      setPracticeState(prev => ({ ...prev, selectedAnswer: answerId }));
    }
  };

  const handleCheckAnswer = (question) => {
    const isCorrect = practiceState.selectedAnswer === question.correctAnswer;
    setPracticeState(prev => ({
      ...prev,
      showFeedback: true,
      answers: {
        ...prev.answers,
        [question.id]: { selected: prev.selectedAnswer, correct: isCorrect }
      }
    }));
  };

  const handleNextQuestion = (questions) => {
    if (practiceState.currentQuestionIndex < questions.length - 1) {
      setPracticeState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showFeedback: false
      }));
    } else {
      // Calculate final score and save
      const correctCount = Object.values(practiceState.answers).filter(a => a.correct).length;
      if (user && activeModule && activeSection) {
        recordPracticeAttempt(activeModule, activeSection, correctCount, questions.length);
      }
      setPracticeState(prev => ({ ...prev, isComplete: true }));
    }
  };

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setYtReady(true);
      return;
    }

    // Set up the callback before loading the script
    window.onYouTubeIframeAPIReady = () => {
      setYtReady(true);
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(tag, firstScript);
    }
  }, []);

  // Keyboard shortcut: Cmd/Ctrl+K to toggle AI Tutor
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Only toggle when viewing a lesson
        if (view === 'lesson') {
          setShowAiTutor(prev => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view]);

  // Fetch transcript when video lesson changes
  useEffect(() => {
    // Reset player tracking when lesson changes
    playerInitializedForVideo.current = null;

    const loadTranscript = async () => {
      // Get current lesson info
      const moduleLessons = activeModule ? allLessons[activeModule] : [];
      const lesson = activeLesson !== null ? moduleLessons.find(l => l.id === activeLesson) : null;

      if (lesson?.type === 'video' && lesson?.videoId) {
        setVideoTimestamp(0);
        const transcript = await fetchTranscript(lesson.videoId);
        setVideoTranscript(transcript);
      } else {
        setVideoTranscript(null);
      }
    };
    loadTranscript();

    // Cleanup: destroy player and clear interval when leaving lesson
    return () => {
      if (timestampIntervalRef.current) {
        clearInterval(timestampIntervalRef.current);
      }
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Player might already be destroyed
        }
        playerRef.current = null;
      }
    };
  }, [activeLesson, activeModule]);

  // Initialize YouTube player when video lesson is active and YT API is ready
  useEffect(() => {
    // Get current lesson info
    const moduleLessons = activeModule ? allLessons[activeModule] : [];
    const lesson = activeLesson !== null ? moduleLessons.find(l => l.id === activeLesson) : null;

    // Only proceed for video lessons with a videoId when YT is ready
    if (!ytReady || !lesson || lesson.type !== 'video' || !lesson.videoId) {
      return;
    }

    // Don't reinitialize if already initialized for this video
    if (playerInitializedForVideo.current === lesson.videoId) {
      return;
    }

    // Small delay to ensure the DOM element exists
    const initTimer = setTimeout(() => {
      const playerElement = document.getElementById('youtube-player');
      if (!playerElement) return;

      // Destroy existing player if any
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Player might already be destroyed
        }
        playerRef.current = null;
      }

      // Clear any existing interval
      if (timestampIntervalRef.current) {
        clearInterval(timestampIntervalRef.current);
      }

      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: lesson.videoId,
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onReady: () => {
            playerInitializedForVideo.current = lesson.videoId;
          },
          onStateChange: (event) => {
            // When playing, start tracking timestamp
            if (event.data === window.YT.PlayerState.PLAYING) {
              if (timestampIntervalRef.current) {
                clearInterval(timestampIntervalRef.current);
              }
              timestampIntervalRef.current = setInterval(() => {
                if (playerRef.current && playerRef.current.getCurrentTime) {
                  setVideoTimestamp(playerRef.current.getCurrentTime());
                }
              }, 1000);
            } else {
              // Stop tracking when paused/ended
              if (timestampIntervalRef.current) {
                clearInterval(timestampIntervalRef.current);
              }
            }
          }
        }
      });
    }, 200);

    return () => {
      clearTimeout(initTimer);
    };
  }, [ytReady, activeLesson, activeModule]);

  const modules = [
    {
      id: 'linear-equations',
      title: 'Linear Equations',
      description: 'Slope, intercepts, and graphing lines',
      lessonCount: 24
    },
    {
      id: 'functions',
      title: 'Functions',
      description: 'Function notation and graph interpretation',
      lessonCount: 10
    },
    {
      id: 'systems',
      title: 'System of Equations',
      description: 'Solving for multiple unknowns',
      lessonCount: 14
    },
    {
      id: 'transformations',
      title: 'Transformations',
      description: 'Shifting, stretching, and reflecting functions',
      lessonCount: 15
    },
    {
      id: 'exponents',
      title: 'Exponents & Exponential Functions',
      description: 'Exponent rules and growth/decay models',
      lessonCount: 12
    },
    {
      id: 'percents',
      title: 'Percents',
      description: 'Percent change and word problems',
      lessonCount: 17
    },
    {
      id: 'equivalent-expressions',
      title: 'Equivalent Expressions',
      description: 'Verifying equivalence with DESMOS',
      lessonCount: 3
    },
    {
      id: 'quadratics',
      title: 'Quadratic Functions & Equations',
      description: 'Parabolas, factoring, and the quadratic formula',
      lessonCount: 18
    },
    {
      id: 'radians-degrees',
      title: 'Radians & Degrees',
      description: 'Converting between angle measurements',
      lessonCount: 4
    },
    {
      id: 'triangles',
      title: 'Triangles',
      description: 'Right triangles, trigonometry, and similar triangles',
      lessonCount: 35
    },
    {
      id: 'circles',
      title: 'Circles',
      description: 'Arcs, sectors, and circle equations',
      lessonCount: 22
    },
    {
      id: 'volume',
      title: 'Volume',
      description: 'Calculating volumes of 3D shapes',
      lessonCount: 9
    },
    {
      id: 'statistics',
      title: 'Statistics',
      description: 'Mean, median, mode, and data analysis',
      lessonCount: 12
    },
    {
      id: 'dimensional-analysis',
      title: 'Dimensional Analysis',
      description: 'Unit conversion and problem solving',
      lessonCount: 4
    }
  ];

  const currentModuleLessons = activeModule ? allLessons[activeModule] : [];
  const currentLesson = activeLesson !== null ? currentModuleLessons.find(l => l.id === activeLesson) : null;
  const currentModuleInfo = modules.find(m => m.id === activeModule);

  // Group lessons by section
  const sections = currentModuleLessons.reduce((acc, lesson) => {
    if (!acc[lesson.section]) {
      acc[lesson.section] = [];
    }
    acc[lesson.section].push(lesson);
    return acc;
  }, {});

  const renderText = (text) => {
    return text.split(/(\*\*.*?\*\*|\*.*?\*)/).map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ fontWeight: design.typography.weights.semibold, color: design.colors.text.primary }}>{part.slice(2, -2)}</strong>;
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} style={{ color: design.colors.accent.orange, fontStyle: 'normal', fontWeight: design.typography.weights.medium }}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  const renderLessonContent = () => {
    if (!currentLesson) return null;

    if (currentLesson.type === 'video') {
      return (
        <div>
          {/* Premium Hero Banner for Videos */}
          {currentLesson.hero && (
            <div style={{
              background: 'linear-gradient(180deg, #0a0a0a 0%, #171717 100%)',
              borderRadius: '24px',
              padding: '48px 40px',
              marginBottom: '32px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 16px 40px -12px rgba(0, 0, 0, 0.25)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(234, 88, 12, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(234, 88, 12, 0.15)',
                  color: '#ea580c',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}>
                  {currentLesson.hero.tagline}
                </span>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#ffffff',
                  letterSpacing: '-0.5px',
                  lineHeight: '1.2',
                  marginBottom: '8px'
                }}>
                  {currentLesson.title}
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#9ca3af',
                  lineHeight: '1.5'
                }}>
                  {currentLesson.hero.subtitle}
                </p>
              </div>
            </div>
          )}

          {/* YouTube Player with timestamp tracking */}
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            borderRadius: design.radius.md,
            overflow: 'hidden',
            background: '#000'
          }}>
            <div
              id="youtube-player"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
          </div>

          {/* Ask Perform Button and Chat - below video */}
          <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AiTutorButton
              onClick={() => setShowAiTutor(!showAiTutor)}
              isOpen={showAiTutor}
            />
            <div style={{ width: '100%' }}>
              <AiTutorChat
                isOpen={showAiTutor}
                onClose={() => setShowAiTutor(false)}
                moduleId={activeModule}
                lessonId={activeLesson}
                lessonTitle={currentLesson?.title}
                isVideoLesson={true}
                videoTranscript={videoTranscript}
                videoTimestamp={videoTimestamp}
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* Premium Hero Section */}
        {currentLesson.hero && (
          <div style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #171717 100%)',
            borderRadius: '32px',
            padding: '72px 56px',
            marginBottom: '64px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            {/* Subtle orange glow */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(234, 88, 12, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(234, 88, 12, 0.15)',
                color: '#ea580c',
                padding: '8px 16px',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '24px'
              }}>
                {currentLesson.hero.tagline}
              </span>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '-1px',
                lineHeight: '1.15',
                marginBottom: '16px'
              }}>
                {currentLesson.title}
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#9ca3af',
                maxWidth: '540px',
                lineHeight: '1.6'
              }}>
                {currentLesson.hero.subtitle}
              </p>
            </div>
          </div>
        )}
        
        {currentLesson.content.blocks.map((block, idx) => {
          switch (block.type) {
            case 'text':
              // Check if this is the first text block (make it larger as a lead)
              const isFirstText = currentLesson.content.blocks.findIndex(b => b.type === 'text') === idx;
              return (
                <p key={idx} style={{
                  fontFamily: design.typography.fontFamily,
                  fontSize: isFirstText ? '24px' : '18px',
                  lineHeight: isFirstText ? '1.75' : '1.85',
                  color: isFirstText ? '#374151' : '#1f2937',
                  marginBottom: '40px',
                  fontWeight: '400',
                  maxWidth: '720px',
                  letterSpacing: '-0.01em'
                }}>
                  {renderText(block.content)}
                </p>
              );

            case 'formula':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: '#fafafa',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '48px 0',
                  textAlign: 'center',
                  border: '1px solid #e5e7eb'
                }}>
                  {/* Orange accent bar at top */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: '#ea580c',
                    borderRadius: '0 0 4px 4px'
                  }} />
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#dc2626',
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: '#fef2f2',
                      padding: '6px 12px',
                      borderRadius: '100px'
                    }}>
                      Must Memorize
                    </div>
                  )}
                  {block.label && (
                    <div style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      marginBottom: '24px'
                    }}>
                      {block.label}
                    </div>
                  )}
                  {block.fraction ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '24px',
                      fontSize: '36px',
                      fontWeight: '500',
                      color: '#0a0a0a',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic'
                    }}>
                      {block.prefix && <span>{block.prefix}</span>}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '0 8px'
                      }}>
                        <span style={{ color: block.numeratorColor || design.colors.text.primary }}>{block.fraction.numerator}</span>
                        <div style={{
                          width: '100%',
                          height: '2px',
                          background: design.colors.text.primary,
                          margin: '8px 0'
                        }} />
                        <span style={{ color: block.denominatorColor || design.colors.text.primary }}>{block.fraction.denominator}</span>
                      </div>
                      {block.suffix && <span>{block.suffix}</span>}
                      {block.secondFraction && (
                        <>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '0 8px'
                          }}>
                            <span style={{ color: block.numeratorColor || design.colors.text.primary }}>{block.secondFraction.numerator}</span>
                            <div style={{
                              width: '100%',
                              height: '2px',
                              background: design.colors.text.primary,
                              margin: '8px 0'
                            }} />
                            <span style={{ color: block.denominatorColor || design.colors.text.primary }}>{block.secondFraction.denominator}</span>
                          </div>
                          {block.secondSuffix && <span>{block.secondSuffix}</span>}
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{
                      fontSize: '36px',
                      fontWeight: '500',
                      color: '#0a0a0a',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic'
                    }}>
                      {block.content}
                    </div>
                  )}
                </div>
              );

            case 'fractionEquation':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: '#fafafa',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '48px 0',
                  textAlign: 'center',
                  border: '1px solid #e5e7eb'
                }}>
                  {/* Orange accent bar at top */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: '#ea580c',
                    borderRadius: '0 0 4px 4px'
                  }} />
                  {block.label && (
                    <div style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      marginBottom: '24px'
                    }}>
                      {block.label}
                    </div>
                  )}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '32px',
                    fontSize: '32px',
                    fontWeight: '500',
                    color: '#0a0a0a',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    flexWrap: 'wrap'
                  }}>
                    {/* Left fraction */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: block.leftColor || design.colors.semantic.info }}>{block.leftNumerator}</span>
                      <div style={{
                        width: '100%',
                        minWidth: '140px',
                        height: '2px',
                        background: design.colors.text.primary,
                        margin: '8px 0'
                      }} />
                      <span style={{ color: design.colors.text.secondary }}>{block.leftDenominator}</span>
                    </div>
                    {/* Equals sign */}
                    <span style={{
                      fontSize: '36px',
                      fontWeight: design.typography.weights.regular,
                      fontStyle: 'normal',
                      color: design.colors.text.primary
                    }}>=</span>
                    {/* Right fraction */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      <span style={{ color: block.rightColor || '#7c3aed' }}>{block.rightNumerator}</span>
                      <div style={{
                        width: '100%',
                        minWidth: '100px',
                        height: '2px',
                        background: design.colors.text.primary,
                        margin: '8px 0'
                      }} />
                      <span style={{ color: design.colors.text.secondary }}>{block.rightDenominator}</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'arcLengthExample':
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px',
                  margin: '48px 0',
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Orange gradient accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #ea580c 0%, #c2410c 100%)'
                  }} />
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#ea580c'
                    }} />
                    <span style={{
                      fontFamily: design.typography.fontFamily,
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#ea580c',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      Worked Example
                    </span>
                  </div>
                  <div style={{
                    fontFamily: design.typography.fontFamily,
                    fontSize: design.typography.sizes.md,
                    color: design.colors.text.secondary,
                    marginBottom: design.spacing.xl
                  }}>
                    Find the arc length for a <strong style={{ color: design.colors.text.primary }}>90° angle</strong> in a circle with <strong style={{ color: design.colors.text.primary }}>radius 8</strong>.
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{
                      background: '#f9fafb',
                      borderRadius: '16px',
                      padding: '24px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontFamily: design.typography.fontFamily, fontSize: '11px', color: '#6b7280', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step 1</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamily, color: '#374151', marginBottom: '12px' }}>Find the circumference</div>
                      <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#0a0a0a' }}>
                        C = 2πr = 2π(8) = <strong style={{ color: '#ea580c' }}>16π</strong>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div style={{
                      background: '#f9fafb',
                      borderRadius: '16px',
                      padding: '24px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontFamily: design.typography.fontFamily, fontSize: '11px', color: '#6b7280', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step 2</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamily, color: '#374151', marginBottom: '12px' }}>Apply the proportion formula</div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        fontSize: '24px',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        padding: '16px',
                        background: '#ffffff',
                        borderRadius: '12px'
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ color: '#ea580c' }}>Arc Length</span>
                          <div style={{ width: '100%', height: '2px', background: '#0a0a0a', margin: '8px 0' }} />
                          <span style={{ color: '#6b7280' }}>16π</span>
                        </div>
                        <span style={{ fontStyle: 'normal', color: '#0a0a0a' }}>=</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ color: '#0a0a0a' }}>90°</span>
                          <div style={{ width: '100%', height: '2px', background: '#0a0a0a', margin: '8px 0' }} />
                          <span style={{ color: '#6b7280' }}>360°</span>
                        </div>
                      </div>
                    </div>

                    {/* Result */}
                    <div style={{
                      background: '#0a0a0a',
                      borderRadius: '16px',
                      padding: '24px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '11px', color: '#ea580c', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solution</div>
                      <div style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#ffffff' }}>
                        Arc Length = ¼ × 16π = <strong style={{ color: '#ea580c' }}>4π</strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'sectorAreaExample':
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px',
                  margin: '48px 0',
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Orange gradient accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #ea580c 0%, #c2410c 100%)'
                  }} />
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#ea580c'
                    }} />
                    <span style={{
                      fontFamily: design.typography.fontFamily,
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#ea580c',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      Worked Example
                    </span>
                  </div>
                  <div style={{
                    fontFamily: design.typography.fontFamily,
                    fontSize: '17px',
                    color: '#374151',
                    marginBottom: '32px',
                    lineHeight: '1.6'
                  }}>
                    Find the sector area for a <strong style={{ color: '#0a0a0a' }}>60° angle</strong> in a circle with <strong style={{ color: '#0a0a0a' }}>radius 6</strong>.
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{
                      background: '#f9fafb',
                      borderRadius: '16px',
                      padding: '24px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontFamily: design.typography.fontFamily, fontSize: '11px', color: '#6b7280', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step 1</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamily, color: '#374151', marginBottom: '12px' }}>Find the total circle area</div>
                      <div style={{ fontSize: '20px', fontFamily: 'Georgia, serif', color: '#0a0a0a' }}>
                        A = πr² = π(6)² = <strong style={{ color: '#ea580c' }}>36π</strong>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div style={{
                      background: '#f9fafb',
                      borderRadius: '16px',
                      padding: '24px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ fontFamily: design.typography.fontFamily, fontSize: '11px', color: '#6b7280', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Step 2</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamily, color: '#374151', marginBottom: '12px' }}>Apply the proportion formula</div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '24px',
                        fontSize: '24px',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        padding: '16px',
                        background: '#ffffff',
                        borderRadius: '12px'
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ color: '#ea580c' }}>Sector Area</span>
                          <div style={{ width: '100%', height: '2px', background: '#0a0a0a', margin: '8px 0' }} />
                          <span style={{ color: '#6b7280' }}>36π</span>
                        </div>
                        <span style={{ fontStyle: 'normal', color: '#0a0a0a' }}>=</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ color: '#0a0a0a' }}>60°</span>
                          <div style={{ width: '100%', height: '2px', background: '#0a0a0a', margin: '8px 0' }} />
                          <span style={{ color: '#6b7280' }}>360°</span>
                        </div>
                      </div>
                    </div>

                    {/* Result */}
                    <div style={{
                      background: '#0a0a0a',
                      borderRadius: '16px',
                      padding: '24px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '11px', color: '#ea580c', marginBottom: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solution</div>
                      <div style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#ffffff' }}>
                        Sector Area = ⅙ × 36π = <strong style={{ color: '#ea580c' }}>6π</strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleStandardFormExample':
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px',
                  margin: '48px 0',
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Orange gradient accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #ea580c 0%, #c2410c 100%)'
                  }} />
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#ea580c'
                    }} />
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#ea580c',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      Example
                    </span>
                  </div>
                  
                  {/* Given Equation */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.sm,
                    padding: '20px',
                    marginBottom: '20px',
                    border: `1px solid ${design.colors.surface.grayDark}`,
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '12px', fontWeight: '600' }}>GIVEN EQUATION</div>
                    <div style={{ 
                      fontSize: '24px', 
                      fontFamily: design.typography.fontFamilyMath, 
                      color: design.colors.text.primary,
                      fontWeight: '500'
                    }}>
                      (<span style={{ color: design.colors.semantic.info }}>x</span> + 2)² + (<span style={{ color: design.colors.semantic.info }}>y</span> − 5)² = 64
                    </div>
                  </div>
                  
                  {/* Finding the Center */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.sm,
                    padding: '20px',
                    marginBottom: '16px',
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '16px', fontWeight: '600' }}>FINDING THE CENTER</div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {/* h value */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: '#f0f9ff',
                        borderRadius: '6px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ fontSize: '16px', color: design.colors.text.secondary }}>Equation has</span>
                        <span style={{ 
                          fontSize: '18px', 
                          fontFamily: design.typography.fontFamilyMath,
                          fontWeight: '600',
                          color: design.colors.semantic.info,
                          padding: '4px 12px',
                          background: '#dbeafe',
                          borderRadius: '4px'
                        }}>(x + 2)</span>
                        <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                        <span style={{ fontSize: '16px', color: design.colors.text.secondary }}>h =</span>
                        <span style={{ 
                          fontSize: '20px', 
                          fontWeight: '700',
                          color: design.colors.semantic.error
                        }}>−2</span>
                        <span style={{ 
                          fontSize: '13px', 
                          color: design.colors.semantic.error,
                          fontWeight: '500',
                          padding: '4px 8px',
                          background: '#fee2e2',
                          borderRadius: '4px'
                        }}>flip the sign!</span>
                      </div>
                      
                      {/* k value */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        background: '#f0fdf4',
                        borderRadius: '6px',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ fontSize: '16px', color: design.colors.text.secondary }}>Equation has</span>
                        <span style={{ 
                          fontSize: '18px', 
                          fontFamily: design.typography.fontFamilyMath,
                          fontWeight: '600',
                          color: design.colors.semantic.success,
                          padding: '4px 12px',
                          background: '#dcfce7',
                          borderRadius: '4px'
                        }}>(y − 5)</span>
                        <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                        <span style={{ fontSize: '16px', color: design.colors.text.secondary }}>k =</span>
                        <span style={{ 
                          fontSize: '20px', 
                          fontWeight: '700',
                          color: design.colors.semantic.success
                        }}>+5</span>
                        <span style={{ 
                          fontSize: '13px', 
                          color: design.colors.semantic.success,
                          fontWeight: '500',
                          padding: '4px 8px',
                          background: '#dcfce7',
                          borderRadius: '4px'
                        }}>flip the sign!</span>
                      </div>
                    </div>
                    
                    {/* Center Result */}
                    <div style={{
                      marginTop: '16px',
                      padding: '12px 20px',
                      background: design.colors.text.primary,
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <span style={{ color: '#9ca3af', fontSize: '14px' }}>Center = </span>
                      <span style={{ 
                        color: design.colors.surface.white, 
                        fontSize: '20px', 
                        fontWeight: '600',
                        fontFamily: design.typography.fontFamilyMath
                      }}>(−2, 5)</span>
                    </div>
                  </div>
                  
                  {/* Finding the Radius */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.sm,
                    padding: '20px',
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '16px', fontWeight: '600' }}>FINDING THE RADIUS</div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '16px',
                      padding: '16px',
                      background: '#faf5ff',
                      borderRadius: '6px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ 
                        fontSize: '18px', 
                        fontFamily: design.typography.fontFamilyMath,
                        color: '#7c3aed'
                      }}>r² = 64</span>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                      <span style={{ 
                        fontSize: '18px', 
                        fontFamily: design.typography.fontFamilyMath,
                        color: '#7c3aed'
                      }}>r = √64</span>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>→</span>
                      <span style={{ 
                        fontSize: '24px', 
                        fontWeight: '700',
                        color: '#7c3aed'
                      }}>r = 8</span>
                    </div>
                    
                    {/* Radius Result */}
                    <div style={{
                      marginTop: '16px',
                      padding: '12px 20px',
                      background: design.colors.text.primary,
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <span style={{ color: '#9ca3af', fontSize: '14px' }}>Radius = </span>
                      <span style={{ 
                        color: design.colors.surface.white, 
                        fontSize: '20px', 
                        fontWeight: '600',
                        fontFamily: design.typography.fontFamilyMath
                      }}>8</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleTransformRules':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>TRANSLATION RULES</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', border: `1px solid ${design.colors.surface.grayDark}`, textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '8px' }}>Move <strong style={{ color: design.colors.semantic.info }}>RIGHT</strong> a units</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>h → <strong>h + a</strong></div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', border: `1px solid ${design.colors.surface.grayDark}`, textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '8px' }}>Move <strong style={{ color: design.colors.semantic.info }}>LEFT</strong> a units</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>h → <strong>h − a</strong></div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', border: `1px solid ${design.colors.surface.grayDark}`, textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '8px' }}>Move <strong style={{ color: design.colors.semantic.success }}>UP</strong> b units</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>k → <strong>k + b</strong></div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', border: `1px solid ${design.colors.surface.grayDark}`, textAlign: 'center' }}>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '8px' }}>Move <strong style={{ color: design.colors.semantic.success }}>DOWN</strong> b units</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>k → <strong>k − b</strong></div>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleTransformExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  
                  {/* Original */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', marginBottom: '16px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '12px', fontWeight: '600' }}>ORIGINAL EQUATION</div>
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '22px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>(x + 2)² + (y − 1)² = 9</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>Center = <strong style={{ color: design.colors.text.primary }}>(−2, 1)</strong></span>
                      <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>Radius = <strong style={{ color: design.colors.text.primary }}>3</strong></span>
                    </div>
                  </div>
                  
                  {/* Transformation */}
                  <div style={{ background: '#fef3c7', borderRadius: design.radius.sm, padding: '16px', marginBottom: '16px', textAlign: 'center' }}>
                    <span style={{ fontSize: '16px', color: '#92400e', fontWeight: '600' }}>↓ Shift DOWN 4 units ↓</span>
                  </div>
                  
                  {/* Process */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', marginBottom: '16px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '12px', fontWeight: '600' }}>CALCULATE NEW CENTER</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px', background: '#f0fdf4', borderRadius: '6px' }}>
                      <span style={{ fontSize: '16px', color: design.colors.text.secondary }}>New k =</span>
                      <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.success }}>1 − 4</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success }}>−3</span>
                    </div>
                    <div style={{ marginTop: '12px', textAlign: 'center' }}>
                      <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>New Center = </span>
                      <span style={{ fontSize: '18px', fontWeight: '600', color: design.colors.text.primary }}>(−2, −3)</span>
                    </div>
                  </div>
                  
                  {/* New Equation */}
                  <div style={{ background: design.colors.text.primary, borderRadius: design.radius.sm, padding: '20px', textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px', fontWeight: '600' }}>NEW EQUATION</div>
                    <span style={{ fontSize: '22px', fontFamily: design.typography.fontFamilyMath, color: design.colors.surface.white }}>(x + 2)² + (y + 3)² = 9</span>
                  </div>
                </div>
              );
            
            case 'domainRangeFormulas':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ background: '#dbeafe', borderRadius: design.radius.sm, padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '13px', color: '#1e40af', marginBottom: '8px', fontWeight: '600' }}>DOMAIN (X-VALUES)</div>
                      <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: '#1d4ed8', fontWeight: '600' }}>[h − r, h + r]</div>
                      <div style={{ fontSize: '14px', color: '#3b82f6', marginTop: '8px' }}>How far left & right</div>
                    </div>
                    <div style={{ background: '#dcfce7', borderRadius: design.radius.sm, padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '13px', color: '#166534', marginBottom: '8px', fontWeight: '600' }}>RANGE (Y-VALUES)</div>
                      <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.success, fontWeight: '600' }}>[k − r, k + r]</div>
                      <div style={{ fontSize: '14px', color: '#22c55e', marginTop: '8px' }}>How far up & down</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'axisIntersectionRules':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.semantic.error, marginBottom: '8px' }}>To Intersect the X-Axis</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary }}>The y-value must be 0</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginTop: '8px' }}>→ Check if <strong>0 is in the Range</strong></div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.semantic.info, marginBottom: '8px' }}>To Intersect the Y-Axis</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary }}>The x-value must be 0</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginTop: '8px' }}>→ Check if <strong>0 is in the Domain</strong></div>
                    </div>
                  </div>
                </div>
              );
            
            case 'domainRangeExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  
                  {/* Given */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', marginBottom: '16px', border: `1px solid ${design.colors.surface.grayDark}`, textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '12px', fontWeight: '600' }}>GIVEN</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '18px', color: design.colors.text.primary }}>Center = <strong>(3, 4)</strong></span>
                      <span style={{ fontSize: '18px', color: design.colors.text.primary }}>Radius = <strong>5</strong></span>
                    </div>
                  </div>
                  
                  {/* Calculate Domain & Range */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '13px', color: '#1e40af', marginBottom: '12px', fontWeight: '600' }}>DOMAIN</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.secondary, marginBottom: '8px' }}>
                        [h − r, h + r]
                      </div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.info }}>
                        [3 − 5, 3 + 5]
                      </div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#1d4ed8', marginTop: '8px' }}>
                        [−2, 8]
                      </div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '13px', color: '#166534', marginBottom: '12px', fontWeight: '600' }}>RANGE</div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.secondary, marginBottom: '8px' }}>
                        [k − r, k + r]
                      </div>
                      <div style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.success }}>
                        [4 − 5, 4 + 5]
                      </div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, marginTop: '8px' }}>
                        [−1, 9]
                      </div>
                    </div>
                  </div>
                  
                  {/* Check Intersections */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '16px', fontWeight: '600' }}>CHECK AXIS INTERSECTIONS</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px', background: '#f0f9ff', borderRadius: '6px' }}>
                        <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>Intersects <strong style={{ color: design.colors.semantic.info }}>Y-Axis</strong>?</span>
                        <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>Is 0 in [−2, 8]?</span>
                        <span style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, padding: '4px 12px', background: '#dcfce7', borderRadius: '4px' }}>YES</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: '12px', background: '#fef2f2', borderRadius: '6px' }}>
                        <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>Intersects <strong style={{ color: design.colors.semantic.error }}>X-Axis</strong>?</span>
                        <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>Is 0 in [−1, 9]?</span>
                        <span style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, padding: '4px 12px', background: '#dcfce7', borderRadius: '4px' }}>YES</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'completingSquareSteps':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>THE PROCESS</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: '1', text: 'Move all constants to one side' },
                      { num: '2', text: 'Group x-terms and y-terms together' },
                      { num: '3', text: 'Complete the square for each group' },
                      { num: '4', text: 'Add the same values to BOTH sides' },
                      { num: '5', text: 'Factor into squared binomials' }
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '14px 18px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                        <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>{step.num}</span>
                        <span style={{ fontSize: '16px', color: design.colors.text.primary }}>{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'completingSquareExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.accent.orange, marginBottom: '20px' }}>Full Example</div>
                  
                  {/* Given */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', marginBottom: '16px', border: `1px solid ${design.colors.surface.grayDark}`, textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '600' }}>CONVERT TO STANDARD FORM</div>
                    <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>x² + y² + 6x − 4y − 12 = 0</div>
                  </div>
                  
                  {/* Step 1 */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>1</span>
                      <span style={{ fontSize: '13px', color: design.colors.text.tertiary, fontWeight: '600' }}>MOVE CONSTANTS</span>
                    </div>
                    <div style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, textAlign: 'center' }}>x² + y² + 6x − 4y = 12</div>
                  </div>
                  
                  {/* Step 2 */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>2</span>
                      <span style={{ fontSize: '13px', color: design.colors.text.tertiary, fontWeight: '600' }}>GROUP TERMS</span>
                    </div>
                    <div style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, textAlign: 'center' }}>
                      (<span style={{ color: design.colors.semantic.info }}>x² + 6x</span>) + (<span style={{ color: design.colors.semantic.success }}>y² − 4y</span>) = 12
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>3</span>
                      <span style={{ fontSize: '13px', color: design.colors.text.tertiary, fontWeight: '600' }}>COMPLETE THE SQUARE</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                      <div style={{ padding: '10px 16px', background: '#dbeafe', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#1e40af' }}>(6 ÷ 2)² =</div>
                        <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.semantic.info }}>9</div>
                      </div>
                      <div style={{ padding: '10px 16px', background: '#dcfce7', borderRadius: '6px', textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#166534' }}>(−4 ÷ 2)² =</div>
                        <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success }}>4</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>4</span>
                      <span style={{ fontSize: '13px', color: design.colors.text.tertiary, fontWeight: '600' }}>ADD TO BOTH SIDES</span>
                    </div>
                    <div style={{ fontSize: '17px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, textAlign: 'center' }}>
                      (x² + 6x + <span style={{ color: design.colors.semantic.info }}>9</span>) + (y² − 4y + <span style={{ color: design.colors.semantic.success }}>4</span>) = 12 + <span style={{ color: design.colors.semantic.info }}>9</span> + <span style={{ color: design.colors.semantic.success }}>4</span>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '16px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '12px' }}>5</span>
                      <span style={{ fontSize: '13px', color: design.colors.text.tertiary, fontWeight: '600' }}>FACTOR</span>
                    </div>
                    <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, textAlign: 'center', fontWeight: '600' }}>
                      (x + 3)² + (y − 2)² = 25
                    </div>
                  </div>
                  
                  {/* Answer */}
                  <div style={{ background: design.colors.text.primary, borderRadius: design.radius.sm, padding: '20px' }}>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px', fontWeight: '600', textAlign: 'center' }}>ANSWER</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#9ca3af' }}>Center</div>
                        <div style={{ fontSize: '22px', fontWeight: '600', color: design.colors.surface.white, fontFamily: design.typography.fontFamilyMath }}>(−3, 2)</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: '#9ca3af' }}>Radius</div>
                        <div style={{ fontSize: '22px', fontWeight: '600', color: design.colors.surface.white, fontFamily: design.typography.fontFamilyMath }}>5</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            // Dimensional Analysis Components
            case 'dimensionalAnalysisRules':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '16px', fontWeight: '600', textAlign: 'center' }}>KEY RULES</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', border: `1px solid ${design.colors.surface.grayDark}`, display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>1</span>
                      <span style={{ fontSize: '16px', color: design.colors.text.primary }}>You can only <strong>add or compare</strong> quantities with the <strong>same units</strong></span>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', border: `1px solid ${design.colors.surface.grayDark}`, display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>2</span>
                      <span style={{ fontSize: '16px', color: design.colors.text.primary }}>Units <strong>cancel</strong> when one is on the <strong>top</strong> (numerator) and the same unit is on the <strong>bottom</strong> (denominator)</span>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', border: `1px solid ${design.colors.surface.grayDark}`, display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2563eb', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', flexShrink: 0 }}>3</span>
                      <span style={{ fontSize: '16px', color: design.colors.text.primary }}>The final answer must have the <strong>correct unit</strong> for what's being measured</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'dimensionalAnalysisExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.accent.orange, marginBottom: '20px' }}>Example: Unit Cancellation</div>
                  
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', marginBottom: '16px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.secondary, marginBottom: '12px' }}>Convert <strong style={{ color: design.colors.text.primary }}>5 hours</strong> to <strong style={{ color: design.colors.text.primary }}>minutes</strong></div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', padding: '16px', background: '#f0f9ff', borderRadius: design.radius.sm }}>
                      <span style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>5 <span style={{ color: design.colors.semantic.error, textDecoration: 'line-through' }}>hours</span></span>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>×</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.info }}>60 minutes</span>
                        <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '4px 0' }} />
                        <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.error, textDecoration: 'line-through' }}>1 hour</span>
                      </div>
                      <span style={{ fontSize: '20px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '24px', fontWeight: '700', color: design.colors.semantic.success }}>300 minutes</span>
                    </div>
                  </div>
                  
                  <div style={{ background: '#dcfce7', borderRadius: design.radius.sm, padding: '14px 20px', textAlign: 'center' }}>
                    <span style={{ fontSize: '15px', color: '#166534' }}>The <strong>"hours"</strong> cancel out, leaving only <strong>"minutes"</strong></span>
                  </div>
                </div>
              );
            
            case 'squaredUnitsWarning':
              return (
                <div key={idx} style={{
                  background: '#fef3c7',
                  borderRadius: design.radius.md,
                  padding: '20px 24px',
                  margin: '24px 0',
                  border: '2px solid #f59e0b'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: design.spacing.sm }}>
                    <div style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.base, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange }}>Note</div>
                    <div>
                      <div style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.base, fontWeight: design.typography.weights.semibold, color: '#92400e', marginBottom: '4px' }}>Big Idea</div>
                      <div style={{ fontSize: '15px', color: '#78350f' }}>When a unit is <strong>squared</strong>, the <strong>entire conversion factor must be squared</strong>. You are converting the unit <strong>twice</strong>, not once.</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'squaredUnitsExample1':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.accent.orange, marginBottom: '20px' }}>Example 1: ft² → in²</div>
                  
                  {/* Linear Conversion */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '600' }}>LINEAR CONVERSION</div>
                    <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, textAlign: 'center' }}>
                      1 ft = 12 in
                    </div>
                  </div>
                  
                  {/* Square It */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '600' }}>SQUARE IT</div>
                    <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: '#7c3aed', textAlign: 'center' }}>
                      1 ft² = (12)² in² = <strong>144 in²</strong>
                    </div>
                  </div>
                  
                  {/* Convert */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '12px', fontWeight: '600' }}>CONVERT: 5 ft² → in²</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', padding: '16px', background: '#faf5ff', borderRadius: design.radius.sm }}>
                      <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>5 ft²</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>×</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>(</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: '#7c3aed' }}>12 in</span>
                          <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '3px 0' }} />
                          <span style={{ fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: '#7c3aed' }}>1 ft</span>
                        </div>
                        <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>)²</span>
                      </div>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>5 × 144</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '22px', fontWeight: '700', color: design.colors.semantic.success }}>720 in²</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'squaredUnitsExample2':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.accent.orange, marginBottom: '20px' }}>Example 2: yd² → ft²</div>
                  
                  {/* Linear Conversion */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '600' }}>LINEAR CONVERSION</div>
                    <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, textAlign: 'center' }}>
                      1 yd = 3 ft
                    </div>
                  </div>
                  
                  {/* Square It */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px 20px', marginBottom: '12px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '600' }}>SQUARE IT</div>
                    <div style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: '#7c3aed', textAlign: 'center' }}>
                      1 yd² = (3)² ft² = <strong>9 ft²</strong>
                    </div>
                  </div>
                  
                  {/* Convert */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '12px', fontWeight: '600' }}>CONVERT: 8 yd² → ft²</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', padding: '16px', background: '#f0fdf4', borderRadius: design.radius.sm }}>
                      <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>8 yd²</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>×</span>
                      <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.success }}>9</span>
                      <span style={{ fontSize: '18px', color: '#9ca3af' }}>=</span>
                      <span style={{ fontSize: '22px', fontWeight: '700', color: design.colors.semantic.success }}>72 ft²</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'whySquareConversion':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '16px' }}>Why You Square the Conversion</div>
                  
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                    <div style={{ fontSize: '16px', color: design.colors.text.secondary, marginBottom: '16px' }}>
                      You are not converting <strong style={{ color: design.colors.text.primary }}>one</strong> unit.<br/>
                      You are converting the unit <strong style={{ color: design.colors.semantic.error }}>twice</strong>.
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '16px', background: '#fef2f2', borderRadius: design.radius.sm }}>
                      <span style={{ fontSize: '15px', color: design.colors.text.secondary }}>That's why:</span>
                      <span style={{ fontSize: '22px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.error, fontWeight: '600' }}>(12)² ≠ 12</span>
                    </div>
                  </div>
                </div>
              );
            
            // Percents Components - Premium Design
            case 'percentIntro':
              return (
                <div key={idx} style={{ margin: `${design.spacing.xl} 0` }}>
                  {/* Definition Card */}
                  <div style={{
                    background: design.colors.surface.dark,
                    borderRadius: design.radius.xl,
                    padding: design.spacing.xl,
                    marginBottom: design.spacing.lg,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.1) 0%, transparent 50%)',
                      pointerEvents: 'none'
                    }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider, textTransform: 'uppercase' }}>Definition</div>
                      <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: design.spacing.md, color: design.colors.surface.white }}>A Percent is a way of expressing part of a whole.</div>
                      <div style={{ fontSize: design.typography.sizes.lg, color: design.colors.text.muted }}>It means "<strong style={{ color: design.colors.surface.white }}>per one hundred</strong>"</div>
                    </div>
                  </div>

                  {/* Visual Example */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.xl,
                    padding: design.spacing.xl,
                    textAlign: 'center',
                    boxShadow: design.shadows.md,
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    <div style={{ fontSize: design.typography.sizes.md, color: design.colors.text.tertiary, marginBottom: design.spacing.lg }}>So when we say something is</div>
                    <div style={{
                      fontSize: design.typography.sizes['4xl'],
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.accent.orange,
                      marginBottom: design.spacing.lg
                    }}>30%</div>
                    <div style={{ fontSize: design.typography.sizes.md, color: design.colors.text.tertiary, marginBottom: design.spacing.md }}>we mean</div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: design.spacing.md,
                      background: design.colors.surface.gray,
                      padding: `${design.spacing.md} ${design.spacing.xl}`,
                      borderRadius: design.radius.lg
                    }}>
                      <span style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, color: design.colors.accent.orange }}>30</span>
                      <span style={{ fontSize: design.typography.sizes.lg, color: design.colors.text.tertiary }}>out of</span>
                      <span style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, color: design.colors.text.primary }}>100</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'percentTypesIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.dark,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ textAlign: 'center', marginBottom: design.spacing.xl }}>
                    <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider, textTransform: 'uppercase' }}>On The SAT</div>
                    <div style={{ fontSize: design.typography.sizes['2xl'], color: design.colors.surface.white, fontWeight: design.typography.weights.bold }}>Two Types of Percent Questions</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: design.spacing.md }}>
                    <div style={{
                      background: design.colors.accent.orange,
                      borderRadius: design.radius.lg,
                      padding: design.spacing.lg,
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.surface.white, marginBottom: design.spacing.xs }}>Percent Of</div>
                      <div style={{ fontSize: design.typography.sizes.sm, color: 'rgba(255,255,255,0.85)' }}>Finding a part of a whole</div>
                    </div>
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: design.radius.lg,
                      padding: design.spacing.lg,
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.surface.white, marginBottom: design.spacing.xs }}>Percent Change</div>
                      <div style={{ fontSize: design.typography.sizes.sm, color: design.colors.text.muted }}>Comparing original to new</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'percentOfIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>HOW TO IDENTIFY</div>
                  <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>Percent Of questions clearly mention "Percent Of" in the problem.</div>
                  <div style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.6 }}>The method to solve them is to <strong>turn the text into an equation</strong>.</div>
                </div>
              );
            
            case 'percentOfTranslationTable':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>TEXT → EQUATION TRANSLATION</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.text.tertiary, padding: '0 20px' }}>TEXT</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.text.tertiary, padding: '0 20px' }}>EQUATION</div>
                    </div>
                    
                    {/* Rows */}
                    {[
                      { text: 'What / How much / How many', eq: 'Variable (x)', color: '#7c3aed' },
                      { text: 'Percent', eq: 'Percent ÷ 100', color: design.colors.accent.orange },
                      { text: 'Of', eq: '× (multiply)', color: design.colors.semantic.info },
                      { text: 'Is', eq: '= (equals)', color: design.colors.semantic.success }
                    ].map((row, i) => (
                      <div key={i} style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '16px',
                        background: design.colors.surface.white,
                        borderRadius: design.radius.md,
                        overflow: 'hidden',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                      }}>
                        <div style={{ padding: '18px 20px', fontSize: '17px', color: design.colors.text.primary, borderRight: '1px solid #f0f0f0' }}>{row.text}</div>
                        <div style={{ padding: '18px 20px', fontSize: '18px', fontWeight: '600', color: row.color, fontFamily: design.typography.fontFamilyMath }}>{row.eq}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'percentOfWorkedExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.accent.orange, marginBottom: '24px', letterSpacing: '0.5px' }}>WORKED EXAMPLE</div>
                  
                  {/* Question */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '24px',
                    marginBottom: '20px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ fontSize: '20px', color: design.colors.text.primary, lineHeight: 1.5 }}>
                      <span style={{ color: '#7c3aed', fontWeight: '600' }}>What</span> <span style={{ color: design.colors.semantic.success, fontWeight: '600' }}>is</span> <span style={{ color: design.colors.accent.orange, fontWeight: '600' }}>25%</span> <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>of</span> <span style={{ fontWeight: '600' }}>80</span>?
                    </div>
                  </div>
                  
                  {/* Step 1: Translate */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '24px',
                    marginBottom: '16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px' }}>1</span>
                      <span style={{ fontSize: '14px', color: design.colors.text.tertiary, fontWeight: '600' }}>TRANSLATE TO EQUATION</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '16px', 
                      flexWrap: 'wrap',
                      padding: '20px',
                      background: '#f9fafb',
                      borderRadius: design.radius.sm
                    }}>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: '#7c3aed', fontFamily: design.typography.fontFamilyMath }}>x</span>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: design.colors.semantic.success }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '22px', color: design.colors.accent.orange, fontWeight: '600' }}>25</span>
                        <div style={{ width: '50px', height: '3px', background: design.colors.text.primary, margin: '6px 0' }} />
                        <span style={{ fontSize: '22px', color: design.colors.text.primary }}>100</span>
                      </div>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: design.colors.semantic.info }}>×</span>
                      <span style={{ fontSize: '28px', fontWeight: '600', color: design.colors.text.primary, fontFamily: design.typography.fontFamilyMath }}>80</span>
                    </div>
                  </div>
                  
                  {/* Step 2: Solve */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '24px',
                    marginBottom: '16px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: design.colors.accent.orange, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px' }}>2</span>
                      <span style={{ fontSize: '14px', color: design.colors.text.tertiary, fontWeight: '600' }}>SOLVE</span>
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '22px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>
                      x = 0.25 × 80 = <strong>20</strong>
                    </div>
                  </div>
                  
                  {/* Answer */}
                  <div style={{
                    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                    borderRadius: design.radius.md,
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>ANSWER: </span>
                    <span style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, color: design.colors.surface.white, fontFamily: design.typography.fontFamilyMath }}>20</span>
                  </div>
                </div>
              );
            
            case 'percentChangeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>HOW TO IDENTIFY</div>
                  <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>Percent Change questions compare two values — an original value and a new value.</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm,
                    marginTop: '16px'
                  }}>
                    Percent Change measures how much a quantity increases or decreases <strong>relative to its original value</strong>.
                  </div>
                </div>
              );
            
            case 'percentIncreaseFormula':
              return (
                <div key={idx} style={{
                  background: '#f0fdf4',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: '2px solid #16a34a'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wide }}>Percent Increase</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '12px', 
                    flexWrap: 'wrap',
                    padding: '24px',
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md
                  }}>
                    <span style={{ fontSize: '24px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>Initial</span>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>×</span>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>(</span>
                    <span style={{ fontSize: '24px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>1</span>
                    <span style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, color: design.colors.semantic.success }}>+</span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', color: design.colors.semantic.success, fontWeight: '600' }}>% increase</span>
                      <div style={{ width: '100px', height: '3px', background: design.colors.text.primary, margin: '6px 0' }} />
                      <span style={{ fontSize: '18px', color: design.colors.text.primary }}>100</span>
                    </div>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>)</span>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>=</span>
                    <span style={{ fontSize: '24px', fontFamily: design.typography.fontFamilyMath, fontWeight: '700', color: design.colors.text.primary }}>Final</span>
                  </div>
                </div>
              );
            
            case 'percentDecreaseFormula':
              return (
                <div key={idx} style={{
                  background: '#fef2f2',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: '2px solid #dc2626'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.error, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wide }}>Percent Decrease</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '12px', 
                    flexWrap: 'wrap',
                    padding: '24px',
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md
                  }}>
                    <span style={{ fontSize: '24px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>Initial</span>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>×</span>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>(</span>
                    <span style={{ fontSize: '24px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>1</span>
                    <span style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, color: design.colors.semantic.error }}>−</span>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', color: design.colors.semantic.error, fontWeight: '600' }}>% decrease</span>
                      <div style={{ width: '100px', height: '3px', background: design.colors.text.primary, margin: '6px 0' }} />
                      <span style={{ fontSize: '18px', color: design.colors.text.primary }}>100</span>
                    </div>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>)</span>
                    <span style={{ fontSize: '24px', color: design.colors.text.secondary }}>=</span>
                    <span style={{ fontSize: '24px', fontFamily: design.typography.fontFamilyMath, fontWeight: '700', color: design.colors.text.primary }}>Final</span>
                  </div>
                </div>
              );
            
            case 'percentChangeKeyInsight':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: '24px 32px',
                  margin: '24px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div>
                    <div style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.sm, color: '#9ca3af', marginBottom: '4px', fontWeight: design.typography.weights.semibold, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wide }}>Key Insight</div>
                    <div style={{ fontSize: '17px', color: design.colors.surface.white, lineHeight: 1.5 }}>
                      The change is always calculated <strong>relative to the original value</strong>, not the new value.
                    </div>
                  </div>
                </div>
              );
            
            case 'percentModelIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>DEFINITION</div>
                  <div style={{ fontSize: '22px', fontWeight: '600', marginBottom: '16px' }}>A Percent Model describes how a quantity changes by the same percentage over equal time intervals.</div>
                  <div style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.6 }}>
                    Percent Models are depicted as <strong>functions</strong> that involve percent change.
                  </div>
                </div>
              );
            
            case 'percentModelFormulaPremium':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>PERCENT MODEL FORMULA</div>
                  
                  {/* Main Formula */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '32px', 
                      fontFamily: design.typography.fontFamilyMath,
                      flexWrap: 'wrap',
                      justifyContent: 'center'
                    }}>
                      <span style={{ color: '#7c3aed', fontWeight: '600' }}>f(t)</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: design.colors.accent.orange, fontWeight: '600' }}>Initial</span>
                      <span style={{ color: design.colors.text.secondary }}>×</span>
                      <span style={{ color: design.colors.text.secondary }}>(</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>rate</span>
                      <span style={{ color: design.colors.text.secondary }}>)</span>
                      <sup style={{ fontSize: '20px', color: design.colors.semantic.success, fontWeight: '700' }}>t</sup>
                    </div>
                  </div>
                  
                  {/* Variable Explanations */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                    {[
                      { var: 'f(t)', label: 'Final amount', desc: 'Value at time t', color: '#7c3aed', bg: '#faf5ff' },
                      { var: 'Initial', label: 'Starting value', desc: 'Value at t = 0', color: design.colors.accent.orange, bg: '#fff7ed' },
                      { var: 'rate', label: 'Growth factor', desc: '1 ± (% ÷ 100)', color: design.colors.semantic.info, bg: '#eff6ff' },
                      { var: 't', label: 'Time periods', desc: 'Number of intervals', color: design.colors.semantic.success, bg: '#f0fdf4' }
                    ].map((item, i) => (
                      <div key={i} style={{ background: item.bg, borderRadius: design.radius.md, padding: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: item.color, fontFamily: design.typography.fontFamilyMath, marginBottom: '8px' }}>{item.var}</div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '4px' }}>{item.label}</div>
                        <div style={{ fontSize: '12px', color: design.colors.text.secondary }}>{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            // Exponents Components - Premium Design
            case 'exponentLawsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>MASTER THESE RULES</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '12px' }}>Laws of Exponents</div>
                  <div style={{ fontSize: '17px', opacity: 0.9, lineHeight: 1.6 }}>
                    These 8 rules form the foundation for simplifying and manipulating exponential expressions on the SAT.
                  </div>
                </div>
              );
            
            case 'exponentRulesGrid':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: '#fafafa',
                  borderRadius: '24px',
                  padding: '40px',
                  margin: '48px 0',
                  border: '1px solid #e5e7eb'
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Product Rule */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Product Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Multiply powers with same base → <strong>add</strong> exponents</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: design.colors.semantic.info,
                          padding: '12px 20px',
                          background: '#eff6ff',
                          borderRadius: design.radius.sm
                        }}>
                          a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quotient Rule */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Quotient Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Divide powers with same base → <strong>subtract</strong> exponents</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: '#7c3aed',
                          padding: '12px 20px',
                          background: '#faf5ff',
                          borderRadius: design.radius.sm
                        }}>
                          a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power of a Power */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Power of a Power Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Power raised to another power → <strong>multiply</strong> exponents</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: design.colors.accent.orange,
                          padding: '12px 20px',
                          background: '#fff7ed',
                          borderRadius: design.radius.sm
                        }}>
                          (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power of a Product */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Power of a Product Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Product raised to power → <strong>distribute</strong> to each factor</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: design.colors.semantic.success,
                          padding: '12px 20px',
                          background: '#f0fdf4',
                          borderRadius: design.radius.sm
                        }}>
                          (ab)<sup>m</sup> = a<sup>m</sup>b<sup>m</sup>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power of a Quotient */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Power of a Quotient Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Fraction raised to power → <strong>distribute</strong> to top and bottom</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: '#ec4899',
                          padding: '12px 20px',
                          background: '#fdf2f8',
                          borderRadius: design.radius.sm,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span>(</span>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span>a</span>
                            <div style={{ width: '20px', height: '2px', background: '#ec4899' }} />
                            <span>b</span>
                          </div>
                          <span>)<sup>m</sup></span>
                          <span>=</span>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span>a<sup>m</sup></span>
                            <div style={{ width: '30px', height: '2px', background: '#ec4899' }} />
                            <span>b<sup>m</sup></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Zero Exponent */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Zero Exponent Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Any nonzero base to power of 0 → <strong>equals 1</strong></div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: design.colors.text.primary,
                          padding: '12px 20px',
                          background: design.colors.surface.gray,
                          borderRadius: design.radius.sm
                        }}>
                          a<sup>0</sup> = 1
                        </div>
                      </div>
                    </div>
                    
                    {/* Negative Exponent */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Negative Exponent Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Negative exponent → <strong>reciprocal</strong> with positive exponent</div>
                        </div>
                        <div style={{ 
                          fontSize: '24px', 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: design.colors.semantic.error,
                          padding: '12px 20px',
                          background: '#fef2f2',
                          borderRadius: design.radius.sm,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <span>a<sup>−m</sup></span>
                          <span>=</span>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span>1</span>
                            <div style={{ width: '30px', height: '2px', background: design.colors.semantic.error }} />
                            <span>a<sup>m</sup></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fractional Exponent */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '4px' }}>Fractional Exponent Rule</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Fractional exponent → denominator is <strong>root</strong>, numerator is <strong>power</strong></div>
                        </div>
                        <div style={{ 
                          fontFamily: design.typography.fontFamilyMath, 
                          color: '#0891b2',
                          padding: '16px 24px',
                          background: '#ecfeff',
                          borderRadius: design.radius.sm,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '28px' }}>a</span>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '2px', marginTop: '-4px' }}>
                              <span style={{ fontSize: '13px', lineHeight: '1.1' }}>m</span>
                              <div style={{ width: '14px', height: '1.5px', background: '#0891b2' }}></div>
                              <span style={{ fontSize: '13px', lineHeight: '1.1' }}>n</span>
                            </div>
                          </div>
                          <span style={{ fontSize: '24px' }}>=</span>
                          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '14px', marginTop: '4px' }}>n</span>
                            <span style={{ fontSize: '28px' }}>√</span>
                            <span style={{ fontSize: '28px' }}>a</span>
                            <span style={{ fontSize: '14px', marginTop: '-2px' }}>m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );

            case 'comparingExpIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>QUESTION TYPE</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Comparing Exponential Expressions</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    These questions test your ability to make exponential equations equal by <strong>aligning bases and exponents correctly</strong>.
                  </div>
                </div>
              );
            
            case 'goldenRuleExponents':
              return (
                <div key={idx} style={{
                  background: '#0a0a0a',
                  borderRadius: '24px',
                  padding: '40px',
                  margin: '48px 0'
                }}>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#ea580c', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key Concept</span>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#fbbf24', marginTop: '8px' }}>The Golden Rule</div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.1) 100%)',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      borderLeft: '4px solid #fbbf24'
                    }}>
                      <div style={{ fontSize: '16px', color: '#fbbf24', marginBottom: '8px', fontWeight: '600' }}>Solving for something in the EXPONENT?</div>
                      <div style={{ fontSize: '18px', color: design.colors.surface.white }}>The <strong>bases</strong> MUST be the same</div>
                    </div>
                    
                    <div style={{ 
                      background: 'linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.1) 100%)',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      borderLeft: '4px solid #fbbf24'
                    }}>
                      <div style={{ fontSize: '16px', color: '#fbbf24', marginBottom: '8px', fontWeight: '600' }}>Solving for something in the BASE?</div>
                      <div style={{ fontSize: '18px', color: design.colors.surface.white }}>The <strong>exponents</strong> MUST be the same</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '24px',
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: design.radius.sm,
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '15px', color: '#9ca3af' }}>This maintains equality on both sides of the equal sign</span>
                  </div>
                </div>
              );
            
            case 'exponentialFunctionIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>DEFINITION</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>What is an Exponential Function?</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    An exponential function is a function where the <strong>variable is in the exponent</strong>.
                  </div>
                </div>
              );
            
            case 'exponentialFunctionFormula':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>GENERAL FORM</div>
                  
                  {/* Main Formula */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '36px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#7c3aed', fontWeight: '600' }}>f(x)</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: design.colors.accent.orange, fontWeight: '600' }}>a</span>
                      <span style={{ color: design.colors.text.secondary }}>·</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>b</span>
                      <sup style={{ fontSize: '22px', color: design.colors.semantic.success, fontWeight: '700' }}>x</sup>
                    </div>
                  </div>
                  
                  {/* Variable Explanations */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <div style={{ background: '#fff7ed', borderRadius: design.radius.md, padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '700', color: design.colors.accent.orange, fontFamily: design.typography.fontFamilyMath, marginBottom: '8px' }}>a</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '4px' }}>Initial Value</div>
                      <div style={{ fontSize: '13px', color: design.colors.text.secondary }}>Starting amount when x = 0</div>
                    </div>
                    <div style={{ background: '#eff6ff', borderRadius: design.radius.md, padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '700', color: design.colors.semantic.info, fontFamily: design.typography.fontFamilyMath, marginBottom: '8px' }}>b</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '4px' }}>Growth/Decay Factor</div>
                      <div style={{ fontSize: '13px', color: design.colors.text.secondary }}>The base (rate of change)</div>
                    </div>
                    <div style={{ background: '#f0fdf4', borderRadius: design.radius.md, padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '700', color: design.colors.semantic.success, fontFamily: design.typography.fontFamilyMath, marginBottom: '8px' }}>x</div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '4px' }}>Exponent</div>
                      <div style={{ fontSize: '13px', color: design.colors.text.secondary }}>Time or number of periods</div>
                    </div>
                  </div>
                </div>
              );

            case 'growthVsDecay':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* Growth */}
                    <div style={{
                      background: '#f0fdf4',
                      borderRadius: design.radius.md,
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.md }}>
                        <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success }}>Exponential Growth</span>
                      </div>
                      <div style={{ 
                        background: design.colors.surface.white, 
                        borderRadius: design.radius.sm, 
                        padding: '16px', 
                        marginBottom: '16px',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>
                          f(x) = a · b<sup>x</sup>, where <strong style={{ color: design.colors.semantic.success }}>b &gt; 1</strong>
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: design.colors.text.primary }}>
                        <div>• Values <strong>increase</strong> as x increases</div>
                        <div>• Multiplies by a factor <strong>greater than 1</strong></div>
                      </div>
                      <div style={{ 
                        marginTop: '16px', 
                        padding: '12px', 
                        background: '#dcfce7', 
                        borderRadius: design.radius.sm,
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '14px', color: '#166534', marginBottom: '4px' }}>Example:</div>
                        <div style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.success }}>f(x) = 200(1.08)<sup>x</sup></div>
                        <div style={{ fontSize: '13px', color: '#166534', marginTop: '4px' }}>→ grows by <strong>8%</strong> each step</div>
                      </div>
                    </div>
                    
                    {/* Decay */}
                    <div style={{
                      background: '#fef2f2',
                      borderRadius: design.radius.md,
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.md }}>
                        <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.semantic.error }}>Exponential Decay</span>
                      </div>
                      <div style={{ 
                        background: design.colors.surface.white, 
                        borderRadius: design.radius.sm, 
                        padding: '16px', 
                        marginBottom: '16px',
                        textAlign: 'center'
                      }}>
                        <span style={{ fontSize: '20px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>
                          f(x) = a · b<sup>x</sup>, where <strong style={{ color: design.colors.semantic.error }}>0 &lt; b &lt; 1</strong>
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: design.colors.text.primary }}>
                        <div>• Values <strong>decrease</strong> as x increases</div>
                        <div>• Multiplies by a factor <strong>less than 1</strong></div>
                      </div>
                      <div style={{ 
                        marginTop: '16px', 
                        padding: '12px', 
                        background: '#fee2e2', 
                        borderRadius: design.radius.sm,
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '14px', color: '#991b1b', marginBottom: '4px' }}>Example:</div>
                        <div style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.error }}>f(x) = 500(0.9)<sup>x</sup></div>
                        <div style={{ fontSize: '13px', color: '#991b1b', marginTop: '4px' }}>→ loses <strong>10%</strong> each step</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            // Quadratics Components - Premium Design
            case 'quadraticIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>DEFINITION</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>What is a Quadratic?</div>
                  <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.6 }}>
                    A <strong>Quadratic</strong> is any equation with a highest degree of <strong>2</strong> (x²)
                  </div>
                  <div style={{ 
                    marginTop: '20px',
                    padding: '16px 24px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm,
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px', opacity: 0.9 }}>The graph of a quadratic is called a </span>
                    <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold }}>Parabola</span>
                  </div>
                </div>
              );
            
            case 'quadraticStandardForm':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: '#fafafa',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '48px 0',
                  textAlign: 'center',
                  border: '1px solid #e5e7eb'
                }}>
                  {/* Orange accent bar at top */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: '#ea580c',
                    borderRadius: '0 0 4px 4px'
                  }} />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '24px', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Standard Form</div>
                  <div style={{
                    fontSize: '42px',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ color: '#0a0a0a' }}>y</span>
                    <span style={{ color: '#6b7280' }}>=</span>
                    <span style={{ color: '#ec4899', fontWeight: '600' }}>a</span>
                    <span style={{ color: '#0a0a0a' }}>x²</span>
                    <span style={{ color: '#6b7280' }}>+</span>
                    <span style={{ color: '#8b5cf6', fontWeight: '600' }}>b</span>
                    <span style={{ color: '#0a0a0a' }}>x</span>
                    <span style={{ color: '#6b7280' }}>+</span>
                    <span style={{ color: '#0891b2', fontWeight: '600' }}>c</span>
                  </div>
                </div>
              );
            
            case 'parabolaDirection':
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px',
                  margin: '48px 0',
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6'
                }}>
                  <div style={{ fontSize: '17px', color: '#1f2937', marginBottom: '24px', fontWeight: '500' }}>The <span style={{ color: '#ec4899', fontWeight: '700' }}>a</span> value determines the parabola's direction and width:</div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {/* Opens Up */}
                    <div style={{ background: '#f0fdf4', borderRadius: '16px', padding: '24px', border: '2px solid #16a34a' }}>
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Positive</div>
                        <div style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#16a34a', fontWeight: '600' }}>a &gt; 0</div>
                      </div>
                      <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100px', marginBottom: '12px' }}>
                        <line x1="20" y1="20" x2="180" y2="20" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="100" y1="10" x2="100" y2="110" stroke="#d1d5db" strokeWidth="1" />
                        <path d="M 30 20 C 30 85, 100 85, 100 85 C 100 85, 170 85, 170 20" fill="none" stroke="#16a34a" strokeWidth="3" />
                        <circle cx="100" cy="85" r="5" fill="#16a34a" />
                        <text x="100" y="105" fontSize="12" fill="#16a34a" fontWeight="600" textAnchor="middle">min</text>
                      </svg>
                      <div style={{ fontSize: '16px', color: '#166534' }}>Parabola opens <strong>UP</strong></div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginTop: '4px' }}>Graph has a <strong>Minimum</strong></div>
                    </div>
                    
                    {/* Opens Down */}
                    <div style={{ background: '#fef2f2', borderRadius: '16px', padding: '24px', border: '2px solid #dc2626' }}>
                      <div style={{ marginBottom: '16px' }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Negative</div>
                        <div style={{ fontSize: '24px', fontFamily: 'Georgia, serif', color: '#dc2626', fontWeight: '600' }}>a &lt; 0</div>
                      </div>
                      <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100px', marginBottom: '12px' }}>
                        <line x1="20" y1="100" x2="180" y2="100" stroke="#d1d5db" strokeWidth="1" />
                        <line x1="100" y1="10" x2="100" y2="110" stroke="#d1d5db" strokeWidth="1" />
                        <path d="M 30 100 C 30 35, 100 35, 100 35 C 100 35, 170 35, 170 100" fill="none" stroke="#dc2626" strokeWidth="3" />
                        <circle cx="100" cy="35" r="5" fill="#dc2626" />
                        <text x="100" y="22" fontSize="12" fill="#dc2626" fontWeight="600" textAnchor="middle">max</text>
                      </svg>
                      <div style={{ fontSize: '16px', color: '#991b1b' }}>Parabola opens <strong>DOWN</strong></div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginTop: '4px' }}>Graph has a <strong>Maximum</strong></div>
                    </div>
                  </div>
                  
                  {/* Width comparison */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}`, marginTop: '16px' }}>
                    <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary, marginBottom: '16px' }}>Width of Parabola</div>
                    <svg viewBox="0 0 300 100" style={{ width: '100%', height: '80px', marginBottom: '12px' }}>
                      <line x1="20" y1="90" x2="280" y2="90" stroke="#d1d5db" strokeWidth="1" />
                      <path d="M 60 85 Q 90 20 120 85" fill="none" stroke="#ec4899" strokeWidth="2.5" />
                      <path d="M 130 85 Q 180 20 230 85" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeDasharray="6,3" />
                      <text x="90" y="70" fontSize="11" fill="#ec4899" fontWeight="600">|a| = 3</text>
                      <text x="165" y="50" fontSize="11" fill="#8b5cf6" fontWeight="600">|a| = 0.5</text>
                    </svg>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '20px', height: '3px', background: '#ec4899', borderRadius: '2px' }}></div>
                        <span style={{ fontSize: '14px', color: design.colors.text.primary }}>Larger |a| → <strong>Narrower</strong></span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '20px', height: '3px', background: '#8b5cf6', borderRadius: '2px', backgroundImage: 'repeating-linear-gradient(90deg, #8b5cf6 0, #8b5cf6 6px, transparent 6px, transparent 9px)' }}></div>
                        <span style={{ fontSize: '14px', color: design.colors.text.primary }}>Smaller |a| → <strong>Wider</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rootsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>DEFINITION</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>What are Roots?</div>
                  <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.6 }}>
                    <strong>Roots</strong> are the values of x that make a quadratic equation equal to <strong>zero</strong>.
                  </div>
                </div>
              );
            
            case 'rootsSynonyms':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: '28px 32px',
                  margin: '24px 0'
                }}>
                  <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '16px', fontWeight: '600' }}>THESE ALL MEAN THE SAME THING</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {['Roots', 'Solutions', 'Zeros', 'X-Intercepts'].map((term, i) => (
                      <span key={i} style={{
                        padding: '10px 20px',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        borderRadius: design.radius.sm,
                        fontSize: '16px',
                        fontWeight: '600',
                        color: design.colors.surface.white
                      }}>{term}</span>
                    ))}
                  </div>
                  <div style={{ marginTop: '16px', fontSize: '15px', color: '#9ca3af' }}>
                    All refer to the x-values where the parabola touches or crosses the x-axis
                  </div>
                </div>
              );
            
            case 'rootsOnGraph':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary, marginBottom: '20px' }}>How Roots Look on a Graph</div>
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px' }}>
                      On the graph of <span style={{ fontFamily: design.typography.fontFamilyMath }}>y = ax² + bx + c</span>, the <strong>roots are the x-intercepts</strong>.
                    </div>
                    
                    {/* SVG Graph showing roots */}
                    <svg viewBox="0 0 300 180" style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '0 auto 20px' }}>
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="300" height="180" fill="url(#grid)"/>
                      
                      {/* Axes */}
                      <line x1="30" y1="120" x2="270" y2="120" stroke="#1d1d1f" strokeWidth="1.5" />
                      <line x1="150" y1="20" x2="150" y2="160" stroke="#1d1d1f" strokeWidth="1.5" />
                      <text x="275" y="125" fontSize="12" fill="#1d1d1f">x</text>
                      <text x="155" y="18" fontSize="12" fill="#1d1d1f">y</text>
                      
                      {/* Parabola - passes through (70,120) and (230,120) */}
                      <path d="M 70 120 C 70 40, 150 40, 150 40 C 150 40, 230 40, 230 120" fill="none" stroke="#f59e0b" strokeWidth="3" />
                      
                      {/* Root points - on the x-axis where parabola crosses */}
                      <circle cx="70" cy="120" r="8" fill="#f59e0b" />
                      <circle cx="230" cy="120" r="8" fill="#f59e0b" />
                      
                      {/* Labels */}
                      <text x="70" y="145" fontSize="12" fill="#d97706" fontWeight="600" textAnchor="middle">(x₁, 0)</text>
                      <text x="230" y="145" fontSize="12" fill="#d97706" fontWeight="600" textAnchor="middle">(x₂, 0)</text>
                      <text x="200" y="35" fontSize="11" fill="#92400e">y = ax² + bx + c</text>
                    </svg>
                    
                    <div style={{ 
                      padding: '16px 24px', 
                      background: '#fff7ed', 
                      borderRadius: design.radius.sm,
                      textAlign: 'center'
                    }}>
                      <span style={{ fontSize: '15px', color: '#92400e' }}>Each root corresponds to a point </span>
                      <span style={{ fontSize: '18px', fontFamily: design.typography.fontFamilyMath, fontWeight: '600', color: '#d97706' }}>(x, 0)</span>
                      <span style={{ fontSize: '15px', color: '#92400e' }}> on the graph</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'vertexIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>DEFINITION</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>What is the Vertex?</div>
                  <div style={{ fontSize: '18px', opacity: 0.95, lineHeight: 1.6, marginBottom: '24px' }}>
                    The <strong>Vertex</strong> is the <strong>maximum</strong> or <strong>minimum</strong> point of a quadratic.
                  </div>
                  
                  {/* Two separate diagrams side by side */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                    {/* Min vertex */}
                    <div style={{ textAlign: 'center' }}>
                      <svg viewBox="0 0 100 70" style={{ width: '100%', maxWidth: '120px', height: 'auto' }}>
                        <path d="M 10 15 C 10 60, 50 60, 50 60 C 50 60, 90 60, 90 15" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
                        <circle cx="50" cy="60" r="5" fill="#fbbf24" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#fbbf24', fontWeight: '600', marginTop: '8px' }}>Minimum</div>
                    </div>
                    
                    {/* Max vertex */}
                    <div style={{ textAlign: 'center' }}>
                      <svg viewBox="0 0 100 70" style={{ width: '100%', maxWidth: '120px', height: 'auto' }}>
                        <path d="M 10 55 C 10 10, 50 10, 50 10 C 50 10, 90 10, 90 55" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3" />
                        <circle cx="50" cy="10" r="5" fill="#fbbf24" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#fbbf24', fontWeight: '600', marginTop: '8px' }}>Maximum</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    padding: '14px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm,
                    textAlign: 'center'
                  }}>
                    On the graph, the vertex is where the parabola <strong>changes direction</strong>.
                  </div>
                </div>
              );
            
            case 'vertexFormula':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: '#fafafa',
                  borderRadius: '24px',
                  padding: '48px',
                  margin: '48px 0',
                  border: '1px solid #e5e7eb'
                }}>
                  {/* Orange accent bar at top */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: '#ea580c',
                    borderRadius: '0 0 4px 4px'
                  }} />
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '20px',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#dc2626',
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      background: '#fef2f2',
                      padding: '6px 12px',
                      borderRadius: '100px'
                    }}>
                      Must Memorize
                    </div>
                  )}
                  <div style={{
                    fontFamily: design.typography.fontFamily,
                    fontSize: '11px',
                    color: '#6b7280',
                    marginBottom: '24px',
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}>X-Coordinate of the Vertex</div>
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: design.spacing.xl,
                    boxShadow: design.shadows.sm,
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '36px',
                      fontFamily: design.typography.fontFamilyMath,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: design.spacing.sm
                    }}>
                      <span style={{ color: '#8b5cf6', fontWeight: design.typography.weights.semibold }}>x</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: design.colors.text.primary }}>−b</span>
                        <div style={{ width: '50px', height: '2px', background: design.colors.text.primary, margin: '6px 0' }}></div>
                        <span style={{ color: design.colors.text.primary }}>2a</span>
                      </div>
                    </div>
                  </div>
                </div>
              );

            case 'vertexWhereVsWhat':
              return (
                <div key={idx} style={{
                  background: '#fef3c7',
                  borderRadius: design.radius.lg,
                  padding: '28px 32px',
                  margin: '24px 0',
                  border: '2px solid #f59e0b'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: '#92400e' }}>SAT Trap: WHERE vs WHAT</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#7c3aed', fontFamily: design.typography.fontFamilyMath }}>WHERE</span>
                      <span style={{ color: design.colors.text.secondary }}>is the max/min?</span>
                      <span style={{ color: design.colors.text.primary }}>→ Answer with <strong>x-coordinate</strong></span>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#ec4899', fontFamily: design.typography.fontFamilyMath }}>WHAT</span>
                      <span style={{ color: design.colors.text.secondary }}>is the max/min?</span>
                      <span style={{ color: design.colors.text.primary }}>→ Answer with <strong>y-coordinate</strong></span>
                    </div>
                  </div>
                </div>
              );
            
            case 'vertexFormIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>ALTERNATE FORM</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Vertex Form</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    Vertex Form allows you to see the vertex <strong>immediately</strong> without any calculation.
                  </div>
                </div>
              );
            
            case 'vertexFormFormula':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VERTEX FORM</div>
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '32px', 
                      fontFamily: design.typography.fontFamilyMath,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ color: design.colors.text.primary }}>y</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: '#ec4899', fontWeight: '600' }}>a</span>
                      <span style={{ color: design.colors.text.primary }}>(x −</span>
                      <span style={{ color: '#8b5cf6', fontWeight: '600' }}>h</span>
                      <span style={{ color: design.colors.text.primary }}>)²</span>
                      <span style={{ color: design.colors.text.secondary }}>+</span>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>k</span>
                    </div>
                  </div>
                  
                  {/* Visual diagram showing vertex */}
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', marginBottom: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <svg viewBox="0 0 280 140" style={{ width: '100%', maxWidth: '350px', height: 'auto', display: 'block', margin: '0 auto' }}>
                      {/* Grid */}
                      <defs>
                        <pattern id="vertexGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="280" height="140" fill="url(#vertexGrid)"/>
                      
                      {/* Axes */}
                      <line x1="30" y1="110" x2="250" y2="110" stroke="#1d1d1f" strokeWidth="1.5" />
                      <line x1="60" y1="20" x2="60" y2="130" stroke="#1d1d1f" strokeWidth="1.5" />
                      
                      {/* Parabola - opens down, vertex at (150, 40) */}
                      <path d="M 70 110 C 70 40, 150 40, 150 40 C 150 40, 230 40, 230 110" fill="none" stroke="#0891b2" strokeWidth="3" />
                      
                      {/* Vertex point */}
                      <circle cx="150" cy="40" r="7" fill="#8b5cf6" />
                      
                      {/* Dashed lines to show h and k */}
                      <line x1="150" y1="40" x2="150" y2="110" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="5,3" />
                      <line x1="60" y1="40" x2="150" y2="40" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="5,3" />
                      
                      {/* Labels */}
                      <text x="150" y="125" fontSize="14" fill="#8b5cf6" fontWeight="600" textAnchor="middle">h</text>
                      <text x="45" y="45" fontSize="14" fill="#0891b2" fontWeight="600">k</text>
                      <text x="165" y="35" fontSize="13" fill="#1d1d1f" fontWeight="600">(h, k)</text>
                    </svg>
                  </div>
                  
                  <div style={{ 
                    background: '#ecfeff', 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px', color: '#0e7490' }}>The vertex is at </span>
                    <span style={{ fontSize: '22px', fontFamily: design.typography.fontFamilyMath, fontWeight: '600', color: '#0891b2' }}>(h, k)</span>
                  </div>
                </div>
              );

            case 'discriminantIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>POWERFUL TOOL</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>The Discriminant</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    The <strong>Discriminant</strong> tells you <strong>how many solutions</strong> a quadratic has — <em>without actually solving it</em>.
                  </div>
                </div>
              );
            
            case 'discriminantFormula':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  {/* Step 1: Quadratic Formula */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: design.colors.semantic.success, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>1</div>
                      <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary }}>Start with the Quadratic Formula</div>
                    </div>
                    <div style={{
                      background: design.colors.surface.white,
                      borderRadius: design.radius.md,
                      padding: '24px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      textAlign: 'center'
                    }}>
                      <div style={{ 
                        fontSize: '26px', 
                        fontFamily: design.typography.fontFamilyMath,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}>
                        <span>x</span>
                        <span style={{ color: design.colors.text.secondary }}>=</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span>−b ±</span>
                            <span>√(</span>
                            <span style={{ background: '#dcfce7', padding: '4px 10px', borderRadius: '6px', color: design.colors.semantic.success, fontWeight: '600' }}>b² − 4ac</span>
                            <span>)</span>
                          </div>
                          <div style={{ width: '180px', height: '2px', background: design.colors.text.primary, margin: '8px 0' }}></div>
                          <span>2a</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: The Discriminant */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: design.colors.semantic.success, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px' }}>2</div>
                      <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary }}>The part under the square root is the Discriminant</div>
                    </div>
                    <div style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: design.radius.md,
                      padding: '28px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '12px', fontWeight: '500' }}>THE DISCRIMINANT</div>
                      <div style={{ fontSize: '42px', fontFamily: design.typography.fontFamilyMath, color: design.colors.surface.white, fontWeight: '600' }}>
                        D = b² − 4ac
                      </div>
                    </div>
                  </div>
                </div>
              );

            case 'discriminantCases':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Three Possible Cases</div>
                  <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '24px' }}>The value of D determines how many times the parabola crosses the x-axis</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* D > 0 */}
                    <div style={{ background: '#f0fdf4', borderRadius: design.radius.md, padding: '24px', border: '2px solid #16a34a' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                          <div style={{ fontSize: '32px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.success, fontWeight: '700' }}>D &gt; 0</div>
                          <svg viewBox="0 0 80 50" style={{ width: '80px', height: '50px', marginTop: '8px' }}>
                            <line x1="5" y1="40" x2="75" y2="40" stroke="#d1d5db" strokeWidth="1" />
                            <path d="M 10 40 C 10 10, 40 10, 40 10 C 40 10, 70 10, 70 40" fill="none" stroke="#16a34a" strokeWidth="2.5" />
                            <circle cx="10" cy="40" r="4" fill="#16a34a" />
                            <circle cx="70" cy="40" r="4" fill="#16a34a" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#166534', marginBottom: '8px' }}>Two Real Solutions</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                            The parabola crosses the x-axis at <strong>two different points</strong>.
                          </div>
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#dcfce7', borderRadius: design.radius.sm, fontSize: '14px', color: '#166534' }}>
                            <strong>Example:</strong> x² − 5x + 6 = 0 → D = 25 − 24 = 1 → Two solutions: x = 2, x = 3
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* D = 0 */}
                    <div style={{ background: '#fffbeb', borderRadius: design.radius.md, padding: '24px', border: '2px solid #f59e0b' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                          <div style={{ fontSize: '32px', fontFamily: design.typography.fontFamilyMath, color: '#d97706', fontWeight: '700' }}>D = 0</div>
                          <svg viewBox="0 0 80 50" style={{ width: '80px', height: '50px', marginTop: '8px' }}>
                            <line x1="5" y1="40" x2="75" y2="40" stroke="#d1d5db" strokeWidth="1" />
                            <path d="M 10 10 C 10 40, 40 40, 40 40 C 40 40, 70 40, 70 10" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                            <circle cx="40" cy="40" r="5" fill="#f59e0b" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#92400e', marginBottom: '8px' }}>One Real Solution</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                            The parabola <strong>touches</strong> the x-axis at exactly <strong>one point</strong> (the vertex). Also called a "double root."
                          </div>
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#fef3c7', borderRadius: design.radius.sm, fontSize: '14px', color: '#92400e' }}>
                            <strong>Example:</strong> x² − 6x + 9 = 0 → D = 36 − 36 = 0 → One solution: x = 3
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* D < 0 */}
                    <div style={{ background: '#fef2f2', borderRadius: design.radius.md, padding: '24px', border: '2px solid #dc2626' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '100px' }}>
                          <div style={{ fontSize: '32px', fontFamily: design.typography.fontFamilyMath, color: design.colors.semantic.error, fontWeight: '700' }}>D &lt; 0</div>
                          <svg viewBox="0 0 80 50" style={{ width: '80px', height: '50px', marginTop: '8px' }}>
                            <line x1="5" y1="45" x2="75" y2="45" stroke="#d1d5db" strokeWidth="1" />
                            <path d="M 10 5 C 10 30, 40 30, 40 30 C 40 30, 70 30, 70 5" fill="none" stroke="#dc2626" strokeWidth="2.5" />
                          </svg>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#991b1b', marginBottom: '8px' }}>No Real Solutions</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                            The parabola <strong>never touches</strong> the x-axis. Solutions are complex/imaginary numbers.
                          </div>
                          <div style={{ marginTop: '12px', padding: '10px 14px', background: '#fee2e2', borderRadius: design.radius.sm, fontSize: '14px', color: '#991b1b' }}>
                            <strong>Example:</strong> x² + x + 1 = 0 → D = 1 − 4 = −3 → No real solutions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'discriminantWhenToUse':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.surface.white }}>When to Use the Discriminant</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: design.radius.md, padding: '20px', borderLeft: '4px solid #10b981' }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, marginBottom: '8px', fontWeight: '600' }}>SCENARIO 1</div>
                      <div style={{ fontSize: '16px', color: design.colors.surface.white, lineHeight: 1.5 }}>
                        You're <strong>told</strong> how many solutions the equation has and need to find a missing value.
                      </div>
                      <div style={{ marginTop: '12px', fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                        "If the equation has exactly one solution, what is the value of k?"
                      </div>
                    </div>
                    
                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: design.radius.md, padding: '20px', borderLeft: '4px solid #10b981' }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, marginBottom: '8px', fontWeight: '600' }}>SCENARIO 2</div>
                      <div style={{ fontSize: '16px', color: design.colors.surface.white, lineHeight: 1.5 }}>
                        You need to <strong>determine</strong> how many solutions an equation has.
                      </div>
                      <div style={{ marginTop: '12px', fontSize: '13px', color: '#9ca3af', fontStyle: 'italic' }}>
                        "How many x-intercepts does the graph of y = 2x² − 3x + 5 have?"
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: design.spacing.lg, padding: design.spacing.md, background: 'rgba(255,255,255,0.05)', borderRadius: design.radius.sm, textAlign: 'center' }}>
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.sm, color: design.colors.surface.white }}>Keywords to look for: <strong>"how many solutions"</strong>, <strong>"number of x-intercepts"</strong>, <strong>"exactly one solution"</strong></span>
                  </div>
                </div>
              );
            
            // Deriving Standard Form Components
            case 'derivingStandardFormIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>SKILL</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Deriving Standard Form from a Graph</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    Sometimes the SAT gives you a <strong>graph of a parabola</strong> and asks you to find the equation. You'll need to extract key information from the graph to build the equation.
                  </div>
                </div>
              );
            
            case 'derivingStandardFormMethods':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Three Methods to Derive the Equation</div>
                  <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '24px' }}>Choose the method based on what information you can identify from the graph</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Method 1: Vertex Form */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #8b5cf6' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#8b5cf6', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>1</div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: '#8b5cf6', marginBottom: '8px' }}>Vertex Form Method</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px', lineHeight: 1.6 }}>
                            Use when you can identify the <strong>vertex (h, k)</strong> and <strong>one other point</strong> on the parabola.
                          </div>
                          <div style={{ background: '#faf5ff', borderRadius: design.radius.sm, padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: design.colors.text.secondary, marginBottom: '8px' }}>STEPS:</div>
                            <div style={{ fontSize: '14px', color: design.colors.text.primary, lineHeight: 1.8 }}>
                              1. Start with vertex form: <strong style={{ fontFamily: design.typography.fontFamilyMath }}>y = a(x − h)² + k</strong><br/>
                              2. Plug in the vertex (h, k)<br/>
                              3. Use another point to solve for <strong>a</strong><br/>
                              4. Expand to get standard form if needed
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Method 2: Factored Form */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #f59e0b' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f59e0b', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>2</div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: '#d97706', marginBottom: '8px' }}>Factored Form Method</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px', lineHeight: 1.6 }}>
                            Use when you can identify the <strong>two x-intercepts (roots)</strong> and <strong>one other point</strong>.
                          </div>
                          <div style={{ background: '#fffbeb', borderRadius: design.radius.sm, padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: design.colors.text.secondary, marginBottom: '8px' }}>STEPS:</div>
                            <div style={{ fontSize: '14px', color: design.colors.text.primary, lineHeight: 1.8 }}>
                              1. Start with factored form: <strong style={{ fontFamily: design.typography.fontFamilyMath }}>y = a(x − r₁)(x − r₂)</strong><br/>
                              2. Plug in the roots r₁ and r₂<br/>
                              3. Use another point to solve for <strong>a</strong><br/>
                              4. Expand to get standard form
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Method 3: System of Equations */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #10b981' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: design.colors.semantic.success, color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '18px', flexShrink: 0 }}>3</div>
                        <div style={{ flex: 1, minWidth: '250px' }}>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: '#059669', marginBottom: '8px' }}>System of Equations Method</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px', lineHeight: 1.6 }}>
                            Use when you can identify <strong>three points</strong> on the parabola but not the vertex or roots directly.
                          </div>
                          <div style={{ background: '#ecfdf5', borderRadius: design.radius.sm, padding: '16px' }}>
                            <div style={{ fontSize: '13px', color: design.colors.text.secondary, marginBottom: '8px' }}>STEPS:</div>
                            <div style={{ fontSize: '14px', color: design.colors.text.primary, lineHeight: 1.8 }}>
                              1. Use standard form: <strong style={{ fontFamily: design.typography.fontFamilyMath }}>y = ax² + bx + c</strong><br/>
                              2. Plug in each of the 3 points to create 3 equations<br/>
                              3. Solve the system for <strong>a</strong>, <strong>b</strong>, and <strong>c</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'derivingStandardFormTips':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '28px' }}>⚡</span>
                    <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.surface.white }}>Pro Tips: DESMOS Shortcut</span>
                  </div>
                  
                  <div style={{ background: 'rgba(99, 102, 241, 0.2)', borderRadius: design.radius.md, padding: '24px', borderLeft: '4px solid #6366f1' }}>
                    <div style={{ fontSize: '16px', color: design.colors.surface.white, lineHeight: 1.7, marginBottom: '16px' }}>
                      On the SAT, you have access to <strong>DESMOS</strong>! You can often find the equation faster by:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#a5b4fc', fontSize: '18px' }}>①</span>
                        <span style={{ color: '#e0e7ff', fontSize: '15px' }}>Typing <strong style={{ color: design.colors.surface.white, fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>y = a(x − h)² + k</strong> and adjusting sliders</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#a5b4fc', fontSize: '18px' }}>②</span>
                        <span style={{ color: '#e0e7ff', fontSize: '15px' }}>Using <strong style={{ color: design.colors.surface.white }}>regression</strong> if you have multiple points</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ color: '#a5b4fc', fontSize: '18px' }}>③</span>
                        <span style={{ color: '#e0e7ff', fontSize: '15px' }}>Visually matching your equation to the given graph</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: design.radius.sm }}>
                    <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>🔍 WHAT TO LOOK FOR ON THE GRAPH:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {['Vertex point', 'X-intercepts (roots)', 'Y-intercept', 'Direction (up/down)', 'Other labeled points'].map((item, i) => (
                        <span key={i} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '13px', color: design.colors.surface.white }}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            
            // Radians & Degrees Components
            case 'radiansDegreesIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>ANGLE MEASUREMENT</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Radians & Degrees</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6, marginBottom: '20px' }}>
                    <strong>Degrees</strong> and <strong>Radians</strong> are two different ways to measure angles, just like Fahrenheit and Celsius both measure temperature.
                  </div>
                  <div style={{ 
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm,
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px' }}>For the SAT, you <strong>MUST</strong> know how to convert between both!</span>
                  </div>
                </div>
              );
            
            case 'conversionFormulas':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <div style={{
                    fontFamily: design.typography.fontFamily,
                    fontSize: design.typography.sizes.lg,
                    fontWeight: design.typography.weights.bold,
                    color: design.colors.text.primary,
                    marginBottom: design.spacing.lg,
                    textAlign: 'center'
                  }}>Conversion Formulas</div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: design.spacing.md }}>
                    {/* Degrees to Radians */}
                    <div style={{
                      background: design.colors.surface.white,
                      borderRadius: design.radius.md,
                      padding: design.spacing.lg,
                      border: `1px solid ${design.colors.surface.grayDark}`,
                      boxShadow: design.shadows.sm
                    }}>
                      <div style={{
                        fontFamily: design.typography.fontFamily,
                        fontSize: design.typography.sizes.base,
                        fontWeight: design.typography.weights.semibold,
                        color: design.colors.semantic.info,
                        marginBottom: design.spacing.md
                      }}>Degrees to Radians</div>
                      <div style={{
                        background: design.colors.semantic.infoLight,
                        borderRadius: design.radius.sm,
                        padding: design.spacing.lg,
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '22px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>
                          <span>radians = degrees × </span>
                          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle' }}>
                            <span style={{ color: design.colors.semantic.info, fontWeight: design.typography.weights.semibold }}>π</span>
                            <span style={{ width: '30px', height: '2px', background: design.colors.text.primary }}></span>
                            <span>180</span>
                          </span>
                        </div>
                      </div>
                      <div style={{
                        marginTop: design.spacing.md,
                        fontFamily: design.typography.fontFamily,
                        fontSize: design.typography.sizes.sm,
                        color: design.colors.text.secondary,
                        textAlign: 'center'
                      }}>
                        Multiply by <strong style={{ color: design.colors.semantic.info }}>π/180</strong> to convert to radians
                      </div>
                    </div>

                    {/* Radians to Degrees */}
                    <div style={{
                      background: design.colors.surface.white,
                      borderRadius: design.radius.md,
                      padding: design.spacing.lg,
                      border: `1px solid ${design.colors.surface.grayDark}`,
                      boxShadow: design.shadows.sm
                    }}>
                      <div style={{
                        fontFamily: design.typography.fontFamily,
                        fontSize: design.typography.sizes.base,
                        fontWeight: design.typography.weights.semibold,
                        color: design.colors.accent.orange,
                        marginBottom: design.spacing.md
                      }}>Radians to Degrees</div>
                      <div style={{
                        background: design.colors.accent.orangeLight,
                        borderRadius: design.radius.sm,
                        padding: design.spacing.lg,
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '22px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>
                          <span>degrees = radians × </span>
                          <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle' }}>
                            <span>180</span>
                            <span style={{ width: '30px', height: '2px', background: design.colors.text.primary }}></span>
                            <span style={{ color: design.colors.accent.orange, fontWeight: design.typography.weights.semibold }}>π</span>
                          </span>
                        </div>
                      </div>
                      <div style={{
                        marginTop: design.spacing.md,
                        fontFamily: design.typography.fontFamily,
                        fontSize: design.typography.sizes.sm,
                        color: design.colors.text.secondary,
                        textAlign: 'center'
                      }}>
                        Multiply by <strong style={{ color: design.colors.accent.orange }}>180/π</strong> to convert to degrees
                      </div>
                    </div>
                  </div>

                  {/* Memory trick */}
                  <div style={{
                    marginTop: design.spacing.lg,
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: `${design.spacing.md} ${design.spacing.lg}`,
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    <span style={{
                      fontFamily: design.typography.fontFamily,
                      fontSize: design.typography.sizes.sm,
                      color: design.colors.text.secondary
                    }}>
                      <strong style={{ color: design.colors.text.primary }}>Key relationship:</strong> π radians = 180°
                    </span>
                  </div>
                </div>
              );

            case 'commonAnglesTable':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Common Angle Conversions</div>
                  <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '20px' }}>Memorize these — they appear frequently on the SAT!</div>
                  
                  <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    {/* Header */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: design.colors.text.primary }}>
                      <div style={{ padding: '14px 20px', color: design.colors.surface.white, fontWeight: '600', fontSize: '15px' }}>Degrees</div>
                      <div style={{ padding: '14px 20px', color: design.colors.surface.white, fontWeight: '600', fontSize: '15px' }}>Radians</div>
                    </div>
                    {/* Rows */}
                    {[
                      { deg: '0°', rad: '0' },
                      { deg: '30°', rad: 'π/6' },
                      { deg: '45°', rad: 'π/4' },
                      { deg: '60°', rad: 'π/3' },
                      { deg: '90°', rad: 'π/2' },
                      { deg: '180°', rad: 'π' },
                      { deg: '270°', rad: '3π/2' },
                      { deg: '360°', rad: '2π' }
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: i % 2 === 0 ? '#fff' : '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
                        <div style={{ padding: '12px 20px', fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: '#0284c7', fontWeight: '500' }}>{row.deg}</div>
                        <div style={{ padding: '12px 20px', fontSize: '16px', fontFamily: design.typography.fontFamilyMath, color: '#d97706', fontWeight: '500' }}>{row.rad}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'desmosTip':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.surface.white }}>DESMOS Calculator Tip</span>
                  </div>
                  
                  <div style={{ background: 'rgba(14, 165, 233, 0.2)', borderRadius: design.radius.md, padding: '24px', borderLeft: '4px solid #0ea5e9' }}>
                    <div style={{ fontSize: '16px', color: design.colors.surface.white, lineHeight: 1.7 }}>
                      The <strong>DESMOS calculator</strong> can handle both <strong style={{ color: '#7dd3fc' }}>radians</strong> and <strong style={{ color: '#fcd34d' }}>degrees</strong> for angles, and you can convert between them using built-in functions!
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: design.radius.sm, padding: '16px' }}>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '8px' }}>To convert to radians:</div>
                      <div style={{ fontSize: '16px', color: '#7dd3fc', fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '6px' }}>sin(45deg)</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: design.radius.sm, padding: '16px' }}>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '8px' }}>Check your mode:</div>
                      <div style={{ fontSize: '14px', color: design.colors.surface.white }}>Look for "Radians" or "Degrees" in settings</div>
                    </div>
                  </div>
                </div>
              );
            
            // Equivalent Expressions Components
            case 'equivalentExpressionsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>QUESTION TYPE</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Equivalent Expressions</div>
                  <div style={{ fontSize: '17px', opacity: 0.95, lineHeight: 1.6 }}>
                    On the SAT, you are often asked to find the <strong>equivalent expression</strong> of a given expression.
                  </div>
                </div>
              );
            
            case 'equivalentExpressionsMethod':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span style={{ fontSize: '28px' }}>⚡</span>
                    <span style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary }}>The DESMOS Shortcut</span>
                  </div>
                  
                  <div style={{ background: '#faf5ff', borderRadius: design.radius.md, padding: '24px', border: '2px solid #a855f7', marginBottom: '20px' }}>
                    <div style={{ fontSize: '17px', color: design.colors.text.primary, lineHeight: 1.7, textAlign: 'center' }}>
                      If two expressions are <strong style={{ color: '#9333ea' }}>equivalent</strong>, their graphs will be the <strong style={{ color: '#9333ea' }}>exact same</strong>!
                    </div>
                  </div>
                  
                  <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary, marginBottom: '16px' }}>How to solve using DESMOS:</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: design.colors.surface.white, borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#a855f7', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>1</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>Graph the <strong>original expression</strong> in DESMOS</div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#a855f7', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>2</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>Graph each <strong>answer choice</strong> one at a time</div>
                    </div>
                    <div style={{ background: design.colors.surface.white, borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#a855f7', color: design.colors.surface.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>3</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>The correct answer will <strong>perfectly overlap</strong> with the original graph</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'equivalentExpressionsExample':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '12px', fontWeight: '600' }}>VISUAL EXAMPLE</div>
                  <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.surface.white, marginBottom: '20px' }}>What does "same graph" look like?</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                    {/* Equivalent */}
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', borderRadius: design.radius.md, padding: '20px', border: '2px solid #10b981' }}>
                      <div style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.sm, color: design.colors.semantic.success, fontWeight: design.typography.weights.semibold, marginBottom: design.spacing.sm, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wide }}>Equivalent</div>
                      <svg viewBox="0 0 120 80" style={{ width: '100%', height: '70px' }}>
                        <line x1="10" y1="60" x2="110" y2="60" stroke="#4b5563" strokeWidth="1" />
                        <line x1="60" y1="10" x2="60" y2="70" stroke="#4b5563" strokeWidth="1" />
                        {/* Two overlapping lines */}
                        <path d="M 20 50 L 100 20" stroke="#10b981" strokeWidth="3" />
                        <path d="M 20 50 L 100 20" stroke="#a855f7" strokeWidth="3" strokeDasharray="6,3" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '8px', textAlign: 'center' }}>Graphs perfectly overlap</div>
                    </div>
                    
                    {/* Not Equivalent */}
                    <div style={{ background: 'rgba(239, 68, 68, 0.15)', borderRadius: design.radius.md, padding: '20px', border: '2px solid #ef4444' }}>
                      <div style={{ fontSize: '14px', color: '#ef4444', fontWeight: '600', marginBottom: '12px' }}>✗ NOT EQUIVALENT</div>
                      <svg viewBox="0 0 120 80" style={{ width: '100%', height: '70px' }}>
                        <line x1="10" y1="60" x2="110" y2="60" stroke="#4b5563" strokeWidth="1" />
                        <line x1="60" y1="10" x2="60" y2="70" stroke="#4b5563" strokeWidth="1" />
                        {/* Two different lines */}
                        <path d="M 20 50 L 100 20" stroke="#a855f7" strokeWidth="3" />
                        <path d="M 20 30 L 100 40" stroke="#ef4444" strokeWidth="3" />
                      </svg>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '8px', textAlign: 'center' }}>Graphs are different</div>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(168, 85, 247, 0.15)', borderRadius: design.radius.sm, borderLeft: '4px solid #a855f7' }}>
                    <div style={{ fontSize: '15px', color: '#e9d5ff' }}>
                      <strong style={{ color: design.colors.surface.white }}>Tip:</strong> If two graphs overlap completely, you'll only see one line — that's how you know they're equivalent!
                    </div>
                  </div>
                </div>
              );
            
            case 'diagram':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: '32px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    fontSize: '20px',
                    fontWeight: '500',
                    color: design.colors.text.primary,
                    fontFamily: design.typography.fontFamilyMath,
                    fontStyle: 'italic'
                  }}>
                    <span style={{ 
                      padding: '12px 24px',
                      background: design.colors.accent.orange,
                      color: design.colors.surface.white,
                      borderRadius: design.radius.sm,
                      fontStyle: 'normal'
                    }}>x</span>
                    <span style={{ color: design.colors.text.tertiary }}>→</span>
                    <span style={{
                      padding: '12px 24px',
                      background: design.colors.text.primary,
                      color: design.colors.surface.white,
                      borderRadius: design.radius.sm,
                      fontStyle: 'normal',
                      fontSize: '14px'
                    }}>function rule</span>
                    <span style={{ color: design.colors.text.tertiary }}>→</span>
                    <span style={{
                      padding: '12px 24px',
                      background: '#3b82f6',
                      color: design.colors.surface.white,
                      borderRadius: design.radius.sm,
                      fontStyle: 'normal'
                    }}>f(x)</span>
                  </div>
                </div>
              );
            
            case 'parallelLinesDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: design.radius.lg,
                  padding: '32px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <svg viewBox="0 0 300 200" style={{ maxWidth: '350px', width: '100%' }}>
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="300" height="200" fill="url(#grid)"/>
                    
                    {/* Axes */}
                    <line x1="30" y1="170" x2="280" y2="170" stroke="#9ca3af" strokeWidth="1.5"/>
                    <line x1="30" y1="20" x2="30" y2="170" stroke="#9ca3af" strokeWidth="1.5"/>
                    
                    {/* Axis labels */}
                    <text x="275" y="185" fontSize="12" fill="#6b7280">x</text>
                    <text x="15" y="25" fontSize="12" fill="#6b7280">y</text>
                    
                    {/* Parallel line 1 - orange */}
                    <line x1="50" y1="150" x2="260" y2="50" stroke="#ea580c" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* Parallel line 2 - blue */}
                    <line x1="50" y1="100" x2="200" y2="30" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* Labels for lines */}
                    <text x="250" y="40" fontSize="14" fill="#ea580c" fontWeight="600">y = 2x + 1</text>
                    <text x="190" y="22" fontSize="14" fill="#3b82f6" fontWeight="600">y = 2x + 5</text>
                    
                    {/* Same slope indicator */}
                    <text x="150" y="190" fontSize="11" fill="#6b7280" textAnchor="middle">Same slope (m = 2), different y-intercepts</text>
                  </svg>
                </div>
              );
            
            case 'perpendicularLinesDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: design.radius.lg,
                  padding: '32px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <svg viewBox="0 0 300 220" style={{ maxWidth: '350px', width: '100%' }}>
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid2" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="300" height="200" fill="url(#grid2)"/>
                    
                    {/* Axes */}
                    <line x1="150" y1="10" x2="150" y2="190" stroke="#9ca3af" strokeWidth="1.5"/>
                    <line x1="20" y1="100" x2="280" y2="100" stroke="#9ca3af" strokeWidth="1.5"/>
                    
                    {/* Axis labels */}
                    <text x="275" y="115" fontSize="12" fill="#6b7280">x</text>
                    <text x="155" y="20" fontSize="12" fill="#6b7280">y</text>
                    
                    {/* Line 1 - orange (slope = 2) */}
                    <line x1="60" y1="170" x2="240" y2="30" stroke="#ea580c" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* Line 2 - blue (slope = -1/2) */}
                    <line x1="40" y1="50" x2="260" y2="160" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* 90° angle indicator */}
                    <rect x="150" y="85" width="15" height="15" fill="none" stroke="#10b981" strokeWidth="2"/>
                    
                    {/* Labels for lines */}
                    <text x="235" y="25" fontSize="13" fill="#ea580c" fontWeight="600">m = 2</text>
                    <text x="245" y="175" fontSize="13" fill="#3b82f6" fontWeight="600">m = -½</text>
                    
                    {/* Relationship indicator */}
                    <text x="150" y="210" fontSize="11" fill="#6b7280" textAnchor="middle">Slopes are negative reciprocals: 2 × (-½) = -1</text>
                  </svg>
                </div>
              );
            
            case 'slopeFromGraphDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: design.radius.lg,
                  padding: '40px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <svg viewBox="0 0 500 420" style={{ maxWidth: '550px', width: '100%' }}>
                    {/* Background */}
                    <rect x="0" y="0" width="500" height="420" fill="#fff"/>
                    
                    {/* Grid lines */}
                    {[-2,-1,0,1,2,3,4,5,6,7,8].map(i => (
                      <line key={`vgrid${i}`} x1={130 + i*35} y1="30" x2={130 + i*35} y2="330" stroke="#d1d5db" strokeWidth="1"/>
                    ))}
                    {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
                      <line key={`hgrid${i}`} x1="60" y1={190 - i*35} x2="420" y2={190 - i*35} stroke="#d1d5db" strokeWidth="1"/>
                    ))}
                    
                    {/* Axes - bold black */}
                    <line x1="60" y1="190" x2="420" y2="190" stroke="#000" strokeWidth="2"/>
                    <line x1="130" y1="30" x2="130" y2="330" stroke="#000" strokeWidth="2"/>
                    
                    {/* Axis arrows */}
                    <polygon points="420,190 408,184 408,196" fill="#000"/>
                    <polygon points="130,30 124,42 136,42" fill="#000"/>
                    
                    {/* Axis labels */}
                    <text x="430" y="195" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">x</text>
                    <text x="135" y="25" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">y</text>
                    
                    {/* X-axis numbers */}
                    {[-2,-1,1,2,3,4,5,6,7,8].map(i => (
                      <text key={`xnum${i}`} x={130 + i*35} y="208" fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">{i}</text>
                    ))}
                    
                    {/* Y-axis numbers */}
                    {[-4,-3,-2,-1,1,2,3,4].map(i => (
                      <text key={`ynum${i}`} x={i >= 0 ? "118" : "115"} y={190 - i*35 + 5} fontSize="13" fill="#000" textAnchor="end" fontFamily="system-ui">{i}</text>
                    ))}
                    
                    {/* 
                      Line with slope -3/5, passing through (0, 4) and (5, 1)
                      At x=0 (pixel 130): y=4 → pixel = 190 - 4*35 = 50
                      At x=5 (pixel 130+5*35=305): y=1 → pixel = 190 - 1*35 = 155
                      Extend line beyond both points
                    */}
                    <line x1="60" y1="8" x2="410" y2="218" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                    
                    {/* Point 1 at (0, 4) - x=130, y=50 */}
                    <circle cx="130" cy="50" r="10" fill="#fbbf24" stroke="#000" strokeWidth="2"/>
                    
                    {/* Point 2 at (5, 1) - x=305, y=155 */}
                    <circle cx="305" cy="155" r="10" fill="#fbbf24" stroke="#000" strokeWidth="2"/>
                    
                    {/* Run line (horizontal green) - from (0,4) at y=50 going right to x=305 */}
                    <line x1="140" y1="50" x2="295" y2="50" stroke="#22c55e" strokeWidth="5"/>
                    {/* Run arrow head */}
                    <polygon points="305,50 290,42 290,58" fill="#22c55e"/>
                    
                    {/* Rise line (vertical pink) - from y=50 going DOWN to y=155 */}
                    <line x1="305" y1="60" x2="305" y2="145" stroke="#ec4899" strokeWidth="5"/>
                    {/* Rise arrow head - pointing down */}
                    <polygon points="305,155 295,140 315,140" fill="#ec4899"/>
                    
                    {/* Run label */}
                    <text x="215" y="38" fontSize="24" fill="#22c55e" fontWeight="800" fontFamily="system-ui">5</text>
                    
                    {/* Rise label */}
                    <text x="320" y="110" fontSize="24" fill="#ec4899" fontWeight="800" fontFamily="system-ui">-3</text>
                    
                    {/* Formula section below graph */}
                    <rect x="100" y="350" width="300" height="60" rx="10" fill="#fff" stroke="#e5e7eb" strokeWidth="2"/>
                    
                    {/* Rise over Run fraction */}
                    <text x="150" y="372" fontSize="18" fill="#ec4899" fontWeight="700" fontFamily="system-ui">Rise</text>
                    <line x1="140" y1="378" x2="190" y2="378" stroke="#000" strokeWidth="2"/>
                    <text x="150" y="398" fontSize="18" fill="#22c55e" fontWeight="700" fontFamily="system-ui">Run</text>
                    
                    <text x="210" y="388" fontSize="24" fill="#000" fontWeight="700" fontFamily="system-ui">=</text>
                    
                    {/* -3/5 fraction */}
                    <text x="255" y="372" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">-3</text>
                    <line x1="250" y1="378" x2="285" y2="378" stroke="#000" strokeWidth="2"/>
                    <text x="262" y="400" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">5</text>
                    
                    <text x="310" y="388" fontSize="24" fill="#000" fontWeight="700" fontFamily="system-ui">=</text>
                    
                    <text x="355" y="390" fontSize="22" fill="#000" fontWeight="800" fontFamily="system-ui">-³⁄₅</text>
                  </svg>
                </div>
              );

            case 'yInterceptDiagram':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: design.radius.lg,
                  padding: '40px',
                  margin: '32px 0',
                  textAlign: 'center'
                }}>
                  <svg viewBox="0 0 500 420" style={{ maxWidth: '550px', width: '100%' }}>
                    {/* Background */}
                    <rect x="0" y="0" width="500" height="420" fill="#fff"/>

                    {/* Grid lines */}
                    {[-3,-2,-1,0,1,2,3,4,5,6].map(i => (
                      <line key={`vgrid${i}`} x1={220 + i*35} y1="30" x2={220 + i*35} y2="330" stroke="#d1d5db" strokeWidth="1"/>
                    ))}
                    {[-4,-3,-2,-1,0,1,2,3,4,5].map(i => (
                      <line key={`hgrid${i}`} x1="80" y1={190 - i*35} x2="440" y2={190 - i*35} stroke="#d1d5db" strokeWidth="1"/>
                    ))}

                    {/* Axes - bold black */}
                    <line x1="80" y1="190" x2="440" y2="190" stroke="#000" strokeWidth="2"/>
                    <line x1="220" y1="30" x2="220" y2="330" stroke="#000" strokeWidth="2"/>

                    {/* Axis arrows */}
                    <polygon points="440,190 428,184 428,196" fill="#000"/>
                    <polygon points="220,30 214,42 226,42" fill="#000"/>

                    {/* Axis labels */}
                    <text x="450" y="195" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">x</text>
                    <text x="225" y="25" fontSize="20" fill="#000" fontWeight="700" fontFamily="system-ui">y</text>

                    {/* X-axis numbers */}
                    {[-3,-2,-1,1,2,3,4,5,6].map(i => (
                      <text key={`xnum${i}`} x={220 + i*35} y="208" fontSize="13" fill="#000" textAnchor="middle" fontFamily="system-ui">{i}</text>
                    ))}

                    {/* Y-axis numbers */}
                    {[-4,-3,-2,-1,1,2,3,4,5].map(i => (
                      <text key={`ynum${i}`} x={i >= 0 ? "208" : "205"} y={190 - i*35 + 5} fontSize="13" fill="#000" textAnchor="end" fontFamily="system-ui">{i}</text>
                    ))}

                    {/*
                      Line with equation y = 2x + 3
                      At x=-3: y = -3, pixel = (220-3*35, 190-(-3)*35) = (115, 295)
                      At x=3: y = 9 (off screen, so use x=2.5: y=8), pixel = (307.5, 190-8*35=-90) use nearby point
                      Let's use x=-2 to x=1.5 for visible range
                      At x=-2: y = -1, pixel = (220-2*35, 190-(-1)*35) = (150, 225)
                      At x=1.5: y = 6, pixel = (220+1.5*35, 190-6*35) = (272.5, -20)
                    */}
                    <line x1="115" y1="295" x2="310" y2="-20" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>

                    {/* Y-intercept point at (0, 3) - x=220, y=190-3*35=85 */}
                    <circle cx="220" cy="85" r="12" fill="#f59e0b" stroke="#000" strokeWidth="3"/>

                    {/* Highlight the y-axis near intercept with a glow */}
                    <line x1="220" y1="30" x2="220" y2="140" stroke="#f59e0b" strokeWidth="6" opacity="0.3"/>

                    {/* Arrow pointing to y-intercept */}
                    <line x1="270" y1="60" x2="235" y2="78" stroke="#ea580c" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#ea580c" />
                      </marker>
                    </defs>

                    {/* Label for y-intercept */}
                    <text x="280" y="50" fontSize="18" fill="#ea580c" fontWeight="700" fontFamily="system-ui">Y-intercept</text>
                    <text x="280" y="72" fontSize="16" fill="#ea580c" fontWeight="600" fontFamily="system-ui">(0, 3)</text>

                    {/* Equation label */}
                    <rect x="310" y="250" width="110" height="45" rx="8" fill="#fff" stroke="#3b82f6" strokeWidth="2"/>
                    <text x="365" y="278" fontSize="20" fill="#3b82f6" fontWeight="700" fontFamily="system-ui" textAnchor="middle">y = 2x + 3</text>

                    {/* Info box at bottom */}
                    <rect x="80" y="355" width="360" height="50" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                    <text x="260" y="385" fontSize="16" fill="#92400e" fontWeight="600" fontFamily="system-ui" textAnchor="middle">The line crosses the y-axis at (0, 3)</text>
                  </svg>
                </div>
              );

            case 'list':
              return (
                <ul key={idx} style={{
                  margin: '40px 0',
                  padding: 0,
                  listStyle: 'none'
                }}>
                  {block.items.map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      marginBottom: '20px',
                      fontFamily: design.typography.fontFamily,
                      fontSize: '17px',
                      lineHeight: '1.7',
                      color: '#374151'
                    }}>
                      <span style={{
                        flexShrink: 0,
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                        border: '2px solid #ea580c',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px'
                      }}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#ea580c'
                        }} />
                      </span>
                      <span>{renderText(item)}</span>
                    </li>
                  ))}
                </ul>
              );

            case 'example':
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '32px',
                  margin: '40px 0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Orange accent bar on left */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(180deg, #ea580c 0%, #c2410c 100%)'
                  }} />
                  <div style={{ paddingLeft: '16px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '16px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#ea580c'
                      }} />
                      <span style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#ea580c',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        {block.title || 'Example'}
                      </span>
                    </div>
                    <div style={{
                      fontFamily: design.typography.fontFamily,
                      fontSize: '17px',
                      lineHeight: '1.75',
                      color: '#1f2937',
                      whiteSpace: 'pre-line'
                    }}>
                      {renderText(block.content)}
                    </div>
                  </div>
                </div>
              );

            case 'table':
              return (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px',
                  margin: '48px 0',
                  overflowX: 'auto',
                  boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6'
                }}>
                  <table style={{
                    borderCollapse: 'separate',
                    borderSpacing: '0',
                    margin: '0 auto',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    width: 'auto'
                  }}>
                    <thead>
                      <tr>
                        {block.headers.map((h, i) => (
                          <th key={i} style={{
                            padding: '16px 32px',
                            background: '#0a0a0a',
                            color: '#ffffff',
                            fontFamily: design.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: '14px',
                            borderBottom: '3px solid #ea580c'
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {block.row.map((cell, i) => (
                          <td key={i} style={{
                            padding: '16px 32px',
                            background: '#f9fafb',
                            color: '#0a0a0a',
                            fontFamily: design.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: '16px',
                            textAlign: 'center'
                          }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <div style={{
                    textAlign: 'center',
                    marginTop: design.spacing.lg,
                    fontFamily: design.typography.fontFamily,
                    fontSize: design.typography.sizes.sm,
                    color: design.colors.text.tertiary
                  }}>
                    X changes by <strong style={{ color: design.colors.text.primary }}>{block.xChange}</strong>,
                    Y changes by <strong style={{ color: design.colors.accent.orange }}>{block.yChange}</strong>
                  </div>
                </div>
              );
            
            case 'transformTable':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`,
                  overflowX: 'auto'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: design.colors.text.primary,
                    textAlign: 'center',
                    marginBottom: '16px'
                  }}>
                    Transformation Rules for Functions
                  </div>
                  <table style={{
                    borderCollapse: 'collapse',
                    width: '100%'
                  }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '12px 16px', background: design.colors.accent.orange, color: design.colors.surface.white, fontWeight: '600', fontSize: '14px', textAlign: 'left' }}>Function Notation</th>
                        <th style={{ padding: '12px 16px', background: design.colors.accent.orange, color: design.colors.surface.white, fontWeight: '600', fontSize: '14px', textAlign: 'left' }}>Type of Transformation</th>
                        <th style={{ padding: '12px 16px', background: design.colors.accent.orange, color: design.colors.surface.white, fontWeight: '600', fontSize: '14px', textAlign: 'left' }}>Change to Coordinate Point</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: design.colors.surface.white }}>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic', fontWeight: '600' }}>f(x) + d</td>
                        <td style={{ padding: '12px 16px' }}>Vertical translation <strong style={{ color: design.colors.semantic.success }}>up</strong> d units</td>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic' }}>(x, y) → (x, y + d)</td>
                      </tr>
                      <tr style={{ background: '#fafafa' }}>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic', fontWeight: '600' }}>f(x) − d</td>
                        <td style={{ padding: '12px 16px' }}>Vertical translation <strong style={{ color: design.colors.semantic.error }}>down</strong> d units</td>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic' }}>(x, y) → (x, y − d)</td>
                      </tr>
                      <tr style={{ background: design.colors.surface.white }}>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic', fontWeight: '600' }}>f(x + c)</td>
                        <td style={{ padding: '12px 16px' }}>Horizontal translation <strong style={{ color: design.colors.semantic.error }}>left</strong> c units</td>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic' }}>(x, y) → (x − c, y)</td>
                      </tr>
                      <tr style={{ background: '#fafafa' }}>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic', fontWeight: '600' }}>f(x − c)</td>
                        <td style={{ padding: '12px 16px' }}>Horizontal translation <strong style={{ color: design.colors.semantic.success }}>right</strong> c units</td>
                        <td style={{ padding: '12px 16px', fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic' }}>(x, y) → (x + c, y)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            
            case 'triangle4545':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <svg width="220" height="180" viewBox="0 0 220 180">
                    {/* Triangle */}
                    <polygon points="30,160 190,160 30,40" fill="#fef3c7" stroke="#ea580c" strokeWidth="2.5"/>
                    
                    {/* Right angle square */}
                    <rect x="30" y="140" width="20" height="20" fill="none" stroke="#1d1d1f" strokeWidth="2"/>
                    
                    {/* Side labels */}
                    {/* Left side - x */}
                    <text x="15" y="105" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#dc2626">x</text>
                    
                    {/* Bottom side - x */}
                    <text x="110" y="178" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#dc2626">x</text>
                    
                    {/* Hypotenuse - x√2 */}
                    <text x="130" y="90" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="#1d4ed8">x√2</text>
                    
                    {/* Angle labels */}
                    <text x="50" y="55" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">45°</text>
                    <text x="155" y="152" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">45°</text>
                  </svg>
                  <div style={{
                    background: design.colors.surface.white,
                    padding: '10px 20px',
                    borderRadius: design.radius.sm,
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#4b5563',
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    Ratio: <span style={{ color: design.colors.semantic.error, fontWeight: 600 }}>x</span> : <span style={{ color: design.colors.semantic.error, fontWeight: 600 }}>x</span> : <span style={{ color: '#1d4ed8', fontWeight: 600 }}>x√2</span>
                  </div>
                </div>
              );
            
            case 'triangle3060':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <svg width="260" height="180" viewBox="0 0 260 180">
                    {/* Triangle - taller than 45-45-90 */}
                    <polygon points="30,160 230,160 30,35" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
                    
                    {/* Right angle square */}
                    <rect x="30" y="140" width="20" height="20" fill="none" stroke="#1d1d1f" strokeWidth="2"/>
                    
                    {/* Side labels */}
                    {/* Left side - x (shortest) */}
                    <text x="15" y="100" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#dc2626">x</text>
                    
                    {/* Bottom side - x√3 */}
                    <text x="130" y="178" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="#16a34a">x√3</text>
                    
                    {/* Hypotenuse - 2x */}
                    <text x="155" y="85" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#1d4ed8">2x</text>
                    
                    {/* Angle labels */}
                    <text x="50" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">60°</text>
                    <text x="190" y="152" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="500" fill="#6b7280">30°</text>
                  </svg>
                  <div style={{
                    background: design.colors.surface.white,
                    padding: '10px 20px',
                    borderRadius: design.radius.sm,
                    fontSize: '15px',
                    fontWeight: '500',
                    color: '#4b5563',
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    Ratio: <span style={{ color: design.colors.semantic.error, fontWeight: 600 }}>x</span> : <span style={{ color: design.colors.semantic.success, fontWeight: 600 }}>x√3</span> : <span style={{ color: '#1d4ed8', fontWeight: 600 }}>2x</span>
                  </div>
                </div>
              );
            
            case 'pythagorean':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <svg width="280" height="200" viewBox="0 0 280 200">
                    {/* Triangle - better proportions */}
                    <polygon points="40,170 220,170 40,50" fill="#fef3c7" stroke="#ea580c" strokeWidth="3"/>
                    
                    {/* Right angle square - L-shaped */}
                    <path d="M 40,150 L 60,150 L 60,170" fill="none" stroke="#1d1d1f" strokeWidth="2.5"/>
                    
                    {/* Label a - vertical side (left) */}
                    <text x="22" y="115" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fontStyle="italic" fill="#dc2626">a</text>
                    
                    {/* Label b - horizontal side (bottom) */}
                    <text x="130" y="192" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fontStyle="italic" fill="#16a34a">b</text>
                    
                    {/* Label c - hypotenuse (diagonal) - rotated to follow the line */}
                    <text x="155" y="95" textAnchor="middle" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fontStyle="italic" fill="#2563eb" transform="rotate(-34, 155, 95)">c</text>
                  </svg>
                  <div style={{
                    background: design.colors.surface.white,
                    padding: '16px 32px',
                    borderRadius: design.radius.md,
                    fontSize: '24px',
                    fontWeight: '600',
                    fontFamily: design.typography.fontFamilyMath,
                    color: design.colors.text.primary,
                    border: `1px solid ${design.colors.surface.grayDark}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}>
                    <span style={{ color: design.colors.semantic.error }}>a²</span> + <span style={{ color: design.colors.semantic.success }}>b²</span> = <span style={{ color: design.colors.semantic.info }}>c²</span>
                  </div>
                </div>
              );
            
            case 'sohcahtoa':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center',
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <svg width="320" height="220" viewBox="0 0 320 220">
                    {/* Triangle - better proportions */}
                    <polygon points="50,180 270,180 50,50" fill="#ecfdf5" stroke="#1d1d1f" strokeWidth="3"/>
                    
                    {/* Right angle square - L-shaped */}
                    <path d="M 50,160 L 70,160 L 70,180" fill="none" stroke="#1d1d1f" strokeWidth="2.5"/>
                    
                    {/* Angle arc at bottom right */}
                    <path d="M 235,180 A 35,35 0 0,0 258,158" fill="none" stroke="#7c3aed" strokeWidth="3"/>
                    <text x="228" y="165" fontFamily="Georgia, serif" fontSize="20" fontWeight="600" fontStyle="italic" fill="#7c3aed">θ</text>
                    
                    {/* Opposite - left side */}
                    <text x="28" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="#dc2626">OPP</text>
                    
                    {/* Adjacent - bottom side */}
                    <text x="160" y="202" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="#16a34a">ADJ</text>
                    
                    {/* Hypotenuse - diagonal */}
                    <text x="185" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="700" fill="#2563eb" transform="rotate(-30, 185, 100)">HYP</text>
                  </svg>
                </div>
              );

            case 'triangleTypes':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '32px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Scalene */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        {/* Triangle with clearly different sides */}
                        <polygon points="15,95 125,95 85,20" fill="#fee2e2" stroke="#dc2626" strokeWidth="2.5"/>
                        {/* Side length labels - positioned outside */}
                        <text x="70" y="108" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#991b1b">5</text>
                        <text x="40" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#991b1b">4</text>
                        <text x="115" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#991b1b">6</text>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.semantic.error, marginTop: '4px' }}>Scalene</div>
                      <div style={{ fontSize: '12px', color: design.colors.text.secondary, marginTop: '2px' }}>All sides different</div>
                    </div>
                    
                    {/* Isosceles */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        {/* Symmetric triangle */}
                        <polygon points="25,95 115,95 70,20" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                        {/* Tick marks on equal sides */}
                        <line x1="44" y1="54" x2="50" y2="60" stroke="#1d4ed8" strokeWidth="2.5"/>
                        <line x1="90" y1="54" x2="96" y2="60" stroke="#1d4ed8" strokeWidth="2.5"/>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.semantic.info, marginTop: '4px' }}>Isosceles</div>
                      <div style={{ fontSize: '12px', color: design.colors.text.secondary, marginTop: '2px' }}>Two sides equal</div>
                    </div>
                    
                    {/* Equilateral */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        {/* Equilateral triangle */}
                        <polygon points="25,95 115,95 70,20" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5"/>
                        {/* Tick marks on all three sides */}
                        <line x1="44" y1="54" x2="50" y2="60" stroke="#15803d" strokeWidth="2.5"/>
                        <line x1="90" y1="54" x2="96" y2="60" stroke="#15803d" strokeWidth="2.5"/>
                        <line x1="67" y1="95" x2="73" y2="95" stroke="#15803d" strokeWidth="2.5"/>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.semantic.success, marginTop: '4px' }}>Equilateral</div>
                      <div style={{ fontSize: '12px', color: design.colors.text.secondary, marginTop: '2px' }}>All sides equal (60° each)</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'triangleAngles':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '32px',
                    flexWrap: 'wrap'
                  }}>
                    {/* Acute */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        <polygon points="20,95 120,95 70,20" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5"/>
                        {/* Angle labels at each corner */}
                        <text x="32" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#b45309">70°</text>
                        <text x="70" y="38" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#b45309">40°</text>
                        <text x="108" y="88" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#b45309">70°</text>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#d97706', marginTop: '4px' }}>Acute</div>
                      <div style={{ fontSize: '12px', color: design.colors.text.secondary, marginTop: '2px' }}>All angles &lt; 90°</div>
                    </div>
                    
                    {/* Right */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        <polygon points="25,95 115,95 25,20" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                        {/* Right angle square */}
                        <rect x="25" y="77" width="18" height="18" fill="none" stroke="#1d4ed8" strokeWidth="2"/>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.semantic.info, marginTop: '4px' }}>Right</div>
                      <div style={{ fontSize: '12px', color: design.colors.text.secondary, marginTop: '2px' }}>One angle = 90°</div>
                    </div>
                    
                    {/* Obtuse */}
                    <div style={{ textAlign: 'center' }}>
                      <svg width="140" height="110" viewBox="0 0 140 110">
                        <polygon points="10,95 130,95 105,25" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2.5"/>
                        {/* Obtuse angle label */}
                        <text x="45" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="600" fill="#6d28d9">120°</text>
                      </svg>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#7c3aed', marginTop: '4px' }}>Obtuse</div>
                      <div style={{ fontSize: '12px', color: design.colors.text.secondary, marginTop: '2px' }}>One angle &gt; 90°</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'circleParts':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="260" height="220" viewBox="0 0 260 220">
                    {/* Circle */}
                    <circle cx="130" cy="110" r="75" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="130" cy="110" r="5" fill="#1d4ed8"/>
                    {/* Radius line */}
                    <line x1="130" y1="110" x2="205" y2="110" stroke="#dc2626" strokeWidth="3"/>
                    {/* Diameter line (dashed, behind) */}
                    <line x1="55" y1="110" x2="205" y2="110" stroke="#16a34a" strokeWidth="2" strokeDasharray="8,4"/>
                    {/* Labels */}
                    <text x="130" y="98" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#1d4ed8">Center</text>
                    <text x="168" y="128" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic" fill="#dc2626">r</text>
                    <text x="130" y="145" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#16a34a">d = 2r</text>
                    {/* Circumference label with arrow */}
                    <text x="130" y="205" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="500" fill="#6b7280">Circumference (distance around)</text>
                  </svg>
                </div>
              );
            
            case 'circleArea':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <svg width="180" height="140" viewBox="0 0 180 140">
                    {/* Filled circle */}
                    <circle cx="90" cy="70" r="55" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="90" cy="70" r="4" fill="#1d4ed8"/>
                    {/* Radius line */}
                    <line x1="90" y1="70" x2="145" y2="70" stroke="#dc2626" strokeWidth="3"/>
                    {/* Radius label */}
                    <text x="118" y="62" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fontStyle="italic" fill="#dc2626">r</text>
                  </svg>
                  <div style={{
                    background: design.colors.surface.white,
                    padding: '16px 32px',
                    borderRadius: design.radius.sm,
                    fontSize: '26px',
                    fontWeight: '600',
                    color: design.colors.text.primary,
                    border: `1px solid ${design.colors.surface.grayDark}`,
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    A = π<span style={{ color: design.colors.semantic.error }}>r</span>²
                  </div>
                </div>
              );
            
            case 'arcLength':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center',
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <svg width="220" height="180" viewBox="0 0 220 180">
                    {/* Full circle (faded) */}
                    <circle cx="110" cy="95" r="65" fill="none" stroke="#e5e7eb" strokeWidth="2"/>
                    {/* Arc (highlighted) */}
                    <path d="M 110,30 A 65,65 0 0,1 175,95" fill="none" stroke="#2563eb" strokeWidth="5"/>
                    {/* Radii */}
                    <line x1="110" y1="95" x2="110" y2="30" stroke="#9ca3af" strokeWidth="2"/>
                    <line x1="110" y1="95" x2="175" y2="95" stroke="#9ca3af" strokeWidth="2"/>
                    {/* Center dot */}
                    <circle cx="110" cy="95" r="4" fill="#1d4ed8"/>
                    {/* Angle arc */}
                    <path d="M 110,70 A 25,25 0 0,1 135,95" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
                    {/* Labels */}
                    <text x="125" y="80" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic" fill="#7c3aed">θ</text>
                    <text x="155" y="52" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#2563eb">Arc</text>
                    <text x="110" y="175" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#6b7280">Central Angle determines Arc Length</text>
                  </svg>
                </div>
              );

            case 'sectorArea':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center',
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <svg width="220" height="180" viewBox="0 0 220 180">
                    {/* Full circle (faded) */}
                    <circle cx="110" cy="95" r="65" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="2"/>
                    {/* Sector (pie slice) - filled */}
                    <path d="M 110,95 L 110,30 A 65,65 0 0,1 175,95 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="110" cy="95" r="4" fill="#1d4ed8"/>
                    {/* Angle arc */}
                    <path d="M 110,70 A 25,25 0 0,1 135,95" fill="none" stroke="#7c3aed" strokeWidth="2.5"/>
                    {/* Labels */}
                    <text x="125" y="80" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" fontStyle="italic" fill="#7c3aed">θ</text>
                    <text x="140" y="58" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#2563eb">Sector</text>
                    <text x="110" y="175" textAnchor="middle" fontFamily="system-ui" fontSize="12" fill="#6b7280">"Pie Slice" — bounded by 2 radii and an arc</text>
                  </svg>
                </div>
              );

            case 'tangentLine':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="260" height="200" viewBox="0 0 260 200">
                    {/* Circle */}
                    <circle cx="105" cy="100" r="60" fill="#fce7f3" stroke="#db2777" strokeWidth="2.5"/>
                    {/* Center dot */}
                    <circle cx="105" cy="100" r="4" fill="#9d174d"/>
                    <text x="105" y="90" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="500" fill="#9d174d">center</text>
                    {/* Radius to tangent point */}
                    <line x1="105" y1="100" x2="165" y2="100" stroke="#dc2626" strokeWidth="2.5"/>
                    {/* Tangent line */}
                    <line x1="165" y1="35" x2="165" y2="165" stroke="#2563eb" strokeWidth="3"/>
                    {/* Point of tangency */}
                    <circle cx="165" cy="100" r="5" fill="#1d4ed8"/>
                    {/* Right angle marker */}
                    <rect x="152" y="100" width="13" height="13" fill="none" stroke="#1d1d1f" strokeWidth="2"/>
                    {/* Labels */}
                    <text x="133" y="92" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#dc2626">Radius</text>
                    <text x="195" y="140" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#2563eb">Tangent</text>
                    <text x="195" y="155" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#2563eb">Line</text>
                    <text x="180" y="108" fontFamily="system-ui" fontSize="12" fontWeight="600" fill="#1d1d1f">90°</text>
                    {/* Point of tangency label */}
                    <text x="165" y="188" textAnchor="middle" fontFamily="system-ui" fontSize="11" fill="#6b7280">Point of Tangency</text>
                  </svg>
                </div>
              );
            
            case 'circleEquation':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center',
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <div style={{
                    background: design.colors.surface.white,
                    padding: `${design.spacing.lg} ${design.spacing.xl}`,
                    borderRadius: design.radius.sm,
                    border: `1px solid ${design.colors.surface.grayDark}`,
                    fontSize: design.typography.sizes['2xl'],
                    fontFamily: design.typography.fontFamilyMath,
                    fontWeight: design.typography.weights.semibold,
                    color: design.colors.text.primary
                  }}>
                    (<span style={{ color: design.colors.semantic.info }}>x</span> − <span style={{ color: design.colors.semantic.error }}>h</span>)² + (<span style={{ color: design.colors.semantic.info }}>y</span> − <span style={{ color: design.colors.semantic.success }}>k</span>)² = <span style={{ color: '#7c3aed' }}>r</span>²
                  </div>
                </div>
              );

            case 'areaTriangle':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <svg width="240" height="150" viewBox="0 0 240 150">
                    {/* Triangle */}
                    <polygon points="20,130 220,130 120,30" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    
                    {/* Height line (dashed) */}
                    <line x1="120" y1="30" x2="120" y2="130" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,4"/>
                    
                    {/* Right angle marker */}
                    <rect x="120" y="110" width="12" height="12" fill="none" stroke="#dc2626" strokeWidth="1.5"/>
                    
                    {/* Height label */}
                    <text x="135" y="85" fontFamily="system-ui" fontSize="15" fontWeight="600" fill="#dc2626">h</text>
                    
                    {/* Base label */}
                    <text x="120" y="148" textAnchor="middle" fontFamily="system-ui" fontSize="15" fontWeight="600" fill="#2563eb">b</text>
                  </svg>
                  <div style={{
                    background: design.colors.surface.white,
                    padding: '14px 28px',
                    borderRadius: design.radius.sm,
                    fontSize: '20px',
                    fontWeight: '600',
                    color: design.colors.text.primary,
                    border: `1px solid ${design.colors.surface.grayDark}`
                  }}>
                    A = ½ × <span style={{ color: design.colors.semantic.info }}>b</span> × <span style={{ color: design.colors.semantic.error }}>h</span>
                  </div>
                </div>
              );
            
            case 'similarTriangles':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.md,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  <svg width="380" height="140" viewBox="0 0 380 140">
                    {/* Small triangle */}
                    <polygon points="50,120 110,120 80,60" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
                    {/* Labels outside the triangle */}
                    <text x="80" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#1d4ed8">3</text>
                    <text x="58" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#1d4ed8">3</text>
                    <text x="102" y="85" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#1d4ed8">3</text>
                    
                    {/* Arrow and multiplier */}
                    <text x="170" y="95" textAnchor="middle" fontFamily="system-ui" fontSize="24" fill="#9ca3af">→</text>
                    <text x="170" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="600" fill="#6b7280">× 2</text>
                    
                    {/* Large triangle (scaled by 2) */}
                    <polygon points="230,120 350,120 290,40" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5"/>
                    {/* Labels outside the triangle */}
                    <text x="290" y="135" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#15803d">6</text>
                    <text x="252" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#15803d">6</text>
                    <text x="328" y="75" textAnchor="middle" fontFamily="system-ui" fontSize="14" fontWeight="600" fill="#15803d">6</text>
                  </svg>
                  <div style={{
                    fontSize: '14px',
                    color: '#4b5563'
                  }}>
                    Same shape, different size — sides are <strong>proportional</strong>
                  </div>
                </div>
              );
            
            case 'rightTriangleParts':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <svg width="320" height="220" viewBox="0 0 320 220">
                    {/* Triangle - better proportions */}
                    <polygon points="50,180 250,180 50,60" fill="#fef3c7" stroke="#ea580c" strokeWidth="3"/>
                    
                    {/* Right angle square - positioned correctly */}
                    <path d="M 50,160 L 70,160 L 70,180" fill="none" stroke="#1d1d1f" strokeWidth="2.5"/>
                    
                    {/* Leg label - left side (vertical) */}
                    <text x="28" y="125" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#c2410c">Leg</text>
                    
                    {/* Leg label - bottom side (horizontal) */}
                    <text x="150" y="200" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#c2410c">Leg</text>
                    
                    {/* Hypotenuse label - diagonal, properly rotated */}
                    <text x="175" y="100" textAnchor="middle" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="#2563eb" transform="rotate(-31, 175, 100)">Hypotenuse</text>
                    <text x="190" y="120" textAnchor="middle" fontFamily="system-ui" fontSize="13" fill="#3b82f6" transform="rotate(-31, 190, 120)">(longest)</text>
                  </svg>
                </div>
              );
            
            // Statistics Components - Premium Design
            case 'meanIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>MEASURE OF CENTER</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>The Mean</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    The mean is a <strong>measure of center</strong> because it shows the value that represents the <strong>overall average</strong> of a data set.
                  </div>
                </div>
              );
            
            case 'meanFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>MEAN FORMULA</div>
                  
                  {/* Main Formula */}
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    marginBottom: '24px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>Mean</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ color: design.colors.accent.orange, fontWeight: '600', fontSize: '20px' }}>Sum of all values</span>
                        <div style={{ width: '100%', height: '3px', background: design.colors.text.primary, margin: '8px 0' }} />
                        <span style={{ color: design.colors.semantic.info, fontWeight: '600', fontSize: '20px' }}>Number of values</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Example */}
                  <div style={{ background: '#ecfdf5', borderRadius: design.radius.md, padding: '20px', border: '2px solid #10b981' }}>
                    <div style={{ fontSize: '14px', color: '#059669', fontWeight: '600', marginBottom: '12px' }}>Quick Example</div>
                    <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      Find the mean of: <strong>4, 8, 6, 10, 12</strong>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      flexWrap: 'wrap',
                      padding: '12px 16px',
                      background: design.colors.surface.white,
                      borderRadius: design.radius.sm
                    }}>
                      <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '18px' }}>Mean =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '16px', color: design.colors.accent.orange }}>4 + 8 + 6 + 10 + 12</span>
                        <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '4px 0' }} />
                        <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '16px', color: design.colors.semantic.info }}>5</span>
                      </div>
                      <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '18px' }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '16px' }}>40</span>
                        <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '4px 0' }} />
                        <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '16px' }}>5</span>
                      </div>
                      <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '18px' }}>=</span>
                      <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '24px', fontWeight: '700', color: design.colors.semantic.success }}>8</span>
                    </div>
                  </div>
                </div>
              );
            
            case 'outlierMeanIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, color: design.colors.surface.white }}>Outliers and The Mean</span>
                  </div>
                  
                  <div style={{ background: 'rgba(234, 88, 12, 0.2)', borderRadius: design.radius.md, padding: '20px', borderLeft: '4px solid #ea580c' }}>
                    <div style={{ fontSize: '17px', color: design.colors.surface.white, lineHeight: 1.7 }}>
                      When calculating the mean, <strong style={{ color: '#fb923c' }}>every single data value is included</strong>, which means <strong style={{ color: '#fb923c' }}>outliers are included</strong> as well.
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '20px', fontSize: '16px', color: '#9ca3af', lineHeight: 1.6 }}>
                    Because outliers are much <strong style={{ color: design.colors.surface.white }}>larger or smaller</strong> than the other values, they <strong style={{ color: design.colors.surface.white }}>pull the mean</strong> in their direction, changing where the center is.
                  </div>
                </div>
              );
            
            case 'outlierMeanExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.accent.orange, marginBottom: '24px', textAlign: 'center' }}>Example: How an Outlier Affects the Mean</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* Step 1: Original Data */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #e5e5e5' }}>
                      <div style={{ fontSize: '12px', color: design.colors.text.tertiary, fontWeight: '600', marginBottom: '12px', letterSpacing: '1px' }}>STEP 1: ORIGINAL DATA</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '20px',
                        flexWrap: 'wrap'
                      }}>
                        {[5, 6, 7, 8, 9].map((n, i) => (
                          <span key={i} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: design.radius.sm,
                            background: '#dbeafe',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: design.colors.semantic.info
                          }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '8px' }}>Mean:</div>
                        <div style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          padding: '8px 16px',
                          background: '#f0fdf4',
                          borderRadius: design.radius.sm
                        }}>
                          <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '16px' }}>(5+6+7+8+9) ÷ 5 =</span>
                          <span style={{ fontSize: '24px', fontWeight: '700', color: design.colors.semantic.success }}>7</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2: Add Outlier */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #ea580c' }}>
                      <div style={{ fontSize: '12px', color: design.colors.accent.orange, fontWeight: '600', marginBottom: '12px', letterSpacing: '1px' }}>STEP 2: ADD AN OUTLIER</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '20px',
                        flexWrap: 'wrap'
                      }}>
                        {[5, 6, 7, 8, 9].map((n, i) => (
                          <span key={i} style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: design.radius.sm,
                            background: '#dbeafe',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: design.colors.semantic.info
                          }}>{n}</span>
                        ))}
                        <span style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: design.radius.sm,
                          background: '#fef2f2',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          fontWeight: '700',
                          color: design.colors.semantic.error,
                          border: '2px solid #dc2626'
                        }}>50</span>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '8px' }}>New Mean:</div>
                        <div style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px',
                          padding: '8px 16px',
                          background: '#fef2f2',
                          borderRadius: design.radius.sm
                        }}>
                          <span style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '16px' }}>85 ÷ 6 ≈</span>
                          <span style={{ fontSize: '24px', fontWeight: '700', color: design.colors.semantic.error }}>14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Summary */}
                  <div style={{ 
                    marginTop: '24px', 
                    padding: '16px 20px', 
                    background: '#fef3c7', 
                    borderRadius: design.radius.sm,
                    textAlign: 'center'
                  }}>
                    <span style={{ fontSize: '16px', color: '#92400e' }}>
                      The outlier <strong>(50)</strong> doubled the mean from <strong>7</strong> to <strong>14</strong>!
                    </span>
                  </div>
                </div>
              );
            
            case 'medianIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>MEASURE OF CENTER</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>The Median</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    The median is the <strong>middle value</strong> of a data set when the numbers are arranged in order.
                  </div>
                </div>
              );
            
            case 'medianSteps':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>HOW TO FIND THE MEDIAN</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          flexShrink: 0
                        }}>1</div>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary }}>Arrange the values in order</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>From smallest to largest</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          flexShrink: 0
                        }}>2</div>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary }}>Find the middle value</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Odd vs Even */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '24px' }}>
                    <div style={{ background: '#f0fdf4', borderRadius: design.radius.md, padding: '20px', border: '2px solid #16a34a' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: design.colors.semantic.success, marginBottom: '12px' }}>ODD number of values</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px' }}>Median = the middle number</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '6px',
                        padding: '12px',
                        background: design.colors.surface.white,
                        borderRadius: design.radius.sm
                      }}>
                        {[3, 5].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                        <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: design.colors.surface.white }}>7</span>
                        {[8, 9].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600' }}>Median = 7</div>
                    </div>
                    
                    <div style={{ background: '#eff6ff', borderRadius: design.radius.md, padding: '20px', border: '2px solid #2563eb' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: design.colors.semantic.info, marginBottom: '12px' }}>EVEN number of values</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px' }}>Median = average of two middle numbers</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '6px',
                        padding: '12px',
                        background: design.colors.surface.white,
                        borderRadius: design.radius.sm
                      }}>
                        {[3, 5].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                        <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: design.colors.surface.white }}>7</span>
                        <span style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '700', color: design.colors.surface.white }}>8</span>
                        {[9, 12].map((n, i) => (
                          <span key={i} style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: design.colors.semantic.info, fontWeight: '600' }}>Median = (7+8)÷2 = 7.5</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'medianFrequencyIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.text.primary,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ fontSize: '14px', opacity: 0.6, marginBottom: '8px', fontWeight: '500', letterSpacing: '1px', color: design.colors.surface.white }}>SKILL</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: design.colors.surface.white, marginBottom: '16px' }}>Finding the Median From a Frequency Table</div>
                  <div style={{ 
                    fontSize: '17px', 
                    color: '#9ca3af',
                    lineHeight: 1.6
                  }}>
                    When data is presented in a frequency table, you can't just look at the table values — you need to find the <strong style={{ color: design.colors.surface.white }}>position</strong> of the median.
                  </div>
                </div>
              );
            
            case 'medianFrequencySteps':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Step 1 */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #7c3aed' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '18px',
                          flexShrink: 0
                        }}>1</div>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: '#7c3aed', marginBottom: '8px' }}>Add up all frequencies</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                            This gives you the <strong>total number of data values</strong>, call it <strong style={{ fontFamily: design.typography.fontFamilyMath, fontStyle: 'italic' }}>N</strong>.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #ea580c' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: design.colors.accent.orange, 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '18px',
                          flexShrink: 0
                        }}>2</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, marginBottom: '12px' }}>Find the median position</div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                            <div style={{ background: '#f0fdf4', borderRadius: design.radius.sm, padding: '16px' }}>
                              <div style={{ fontSize: '13px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>If N is odd:</div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary }}>
                                <span>Position =</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <span>N + 1</span>
                                  <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '2px 0' }} />
                                  <span>2</span>
                                </div>
                              </div>
                            </div>
                            <div style={{ background: '#eff6ff', borderRadius: design.radius.sm, padding: '16px' }}>
                              <div style={{ fontSize: '13px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>If N is even:</div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontFamily: design.typography.fontFamilyMath, color: design.colors.text.primary, flexWrap: 'wrap' }}>
                                <span>Positions</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <span>N</span>
                                  <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '2px 0' }} />
                                  <span>2</span>
                                </div>
                                <span>and</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <span>N</span>
                                  <div style={{ width: '100%', height: '2px', background: design.colors.text.primary, margin: '2px 0' }} />
                                  <span>2</span>
                                </div>
                                <span>+ 1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '24px', border: '2px solid #16a34a' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '50%', 
                          background: '#16a34a', 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '18px',
                          flexShrink: 0
                        }}>3</div>
                        <div>
                          <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, marginBottom: '8px' }}>Count through the table</div>
                          <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                            Use cumulative frequency to find which value falls at the median position.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'modeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>MEASURE OF CENTER</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>The Mode</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    The mode is the value that appears <strong>most often</strong> in a data set.
                  </div>
                </div>
              );
            
            case 'modeExamples':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Single Mode */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#f59e0b', marginBottom: '12px' }}>Example 1: Single Mode</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {[2].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                        {[3, 3].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#f59e0b', border: '2px solid #f59e0b' }}>{n}</span>
                        ))}
                        {[5, 7].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '15px', color: design.colors.text.primary }}>
                        <strong style={{ color: '#f59e0b' }}>Mode = 3</strong> (appears most frequently)
                      </div>
                    </div>
                    
                    {/* No Mode */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: design.colors.text.secondary, marginBottom: '12px' }}>Example 2: No Mode</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {[1, 2, 3, 4, 5].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: design.colors.text.secondary }}>{n}</span>
                        ))}
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '15px', color: design.colors.text.primary }}>
                        <strong style={{ color: design.colors.text.secondary }}>No Mode</strong> — all numbers appear exactly once
                      </div>
                    </div>
                    
                    {/* Two Modes (Bimodal) */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px', border: `1px solid ${design.colors.surface.grayDark}` }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#8b5cf6', marginBottom: '12px' }}>Example 3: Two Modes (Bimodal)</div>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        gap: '8px', 
                        marginBottom: '12px',
                        flexWrap: 'wrap'
                      }}>
                        {[4, 4].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: '#8b5cf6', border: '2px solid #8b5cf6' }}>{n}</span>
                        ))}
                        {[5, 5].map((n, i) => (
                          <span key={i} style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700', color: design.colors.semantic.info, border: '2px solid #2563eb' }}>{n}</span>
                        ))}
                        <span style={{ width: '36px', height: '36px', borderRadius: design.radius.sm, background: '#e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: design.colors.text.secondary }}>6</span>
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '15px', color: design.colors.text.primary }}>
                        <strong style={{ color: '#8b5cf6' }}>Modes = 4 and 5</strong> — both appear twice
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rangeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>MEASURE OF SPREAD</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>The Range</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    The range is a measure of <strong>how spread out</strong> the data is — the difference between the largest and smallest values.
                  </div>
                </div>
              );
            
            case 'rangeFormula':
              return (
                <div key={idx} style={{
                  position: 'relative',
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  textAlign: 'center',
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  {block.notGiven && (
                    <div style={{
                      position: 'absolute',
                      top: design.spacing.sm,
                      left: design.spacing.md,
                      fontSize: design.typography.sizes.xs,
                      fontWeight: design.typography.weights.bold,
                      color: design.colors.semantic.error,
                      fontFamily: design.typography.fontFamily,
                      fontStyle: 'normal',
                      textTransform: 'uppercase',
                      letterSpacing: design.typography.letterSpacing.wide
                    }}>
                      Not Given (Must Memorize)
                    </div>
                  )}
                  <div style={{
                    fontFamily: design.typography.fontFamily,
                    fontSize: design.typography.sizes.xs,
                    color: design.colors.text.tertiary,
                    marginBottom: design.spacing.lg,
                    fontWeight: design.typography.weights.semibold,
                    letterSpacing: design.typography.letterSpacing.wider,
                    textTransform: 'uppercase'
                  }}>Range Formula</div>

                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: design.spacing.xl,
                    boxShadow: design.shadows.sm,
                    display: 'inline-block'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: design.spacing.md,
                      fontSize: '28px',
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#ec4899', fontWeight: design.typography.weights.semibold }}>Range</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: design.colors.semantic.success, fontWeight: design.typography.weights.semibold }}>Maximum</span>
                      <span style={{ color: design.colors.text.secondary }}>−</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: design.typography.weights.semibold }}>Minimum</span>
                    </div>
                  </div>
                </div>
              );

            case 'stdDevIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>MEASURE OF SPREAD</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Standard Deviation</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    Standard deviation measures <strong>how spread out</strong> the data is from the mean.
                  </div>
                </div>
              );
            
            case 'stdDevVisual':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                    {/* Low Standard Deviation */}
                    <div style={{
                      background: design.colors.surface.white,
                      borderRadius: design.radius.md,
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, marginBottom: '4px' }}>Low Standard Deviation</div>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Values are close together</div>
                      </div>
                      
                      <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100px' }}>
                        {/* Axis */}
                        <line x1="20" y1="80" x2="180" y2="80" stroke="#d1d5db" strokeWidth="2"/>
                        
                        {/* Bell curve - narrow */}
                        <path 
                          d="M 60 80 Q 60 20, 100 20 Q 140 20, 140 80" 
                          fill="none" 
                          stroke="#16a34a" 
                          strokeWidth="3"
                        />
                        <path 
                          d="M 60 80 Q 60 20, 100 20 Q 140 20, 140 80 Z" 
                          fill="#dcfce7" 
                          opacity="0.5"
                        />
                        
                        {/* Mean line */}
                        <line x1="100" y1="20" x2="100" y2="85" stroke="#16a34a" strokeWidth="2" strokeDasharray="4"/>
                        <text x="100" y="95" textAnchor="middle" fontSize="10" fill="#16a34a">mean</text>
                      </svg>
                      
                      <div style={{ textAlign: 'center', marginTop: '12px', padding: '8px 12px', background: '#f0fdf4', borderRadius: '6px' }}>
                        <span style={{ fontSize: '14px', color: '#166534' }}>Tall, narrow curve → <strong>consistent</strong> data</span>
                      </div>
                    </div>
                    
                    {/* High Standard Deviation */}
                    <div style={{
                      background: design.colors.surface.white,
                      borderRadius: design.radius.md,
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.error, marginBottom: '4px' }}>High Standard Deviation</div>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Values are spread apart</div>
                      </div>
                      
                      <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100px' }}>
                        {/* Axis */}
                        <line x1="20" y1="80" x2="180" y2="80" stroke="#d1d5db" strokeWidth="2"/>
                        
                        {/* Bell curve - wide */}
                        <path 
                          d="M 25 80 Q 25 40, 100 40 Q 175 40, 175 80" 
                          fill="none" 
                          stroke="#dc2626" 
                          strokeWidth="3"
                        />
                        <path 
                          d="M 25 80 Q 25 40, 100 40 Q 175 40, 175 80 Z" 
                          fill="#fef2f2" 
                          opacity="0.5"
                        />
                        
                        {/* Mean line */}
                        <line x1="100" y1="40" x2="100" y2="85" stroke="#dc2626" strokeWidth="2" strokeDasharray="4"/>
                        <text x="100" y="95" textAnchor="middle" fontSize="10" fill="#dc2626">mean</text>
                      </svg>
                      
                      <div style={{ textAlign: 'center', marginTop: '12px', padding: '8px 12px', background: '#fef2f2', borderRadius: '6px' }}>
                        <span style={{ fontSize: '14px', color: '#991b1b' }}>Short, wide curve → <strong>variable</strong> data</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'marginOfErrorIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>SAMPLING & INFERENCE</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Margin of Error</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    The margin of error is a number that tells us <strong>how much</strong> a survey or poll result might differ from the <strong>true value</strong> in the entire population.
                  </div>
                </div>
              );
            
            case 'marginOfErrorVisual':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>UNDERSTANDING THE CONCEPTS</div>
                  
                  {/* Population vs Sample */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #2563eb'
                    }}>
                      <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.info, marginBottom: '12px' }}>Population</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                        The <strong>full group</strong> we want to know about.
                      </div>
                      <div style={{ 
                        marginTop: '12px',
                        padding: '12px',
                        background: '#eff6ff',
                        borderRadius: design.radius.sm,
                        fontSize: '14px',
                        color: '#1e40af'
                      }}>
                        Example: All students in a school
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.success, marginBottom: '12px' }}>Sample</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                        A <strong>smaller subset</strong> of the population that we actually survey.
                      </div>
                      <div style={{ 
                        marginTop: '12px',
                        padding: '12px',
                        background: '#f0fdf4',
                        borderRadius: design.radius.sm,
                        fontSize: '14px',
                        color: '#166534'
                      }}>
                        Example: 100 randomly selected students
                      </div>
                    </div>
                  </div>
                  
                  {/* Why we use samples */}
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    border: `1px solid ${design.colors.surface.grayDark}`,
                    marginBottom: '24px'
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                      <strong style={{ color: '#8b5cf6' }}>Why use a sample?</strong> Because it is usually <strong>impossible to ask everyone</strong> in the population. Instead, we take a smaller sample and use its results to estimate the true population value.
                    </div>
                  </div>
                  
                  {/* Sample Statistic */}
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '24px',
                    border: '2px solid #ea580c'
                  }}>
                    <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, marginBottom: '12px' }}>Sample Statistic</div>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                      The result we calculate from our sample data.
                    </div>
                    <div style={{ 
                      marginTop: '12px',
                      padding: '12px',
                      background: '#fff7ed',
                      borderRadius: design.radius.sm,
                      fontSize: '14px',
                      color: '#c2410c'
                    }}>
                      Example: 60% of the sampled students like pizza
                    </div>
                  </div>
                </div>
              );
            
            case 'marginOfErrorSampleSize':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>HOW MARGIN OF ERROR WORKS</div>
                  
                  {/* The Problem */}
                  <div style={{ 
                    background: design.colors.text.primary, 
                    borderRadius: design.radius.md, 
                    padding: '24px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '16px', color: design.colors.surface.white, lineHeight: 1.7 }}>
                      <strong style={{ color: '#f59e0b' }}>The Problem:</strong> We can't just claim that exactly <strong>60%</strong> of the entire school likes pizza based on our sample. Different samples might give slightly different results!
                    </div>
                  </div>
                  
                  {/* The Solution */}
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '24px',
                    border: '2px solid #8b5cf6',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#8b5cf6', marginBottom: '16px' }}>The Solution: Margin of Error</div>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.7, marginBottom: '16px' }}>
                      The margin of error gives a <strong>range</strong> around the sample statistic where the <strong>true population value</strong> is likely to fall.
                    </div>
                    
                    {/* Visual Example */}
                    <div style={{ 
                      background: '#faf5ff', 
                      borderRadius: design.radius.sm, 
                      padding: '20px'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '16px', textAlign: 'center' }}>
                        If the sample statistic is <strong style={{ color: '#8b5cf6' }}>60%</strong> and margin of error is <strong style={{ color: design.colors.accent.orange }}>±4%</strong>
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '16px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '32px', fontWeight: '700', color: '#8b5cf6' }}>56%</div>
                          <div style={{ fontSize: '12px', color: design.colors.text.secondary }}>lower bound</div>
                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>(60 − 4)</div>
                        </div>
                        
                        <div style={{ fontSize: '24px', color: '#d1d5db' }}>←</div>
                        
                        <div style={{ textAlign: 'center', padding: '0 16px' }}>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '4px' }}>true value falls</div>
                          <div style={{ fontSize: design.typography.sizes.md, fontWeight: design.typography.weights.semibold, color: design.colors.text.primary }}>somewhere here</div>
                        </div>
                        
                        <div style={{ fontSize: '24px', color: '#d1d5db' }}>→</div>
                        
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '32px', fontWeight: '700', color: '#8b5cf6' }}>64%</div>
                          <div style={{ fontSize: '12px', color: design.colors.text.secondary }}>upper bound</div>
                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>(60 + 4)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sample Size Relationship */}
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '24px',
                    border: `1px solid ${design.colors.surface.grayDark}`,
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: design.colors.text.primary, marginBottom: '16px' }}>Sample Size & Margin of Error</div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                      <div style={{ 
                        padding: '16px',
                        background: '#f0fdf4',
                        borderRadius: design.radius.sm,
                        borderLeft: '4px solid #16a34a'
                      }}>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.semantic.success, marginBottom: '8px' }}>Larger Sample</div>
                        <div style={{ fontSize: '14px', color: design.colors.text.primary }}>→ <strong>Smaller</strong> margin of error</div>
                        <div style={{ fontSize: '13px', color: design.colors.text.secondary, marginTop: '4px' }}>(more precise)</div>
                      </div>
                      
                      <div style={{ 
                        padding: '16px',
                        background: '#fef2f2',
                        borderRadius: design.radius.sm,
                        borderLeft: '4px solid #dc2626'
                      }}>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.semantic.error, marginBottom: '8px' }}>Smaller Sample</div>
                        <div style={{ fontSize: '14px', color: design.colors.text.primary }}>→ <strong>Larger</strong> margin of error</div>
                        <div style={{ fontSize: '13px', color: design.colors.text.secondary, marginTop: '4px' }}>(less precise)</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Takeaway */}
                  <div style={{ 
                    background: '#8b5cf6', 
                    borderRadius: design.radius.md, 
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.surface.white, lineHeight: 1.6 }}>
                      <strong>Key Takeaway:</strong> The margin of error connects the <strong>sample statistic</strong> to the <strong>true population value</strong> by showing a reasonable range where the true value is expected to be.
                    </div>
                  </div>
                </div>
              );
            
            // Volume Components - Premium Design
            case 'volumeIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>3D GEOMETRY</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>Volume</div>
                  <div style={{ 
                    fontSize: '18px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    Volume is the amount of <strong>space inside</strong> a 3-dimensional object. It tells us <strong>how much the shape can hold</strong>.
                  </div>
                </div>
              );
            
            case 'volumeUnits':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>MEASURING VOLUME</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '20px',
                      border: '2px solid #0891b2',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#0891b2', marginBottom: '8px' }}>2D: Area</div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Measured in <strong>square units</strong></div>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>ft², m², in²</div>
                    </div>
                    
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '20px',
                      border: '2px solid #ea580c',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: design.colors.accent.orange, marginBottom: '8px' }}>3D: Volume</div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>Measured in <strong>cubic units</strong></div>
                      <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '4px' }}>ft³, m³, in³</div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    borderLeft: '4px solid #0891b2'
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                      <strong style={{ color: '#0891b2' }}>Why cubic units?</strong> Because volume measures three dimensions: length × width × height. When you multiply three measurements together, you get a "cubed" unit.
                    </div>
                  </div>
                </div>
              );
            
            case 'rectangularPrismIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* 3D Box Illustration */}
                    <svg width="180" height="140" viewBox="0 0 180 140">
                      {/* Back face */}
                      <polygon points="50,20 150,20 150,90 50,90" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
                      {/* Top face */}
                      <polygon points="50,20 80,5 180,5 150,20" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
                      {/* Right face */}
                      <polygon points="150,20 180,5 180,75 150,90" fill="#93c5fd" stroke="#2563eb" strokeWidth="2"/>
                      {/* Labels */}
                      <text x="100" y="110" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb">length</text>
                      <text x="25" y="60" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb">height</text>
                      <text x="170" y="45" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2563eb" transform="rotate(90, 170, 45)">width</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Rectangular Prism</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        A 3D shape with 6 rectangular faces.<br/>
                        Also called a "box" or "cuboid".
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rectangularPrismFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>l</span>
                      <span style={{ color: design.colors.text.secondary }}>×</span>
                      <span style={{ color: design.colors.semantic.success, fontWeight: '600' }}>w</span>
                      <span style={{ color: design.colors.text.secondary }}>×</span>
                      <span style={{ color: design.colors.accent.orange, fontWeight: '600' }}>h</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>l</span> = length</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.semantic.success, fontWeight: '600' }}>w</span> = width</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.accent.orange, fontWeight: '600' }}>h</span> = height</div>
                    </div>
                  </div>
                </div>
              );
            
            case 'rectangularPrismExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px', lineHeight: 1.6 }}>
                    A storage container has length 8 ft, width 5 ft, and height 6 ft. What is the volume?
                  </div>
                  <div style={{ 
                    background: design.colors.surface.gray, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = <span style={{ color: design.colors.semantic.info }}>8</span> × <span style={{ color: design.colors.semantic.success }}>5</span> × <span style={{ color: design.colors.accent.orange }}>6</span>
                    </div>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = 40 × 6
                    </div>
                    <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#0891b2' }}>
                      V = 240 ft³
                    </div>
                  </div>
                </div>
              );
            
            case 'cubeIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* 3D Cube Illustration */}
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      {/* Back face */}
                      <polygon points="30,30 110,30 110,110 30,110" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Top face */}
                      <polygon points="30,30 55,10 135,10 110,30" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Right face */}
                      <polygon points="110,30 135,10 135,90 110,110" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2"/>
                      {/* Labels */}
                      <text x="70" y="128" textAnchor="middle" fontSize="14" fontWeight="600" fill="#d97706">s</text>
                      <text x="15" y="75" textAnchor="middle" fontSize="14" fontWeight="600" fill="#d97706">s</text>
                      <text x="130" y="55" textAnchor="middle" fontSize="14" fontWeight="600" fill="#d97706">s</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Cube</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        A special rectangular prism where<br/>
                        <strong>all sides are equal</strong>.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'cubeFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: '#f59e0b', fontWeight: '600' }}>s³</span>
                    </div>
                    
                    <div style={{ marginTop: '20px', fontSize: '14px', color: design.colors.text.secondary }}>
                      where <span style={{ color: '#f59e0b', fontWeight: '600' }}>s</span> = side length
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#fffbeb', 
                      borderRadius: design.radius.sm,
                      fontSize: '14px',
                      color: '#92400e'
                    }}>
                      This is the same as <strong>s × s × s</strong>
                    </div>
                  </div>
                </div>
              );
            
            case 'cubeExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px', lineHeight: 1.6 }}>
                    A cube has a side length of 7 cm. What is its volume?
                  </div>
                  <div style={{ 
                    background: design.colors.surface.gray, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = s³
                    </div>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = 7³ = 7 × 7 × 7
                    </div>
                    <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#0891b2' }}>
                      V = 343 cm³
                    </div>
                  </div>
                </div>
              );
            
            case 'cylinderIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Cylinder Illustration */}
                    <svg width="120" height="160" viewBox="0 0 120 160">
                      {/* Body */}
                      <ellipse cx="60" cy="130" rx="45" ry="15" fill="#d1fae5" stroke="#10b981" strokeWidth="2"/>
                      <rect x="15" y="30" width="90" height="100" fill="#d1fae5" stroke="none"/>
                      <line x1="15" y1="30" x2="15" y2="130" stroke="#10b981" strokeWidth="2"/>
                      <line x1="105" y1="30" x2="105" y2="130" stroke="#10b981" strokeWidth="2"/>
                      {/* Top ellipse */}
                      <ellipse cx="60" cy="30" rx="45" ry="15" fill="#a7f3d0" stroke="#10b981" strokeWidth="2"/>
                      {/* Radius line */}
                      <line x1="60" y1="30" x2="105" y2="30" stroke="#dc2626" strokeWidth="2" strokeDasharray="4"/>
                      <text x="82" y="24" fontSize="14" fontWeight="600" fill="#dc2626">r</text>
                      {/* Height line */}
                      <line x1="115" y1="30" x2="115" y2="130" stroke="#2563eb" strokeWidth="2"/>
                      <text x="123" y="85" fontSize="14" fontWeight="600" fill="#2563eb">h</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Cylinder</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        A 3D shape with two parallel<br/>
                        circular bases connected by<br/>
                        a curved surface.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'cylinderFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: design.colors.text.secondary }}>π</span>
                      <span style={{ color: design.colors.semantic.error, fontWeight: '600' }}>r²</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>h</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.semantic.error, fontWeight: '600' }}>r</span> = radius</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>h</span> = height</div>
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#ecfdf5', 
                      borderRadius: design.radius.sm,
                      fontSize: '14px',
                      color: '#065f46'
                    }}>
                      Think of it as: <strong>Area of base (πr²)</strong> × <strong>height</strong>
                    </div>
                  </div>
                </div>
              );
            
            case 'cylinderExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px', lineHeight: 1.6 }}>
                    A cylindrical water tank has radius 4 m and height 10 m. Find its volume.
                  </div>
                  <div style={{ 
                    background: design.colors.surface.gray, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = πr²h
                    </div>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = π(<span style={{ color: design.colors.semantic.error }}>4</span>)²(<span style={{ color: design.colors.semantic.info }}>10</span>)
                    </div>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = π(16)(10)
                    </div>
                    <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#0891b2' }}>
                      V = 160π m³ ≈ 502.65 m³
                    </div>
                  </div>
                </div>
              );
            
            case 'sphereIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Sphere Illustration */}
                    <svg width="140" height="140" viewBox="0 0 140 140">
                      {/* Sphere */}
                      <circle cx="70" cy="70" r="55" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
                      {/* Equator ellipse */}
                      <ellipse cx="70" cy="70" rx="55" ry="18" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>
                      {/* Vertical arc */}
                      <path d="M 70 15 Q 95 70 70 125" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>
                      {/* Radius line */}
                      <line x1="70" y1="70" x2="125" y2="70" stroke="#dc2626" strokeWidth="2"/>
                      <circle cx="70" cy="70" r="3" fill="#dc2626"/>
                      <text x="100" y="62" fontSize="14" fontWeight="600" fill="#dc2626">r</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Sphere</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        A perfectly round 3D shape.<br/>
                        Every point on the surface is the<br/>
                        same distance from the center.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'sphereFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '20px' }}>4</span>
                        <div style={{ width: '20px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '20px' }}>3</span>
                      </div>
                      <span style={{ color: design.colors.text.secondary }}>π</span>
                      <span style={{ color: design.colors.semantic.error, fontWeight: '600' }}>r³</span>
                    </div>
                    
                    <div style={{ marginTop: '20px', fontSize: '14px', color: design.colors.text.secondary }}>
                      where <span style={{ color: design.colors.semantic.error, fontWeight: '600' }}>r</span> = radius
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#eef2ff', 
                      borderRadius: design.radius.sm,
                      fontSize: '14px',
                      color: '#3730a3'
                    }}>
                      <strong>Tip:</strong> This formula is given on the SAT reference sheet!
                    </div>
                  </div>
                </div>
              );
            
            case 'sphereExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px', lineHeight: 1.6 }}>
                    A basketball has a radius of 12 cm. What is its volume?
                  </div>
                  <div style={{ 
                    background: design.colors.surface.gray, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>4</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>πr³</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>4</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(<span style={{ color: design.colors.semantic.error }}>12</span>)³</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>4</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(1728)</span>
                    </div>
                    <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#0891b2' }}>
                      V = 2304π cm³ ≈ 7238.23 cm³
                    </div>
                  </div>
                </div>
              );
            
            case 'coneIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Cone Illustration */}
                    <svg width="140" height="160" viewBox="0 0 140 160">
                      {/* Cone body */}
                      <polygon points="70,20 15,130 125,130" fill="#fce7f3" stroke="#ec4899" strokeWidth="2"/>
                      {/* Base ellipse */}
                      <ellipse cx="70" cy="130" rx="55" ry="18" fill="#fbcfe8" stroke="#ec4899" strokeWidth="2"/>
                      {/* Height line */}
                      <line x1="70" y1="20" x2="70" y2="130" stroke="#2563eb" strokeWidth="2" strokeDasharray="4"/>
                      <text x="78" y="80" fontSize="14" fontWeight="600" fill="#2563eb">h</text>
                      {/* Radius line */}
                      <line x1="70" y1="130" x2="125" y2="130" stroke="#dc2626" strokeWidth="2"/>
                      <text x="100" y="145" fontSize="14" fontWeight="600" fill="#dc2626">r</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Cone</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        A 3D shape with a circular base<br/>
                        that tapers to a point (apex).
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'coneFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '20px' }}>1</span>
                        <div style={{ width: '20px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '20px' }}>3</span>
                      </div>
                      <span style={{ color: design.colors.text.secondary }}>π</span>
                      <span style={{ color: design.colors.semantic.error, fontWeight: '600' }}>r²</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>h</span>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.semantic.error, fontWeight: '600' }}>r</span> = radius</div>
                      <div style={{ fontSize: '14px' }}><span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>h</span> = height</div>
                    </div>
                    
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px 16px', 
                      background: '#fdf2f8', 
                      borderRadius: design.radius.sm,
                      fontSize: '14px',
                      color: '#9d174d'
                    }}>
                      A cone's volume is <strong>⅓</strong> of a cylinder with the same base and height
                    </div>
                  </div>
                </div>
              );
            
            case 'coneExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px', lineHeight: 1.6 }}>
                    An ice cream cone has radius 3 cm and height 12 cm. What is its volume?
                  </div>
                  <div style={{ 
                    background: design.colors.surface.gray, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>πr²h</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(<span style={{ color: design.colors.semantic.error }}>3</span>)²(<span style={{ color: design.colors.semantic.info }}>12</span>)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>V =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                      <span>π(9)(12) =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>108π</span>
                        <div style={{ width: '35px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>3</span>
                      </div>
                    </div>
                    <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#0891b2' }}>
                      V = 36π cm³ ≈ 113.10 cm³
                    </div>
                  </div>
                </div>
              );
            
            case 'triangularPrismIntro':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {/* Triangular Prism Illustration */}
                    <svg width="180" height="140" viewBox="0 0 180 140">
                      {/* Front triangle */}
                      <polygon points="20,120 80,120 50,40" fill="#fed7aa" stroke="#ea580c" strokeWidth="2"/>
                      {/* Top face */}
                      <polygon points="50,40 80,120 160,100 130,20" fill="#fdba74" stroke="#ea580c" strokeWidth="2"/>
                      {/* Right face */}
                      <polygon points="80,120 160,100 160,100 80,120" fill="#fb923c" stroke="#ea580c" strokeWidth="2"/>
                      {/* Back edge */}
                      <line x1="130" y1="20" x2="160" y2="100" stroke="#ea580c" strokeWidth="2"/>
                      <line x1="20" y1="120" x2="100" y2="100" stroke="#ea580c" strokeWidth="2" strokeDasharray="4"/>
                      <line x1="100" y1="100" x2="160" y2="100" stroke="#ea580c" strokeWidth="2"/>
                      <line x1="100" y1="100" x2="130" y2="20" stroke="#ea580c" strokeWidth="2" strokeDasharray="4"/>
                      {/* Labels */}
                      <text x="50" y="135" fontSize="12" fontWeight="600" fill="#c2410c">base</text>
                      <text x="140" y="65" fontSize="12" fontWeight="600" fill="#c2410c">length</text>
                    </svg>
                    
                    <div>
                      <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: design.colors.text.primary, marginBottom: '8px' }}>Triangular Prism</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        A 3D shape with two parallel<br/>
                        triangular bases connected by<br/>
                        three rectangular faces.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'triangularPrismFormula':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>VOLUME FORMULA</div>
                  
                  <div style={{
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      fontSize: '28px', 
                      fontFamily: design.typography.fontFamilyMath
                    }}>
                      <span style={{ color: '#0891b2', fontWeight: '600' }}>V</span>
                      <span style={{ color: design.colors.text.secondary }}>=</span>
                      <span style={{ color: design.colors.accent.orange, fontWeight: '600' }}>Base Area</span>
                      <span style={{ color: design.colors.text.secondary }}>×</span>
                      <span style={{ color: design.colors.semantic.info, fontWeight: '600' }}>length</span>
                    </div>
                    
                    <div style={{ 
                      marginTop: '20px', 
                      padding: '16px', 
                      background: '#fff7ed', 
                      borderRadius: design.radius.sm
                    }}>
                      <div style={{ fontSize: '14px', color: '#9a3412', marginBottom: '8px' }}>Where Base Area (triangle) =</div>
                      <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        fontSize: '20px', 
                        fontFamily: design.typography.fontFamilyMath
                      }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ fontSize: '16px' }}>1</span>
                          <div style={{ width: '16px', height: '2px', background: design.colors.text.primary }} />
                          <span style={{ fontSize: '16px' }}>2</span>
                        </div>
                        <span style={{ color: design.colors.text.secondary }}>×</span>
                        <span style={{ color: design.colors.accent.orange }}>base</span>
                        <span style={{ color: design.colors.text.secondary }}>×</span>
                        <span style={{ color: design.colors.accent.orange }}>height</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'triangularPrismExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  <div style={{ fontSize: '16px', color: design.colors.text.primary, marginBottom: '20px', lineHeight: 1.6 }}>
                    A tent has a triangular cross-section with base 8 ft and height 6 ft. The tent is 12 ft long. What is the volume?
                  </div>
                  <div style={{ 
                    background: design.colors.surface.gray, 
                    borderRadius: design.radius.md, 
                    padding: '20px',
                    fontFamily: design.typography.fontFamilyMath
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.secondary, marginBottom: '12px' }}>Step 1: Find the area of the triangular base</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      <span>Base Area =</span>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '14px' }}>1</span>
                        <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                        <span style={{ fontSize: '14px' }}>2</span>
                      </div>
                      <span>× 8 × 6 = 24 ft²</span>
                    </div>
                    <div style={{ fontSize: '15px', color: design.colors.text.secondary, marginBottom: '12px', marginTop: '16px' }}>Step 2: Multiply by length</div>
                    <div style={{ fontSize: '18px', color: design.colors.text.primary, marginBottom: '8px' }}>
                      V = 24 × 12
                    </div>
                    <div style={{ fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#0891b2' }}>
                      V = 288 ft³
                    </div>
                  </div>
                </div>
              );
            
            // System of Equations Components
            case 'systemsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>ALGEBRA</div>
                  <div style={{ fontSize: design.typography.sizes['2xl'], fontWeight: design.typography.weights.bold, marginBottom: '16px' }}>System of Equations</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    Two or more equations with the same variables that we solve together to find values that satisfy <strong>all</strong> equations simultaneously.
                  </div>
                </div>
              );
            
            case 'systemsWhyWeNeedThem':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHY DO WE NEED SYSTEMS?</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* The Problem */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '16px' }}>THE PROBLEM</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px', lineHeight: 1.6 }}>
                        A single equation with two unknowns has <strong>infinite solutions</strong>:
                      </div>
                      <div style={{ 
                        background: '#fef2f2',
                        borderRadius: design.radius.sm,
                        padding: '16px',
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '17px',
                        textAlign: 'center',
                        marginBottom: '12px'
                      }}>
                        x + y = 10
                      </div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        Could be (1,9), (2,8), (5,5), (0,10)... We can't pin down unique values for x and y.
                      </div>
                    </div>
                    
                    {/* The Solution */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '16px' }}>THE SOLUTION</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px', lineHeight: 1.6 }}>
                        Add a <strong>second equation</strong> to narrow down to one answer:
                      </div>
                      <div style={{ 
                        background: '#f0fdf4',
                        borderRadius: design.radius.sm,
                        padding: '16px',
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '17px',
                        textAlign: 'center',
                        lineHeight: 2,
                        marginBottom: '12px'
                      }}>
                        <div>x + y = 10</div>
                        <div>x − y = 4</div>
                      </div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        Now there's only ONE point that works: <strong>(7, 3)</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '20px',
                    padding: '16px 20px',
                    background: design.colors.surface.white,
                    borderRadius: design.radius.md,
                    borderLeft: '4px solid #7c3aed'
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                      <strong style={{ color: '#7c3aed' }}>Key Insight:</strong> To solve for <em>n</em> unknown variables, you generally need <em>n</em> independent equations. Two unknowns? Two equations. Three unknowns? Three equations.
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsWhatIsIt':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {/* What it looks like */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #7c3aed'
                    }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '16px' }}>A SYSTEM LOOKS LIKE</div>
                      <div style={{ 
                        background: '#f5f3ff',
                        borderRadius: design.radius.sm,
                        padding: '16px',
                        fontFamily: design.typography.fontFamilyMath, 
                        fontSize: '20px', 
                        lineHeight: 2,
                        color: design.colors.text.primary,
                        textAlign: 'center'
                      }}>
                        <div>2x + 3y = 12</div>
                        <div>x − y = 1</div>
                      </div>
                    </div>
                    
                    {/* The solution */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '16px' }}>THE SOLUTION</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px' }}>
                        The values of x and y that make <strong>both</strong> equations true.
                      </div>
                      <div style={{ 
                        background: '#f0fdf4',
                        borderRadius: design.radius.sm,
                        padding: '16px',
                        textAlign: 'center'
                      }}>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '20px', color: '#166534', fontWeight: '600' }}>
                          (x, y) = (3, 2)
                        </div>
                        <div style={{ fontSize: '13px', color: design.colors.text.secondary, marginTop: '8px' }}>
                          This is where the lines intersect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsSolutionMeaning':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHAT DOES THE SOLUTION REPRESENT?</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ 
                      background: '#eff6ff',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>ALGEBRAICALLY</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                        Values that satisfy <strong>all</strong> equations when substituted
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#f0fdf4',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>GRAPHICALLY</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                        The point(s) where the lines <strong>intersect</strong>
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#f5f3ff',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '8px' }}>IN CONTEXT</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                        The answer to a real-world problem with <strong>multiple unknowns</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: design.colors.surface.gray,
                    borderRadius: design.radius.md,
                    padding: '20px'
                  }}>
                    <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginBottom: '12px' }}>Verify a solution by substituting into BOTH equations:</div>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '12px',
                      fontFamily: design.typography.fontFamilyMath,
                      fontSize: '16px'
                    }}>
                      <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '12px' }}>
                        <div style={{ color: design.colors.text.secondary, fontSize: '13px', fontFamily: 'system-ui', marginBottom: '4px' }}>Equation 1:</div>
                        <div>2(<span style={{ color: '#7c3aed' }}>3</span>) + 3(<span style={{ color: '#7c3aed' }}>2</span>) = 6 + 6 = <span style={{ color: design.colors.semantic.success, fontWeight: '600' }}>12</span></div>
                      </div>
                      <div style={{ background: design.colors.surface.white, borderRadius: design.radius.sm, padding: '12px' }}>
                        <div style={{ color: design.colors.text.secondary, fontSize: '13px', fontFamily: 'system-ui', marginBottom: '4px' }}>Equation 2:</div>
                        <div><span style={{ color: '#7c3aed' }}>3</span> − <span style={{ color: '#7c3aed' }}>2</span> = <span style={{ color: design.colors.semantic.success, fontWeight: '600' }}>1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsSolutionTypes':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THREE TYPES OF SOLUTIONS</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    {/* One Solution */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: design.colors.semantic.success, marginBottom: '16px', textAlign: 'center' }}>One Solution</div>
                      <div style={{ 
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        background: '#f0fdf4',
                        borderRadius: design.radius.sm
                      }}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <line x1="10" y1="90" x2="90" y2="10" stroke="#2563eb" strokeWidth="2"/>
                          <line x1="10" y1="30" x2="90" y2="70" stroke="#dc2626" strokeWidth="2"/>
                          <circle cx="50" cy="50" r="6" fill="#16a34a"/>
                        </svg>
                      </div>
                      <div style={{ fontSize: '14px', color: design.colors.text.primary, textAlign: 'center', fontWeight: '500' }}>
                        Lines intersect once
                      </div>
                      <div style={{ fontSize: '13px', color: design.colors.text.secondary, textAlign: 'center', marginTop: '4px' }}>
                        Different slopes
                      </div>
                    </div>
                    
                    {/* No Solution */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: design.colors.semantic.error, marginBottom: '16px', textAlign: 'center' }}>No Solution</div>
                      <div style={{ 
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        background: '#fef2f2',
                        borderRadius: design.radius.sm
                      }}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <line x1="10" y1="70" x2="90" y2="30" stroke="#2563eb" strokeWidth="2"/>
                          <line x1="10" y1="90" x2="90" y2="50" stroke="#dc2626" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div style={{ fontSize: '14px', color: design.colors.text.primary, textAlign: 'center', fontWeight: '500' }}>
                        Lines are parallel
                      </div>
                      <div style={{ fontSize: '13px', color: design.colors.text.secondary, textAlign: 'center', marginTop: '4px' }}>
                        Same slope, different intercepts
                      </div>
                    </div>
                    
                    {/* Infinite Solutions */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #7c3aed'
                    }}>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: '#7c3aed', marginBottom: '16px', textAlign: 'center' }}>Infinite Solutions</div>
                      <div style={{ 
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        background: '#f5f3ff',
                        borderRadius: design.radius.sm
                      }}>
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <line x1="10" y1="80" x2="90" y2="20" stroke="#7c3aed" strokeWidth="4"/>
                        </svg>
                      </div>
                      <div style={{ fontSize: '14px', color: design.colors.text.primary, textAlign: 'center', fontWeight: '500' }}>
                        Lines are identical
                      </div>
                      <div style={{ fontSize: '13px', color: design.colors.text.secondary, textAlign: 'center', marginTop: '4px' }}>
                        Same line (one is a multiple)
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsGraphicalMeaning':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>HOW TO IDENTIFY WHEN SOLVING</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      background: '#f0fdf4', 
                      borderRadius: design.radius.md, 
                      padding: '16px 20px'
                    }}>
                      <div style={{ fontWeight: '600', color: design.colors.semantic.success, fontSize: '15px' }}>One solution</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                        You get a value → <span style={{ fontFamily: design.typography.fontFamilyMath, background: design.colors.surface.white, padding: '2px 8px', borderRadius: '4px' }}>x = 3</span>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      background: '#fef2f2', 
                      borderRadius: design.radius.md, 
                      padding: '16px 20px'
                    }}>
                      <div style={{ fontWeight: '600', color: design.colors.semantic.error, fontSize: '15px' }}>No solution</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                        You get a false statement → <span style={{ fontFamily: design.typography.fontFamilyMath, background: design.colors.surface.white, padding: '2px 8px', borderRadius: '4px' }}>0 = 5</span>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      gap: '16px',
                      alignItems: 'center',
                      background: '#f5f3ff', 
                      borderRadius: design.radius.md, 
                      padding: '16px 20px'
                    }}>
                      <div style={{ fontWeight: '600', color: '#7c3aed', fontSize: '15px' }}>Infinite solutions</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary }}>
                        You get a true statement → <span style={{ fontFamily: design.typography.fontFamilyMath, background: design.colors.surface.white, padding: '2px 8px', borderRadius: '4px' }}>0 = 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsSetupStrategy':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>SETTING UP A SYSTEM FROM A WORD PROBLEM</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: 1, title: 'Identify the unknowns', desc: 'What quantities are you trying to find? These become your variables (x, y, etc.)' },
                      { num: 2, title: 'Find two relationships', desc: 'Look for two different facts connecting the unknowns — these become your two equations' },
                      { num: 3, title: 'Translate to math', desc: 'Convert each relationship into an equation using the key words below' },
                      { num: 4, title: 'Check your setup', desc: 'Make sure you have the same number of equations as unknowns' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: design.colors.surface.white, 
                        borderRadius: design.radius.md, 
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px'
                      }}>
                        <div style={{ 
                          width: '32px', 
                          height: '32px', 
                          borderRadius: '50%', 
                          background: '#7c3aed', 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '14px',
                          flexShrink: 0
                        }}>{step.num}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary }}>{step.title}</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginTop: '4px' }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'systemsFromContext':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>KEY WORD TRANSLATIONS</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    {/* Addition words */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '12px' }}>ADDITION (+)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['total', 'combined', 'sum', 'together', 'more than'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: design.colors.text.primary, paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Multiplication words */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '12px' }}>MULTIPLICATION (×)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['times', 'per', 'each', 'rate', 'of'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: design.colors.text.primary, paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Subtraction words */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '12px' }}>SUBTRACTION (−)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['less than', 'fewer', 'difference', 'decreased by'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: design.colors.text.primary, paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Equals words */}
                    <div style={{ background: design.colors.surface.white, borderRadius: design.radius.md, padding: '20px' }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '12px' }}>EQUALS (=)</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {['is', 'was', 'are', 'equals', 'gives'].map((word, i) => (
                          <div key={i} style={{ fontSize: '15px', color: design.colors.text.primary, paddingLeft: '8px' }}>• {word}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'systemsContextExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: design.colors.surface.gray,
                    borderRadius: design.radius.md,
                    padding: '20px',
                    marginBottom: '20px',
                    fontSize: '15px',
                    color: design.colors.text.primary,
                    lineHeight: 1.7
                  }}>
                    A theater sells adult tickets for $12 and child tickets for $8. One night, they sold 200 tickets and collected $2,100. How many of each type were sold?
                  </div>
                  
                  {/* Solution */}
                  <div style={{ 
                    background: '#f0fdf4', 
                    borderRadius: design.radius.md, 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>STEP 1: Define variables</div>
                        <div style={{ fontSize: '15px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <div>a = adult tickets</div>
                          <div>c = child tickets</div>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>STEP 2: Write equations</div>
                        <div style={{ 
                          fontFamily: design.typography.fontFamilyMath,
                          fontSize: '18px',
                          color: design.colors.text.primary,
                          paddingLeft: '12px',
                          lineHeight: 2
                        }}>
                          <div>
                            <span style={{ color: '#7c3aed' }}>a + c = 200</span>
                            <span style={{ fontSize: '13px', color: design.colors.text.secondary, fontFamily: 'system-ui', marginLeft: '12px' }}>(total tickets)</span>
                          </div>
                          <div>
                            <span style={{ color: '#7c3aed' }}>12a + 8c = 2100</span>
                            <span style={{ fontSize: '13px', color: design.colors.text.secondary, fontFamily: 'system-ui', marginLeft: '12px' }}>(total revenue)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'substitutionIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>METHOD 1</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Substitution</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    Solve one equation for a variable, then <strong>substitute</strong> that expression into the other equation.
                  </div>
                </div>
              );
            
            case 'substitutionWhenToUse':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHEN TO USE SUBSTITUTION</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ 
                      background: '#f0fdf4',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      borderLeft: '4px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>IDEAL WHEN</div>
                      <ul style={{ fontSize: '15px', color: design.colors.text.primary, margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
                        <li>One variable is already isolated (y = ... or x = ...)</li>
                        <li>A coefficient is 1 (easy to isolate)</li>
                        <li>One equation is simpler than the other</li>
                      </ul>
                    </div>
                    
                    <div style={{ 
                      background: '#eff6ff',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      borderLeft: '4px solid #2563eb'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>EXAMPLE SETUP</div>
                      <div style={{ 
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '17px',
                        lineHeight: 2,
                        textAlign: 'center'
                      }}>
                        <div><span style={{ color: design.colors.semantic.success }}>y = 3x + 2</span> ← already solved for y</div>
                        <div>2x + y = 12</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'substitutionSteps':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THE PROCESS</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: 1, title: 'Isolate a variable', desc: 'Solve one equation for x or y' },
                      { num: 2, title: 'Substitute', desc: 'Replace that variable in the other equation' },
                      { num: 3, title: 'Solve', desc: 'Find the value of the remaining variable' },
                      { num: 4, title: 'Back-substitute', desc: 'Plug back in to find the other variable' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: design.colors.surface.white, 
                        borderRadius: design.radius.md, 
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: '#2563eb', 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '15px',
                          flexShrink: 0
                        }}>{step.num}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary }}>{step.title}</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'substitutionExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: design.colors.surface.gray,
                    borderRadius: design.radius.md,
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ 
                      fontFamily: design.typography.fontFamilyMath,
                      fontSize: '18px',
                      color: design.colors.text.primary,
                      textAlign: 'center',
                      lineHeight: 2
                    }}>
                      <div>y = 2x + 1</div>
                      <div>3x + y = 11</div>
                    </div>
                  </div>
                  
                  {/* Solution */}
                  <div style={{ 
                    background: '#eff6ff', 
                    borderRadius: design.radius.md, 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>STEP 1: y is already isolated</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          y = <span style={{ color: design.colors.semantic.info }}>2x + 1</span>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>STEP 2: Substitute into second equation</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          3x + <span style={{ color: design.colors.semantic.info }}>(2x + 1)</span> = 11
                        </div>
                      </div>
                      
                      {/* Step 3 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>STEP 3: Solve for x</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <div>5x + 1 = 11</div>
                          <div>5x = 10</div>
                          <div><strong>x = 2</strong></div>
                        </div>
                      </div>
                      
                      {/* Step 4 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.info, fontWeight: '600', marginBottom: '8px' }}>STEP 4: Find y</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          y = 2(2) + 1 = <strong>5</strong>
                        </div>
                      </div>
                      
                      {/* Answer */}
                      <div style={{ borderTop: '1px solid #bfdbfe', paddingTop: '16px', marginTop: '8px' }}>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#166534', textAlign: 'center' }}>
                          Solution: (2, 5)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'eliminationIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>METHOD 2</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Elimination</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    Add or subtract the equations to <strong>eliminate</strong> one variable, leaving a single equation with one unknown.
                  </div>
                </div>
              );
            
            case 'eliminationWhenToUse':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>WHEN TO USE ELIMINATION</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    <div style={{ 
                      background: '#fef2f2',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      borderLeft: '4px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '8px' }}>IDEAL WHEN</div>
                      <ul style={{ fontSize: '15px', color: design.colors.text.primary, margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
                        <li>Coefficients already match or are opposites</li>
                        <li>Coefficients can easily be made to match</li>
                        <li>Both equations are in standard form (Ax + By = C)</li>
                      </ul>
                    </div>
                    
                    <div style={{ 
                      background: '#fef2f2',
                      borderRadius: design.radius.md,
                      padding: '20px',
                      borderLeft: '4px solid #dc2626'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '8px' }}>EXAMPLE SETUP</div>
                      <div style={{ 
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '17px',
                        lineHeight: 2,
                        textAlign: 'center'
                      }}>
                        <div><span style={{ color: design.colors.semantic.error }}>3x</span> + 2y = 14</div>
                        <div><span style={{ color: design.colors.semantic.error }}>3x</span> − y = 8 ← same coefficient on x</div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '16px',
                    padding: '16px 20px',
                    background: design.colors.surface.gray,
                    borderRadius: design.radius.md
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.6 }}>
                      <strong>Pro tip:</strong> If coefficients don't match, multiply one or both equations to create matching coefficients. For example, multiply by 2 to change 3x to 6x.
                    </div>
                  </div>
                </div>
              );
            
            case 'eliminationSteps':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '20px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THE PROCESS</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { num: 1, title: 'Align equations', desc: 'Stack them with like terms lined up' },
                      { num: 2, title: 'Match coefficients', desc: 'Multiply if needed to make one variable cancel' },
                      { num: 3, title: 'Add or subtract', desc: 'Eliminate one variable' },
                      { num: 4, title: 'Solve and substitute', desc: 'Find both values' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: design.colors.surface.white, 
                        borderRadius: design.radius.md, 
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <div style={{ 
                          width: '36px', 
                          height: '36px', 
                          borderRadius: '50%', 
                          background: design.colors.semantic.error, 
                          color: design.colors.surface.white, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontWeight: '700',
                          fontSize: '15px',
                          flexShrink: 0
                        }}>{step.num}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary }}>{step.title}</div>
                          <div style={{ fontSize: '14px', color: design.colors.text.secondary }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            
            case 'eliminationExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: design.colors.surface.gray,
                    borderRadius: design.radius.md,
                    padding: '20px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ 
                      fontFamily: design.typography.fontFamilyMath,
                      fontSize: '18px',
                      color: design.colors.text.primary,
                      textAlign: 'center',
                      lineHeight: 2
                    }}>
                      <div>2x + 3y = 13</div>
                      <div>2x − y = 5</div>
                    </div>
                  </div>
                  
                  {/* Solution */}
                  <div style={{ 
                    background: '#fef2f2', 
                    borderRadius: design.radius.md, 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '8px' }}>STEP 1: Coefficients of x already match (2x)</div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '8px' }}>STEP 2: Subtract to eliminate x</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <div>&nbsp;&nbsp;2x + 3y = 13</div>
                          <div style={{ borderBottom: '2px solid #dc2626', display: 'inline-block', marginBottom: '4px' }}>− (2x − y = 5)</div>
                          <div style={{ marginTop: '4px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4y = 8</div>
                        </div>
                      </div>
                      
                      {/* Step 3 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '8px' }}>STEP 3: Solve for y</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <strong>y = 2</strong>
                        </div>
                      </div>
                      
                      {/* Step 4 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.error, fontWeight: '600', marginBottom: '8px' }}>STEP 4: Find x using 2x − y = 5</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '17px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <div>2x − 2 = 5</div>
                          <div>2x = 7</div>
                          <div><strong>x = 3.5</strong></div>
                        </div>
                      </div>
                      
                      {/* Answer */}
                      <div style={{ borderTop: '1px solid #fecaca', paddingTop: '16px', marginTop: '8px' }}>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: design.typography.sizes.xl, fontWeight: design.typography.weights.bold, color: '#166534', textAlign: 'center' }}>
                          Solution: (3.5, 2)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            // DESMOS Components
            case 'desmosIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Decorative grid pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    opacity: 0.1
                  }}>
                    <svg width="200" height="200" viewBox="0 0 200 200">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="200" height="200" fill="url(#grid)" />
                      <line x1="20" y1="180" x2="180" y2="40" stroke="white" strokeWidth="3"/>
                      <line x1="20" y1="60" x2="180" y2="140" stroke="white" strokeWidth="3"/>
                      <circle cx="100" cy="110" r="8" fill="white"/>
                    </svg>
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                      display: 'inline-block',
                      background: 'rgba(255,255,255,0.2)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      letterSpacing: '1px',
                      marginBottom: '16px'
                    }}>⚡ THE FAST METHOD</div>
                    <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px' }}>DESMOS</div>
                    <div style={{ fontSize: '18px', opacity: 0.9, marginBottom: '20px' }}>Graphing Calculator</div>
                    <div style={{ 
                      fontSize: '17px', 
                      opacity: 0.95, 
                      lineHeight: 1.7,
                      maxWidth: '500px'
                    }}>
                      The digital SAT includes a built-in DESMOS calculator. Graph both equations and click the intersection — <strong>no algebra required</strong>.
                    </div>
                  </div>
                </div>
              );
            
            case 'desmosSATReality':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: '0 4px 24px rgba(5, 150, 105, 0.15)',
                  border: '1px solid #d1fae5'
                }}>
                  {/* Big statement */}
                  <div style={{ 
                    textAlign: 'center',
                    marginBottom: '32px'
                  }}>
                    <div style={{ 
                      fontSize: '14px', 
                      color: '#059669', 
                      fontWeight: '700', 
                      letterSpacing: '2px',
                      marginBottom: '16px'
                    }}>SAT REALITY CHECK</div>
                    <div style={{ 
                      fontSize: '28px', 
                      fontWeight: '700', 
                      color: design.colors.text.primary,
                      lineHeight: 1.3,
                      maxWidth: '500px',
                      margin: '0 auto'
                    }}>
                      You will <span style={{ color: '#059669' }}>almost never</span> need substitution or elimination on the SAT.
                    </div>
                  </div>
                  
                  {/* Comparison */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                    {/* Hard way */}
                    <div style={{ 
                      background: '#fef2f2',
                      borderRadius: design.radius.lg,
                      padding: '24px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '-12px',
                        left: '20px',
                        background: design.colors.semantic.error,
                        color: design.colors.surface.white,
                        padding: '4px 12px',
                        borderRadius: design.radius.md,
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}>SLOW</div>
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: design.colors.semantic.error, marginBottom: '4px' }}>Algebra by Hand</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: design.colors.text.primary, marginBottom: '12px' }}>2-3 min</div>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary, lineHeight: 1.7 }}>
                          Multiple steps, easy to make errors, mentally draining
                        </div>
                      </div>
                    </div>
                    
                    {/* Easy way */}
                    <div style={{ 
                      background: '#f0fdf4',
                      borderRadius: design.radius.lg,
                      padding: '24px',
                      position: 'relative'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '-12px',
                        left: '20px',
                        background: '#059669',
                        color: design.colors.surface.white,
                        padding: '4px 12px',
                        borderRadius: design.radius.md,
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '1px'
                      }}>FAST</div>
                      <div style={{ marginTop: '8px' }}>
                        <div style={{ fontSize: design.typography.sizes.lg, fontWeight: design.typography.weights.bold, color: '#059669', marginBottom: '4px' }}>DESMOS</div>
                        <div style={{ fontSize: '32px', fontWeight: '700', color: design.colors.text.primary, marginBottom: '12px' }}>20 sec</div>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary, lineHeight: 1.7 }}>
                          Type, click, done. No calculations needed.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Why learn algebra */}
                  <div style={{ 
                    background: 'linear-gradient(135deg, #f5f5f7 0%, #e5e5e7 100%)',
                    borderRadius: design.radius.md,
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{ 
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: design.colors.surface.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>
                      <span style={{ fontWeight: design.typography.weights.bold, color: design.colors.accent.orange }}>?</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '4px' }}>So why learn algebra?</div>
                      <div style={{ fontSize: '14px', color: design.colors.text.secondary, lineHeight: 1.6 }}>
                        You need it to set up word problems, recognize solution types, and handle edge cases like infinite solutions with parameters.
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'desmosSteps':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.gray,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`
                }}>
                  <div style={{ 
                    fontSize: '13px', 
                    color: design.colors.text.tertiary, 
                    marginBottom: '24px', 
                    fontWeight: '600', 
                    letterSpacing: '1px', 
                    textAlign: 'center' 
                  }}>THE 20-SECOND METHOD</div>
                  
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    {[
                      { num: 1, title: 'Open calculator', desc: 'Click the DESMOS icon' },
                      { num: 2, title: 'Enter equation 1', desc: 'Type it exactly as shown' },
                      { num: 3, title: 'Enter equation 2', desc: 'Type on a new line' },
                      { num: 4, title: 'Click intersection', desc: 'Get the answer instantly' }
                    ].map((step) => (
                      <div key={step.num} style={{ 
                        background: design.colors.surface.white, 
                        borderRadius: design.radius.lg, 
                        padding: '24px',
                        textAlign: 'center',
                        position: 'relative'
                      }}>
                        <div style={{ 
                          position: 'absolute',
                          top: '-10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: '#059669',
                          color: design.colors.surface.white,
                          fontSize: '12px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>{step.num}</div>
                        <div style={{ fontSize: '32px', marginBottom: '12px', marginTop: '8px' }}>{step.icon}</div>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary, marginBottom: '4px' }}>{step.title}</div>
                        <div style={{ fontSize: '13px', color: design.colors.text.secondary }}>{step.desc}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Visual representation */}
                  <div style={{ 
                    marginTop: '24px',
                    background: design.colors.surface.white,
                    borderRadius: design.radius.lg,
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ flex: '1', minWidth: '200px' }}>
                      <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '500' }}>YOU TYPE:</div>
                      <div style={{ 
                        fontFamily: 'SF Mono, Monaco, monospace',
                        fontSize: '16px',
                        color: design.colors.text.primary,
                        background: design.colors.surface.gray,
                        padding: '12px 16px',
                        borderRadius: design.radius.sm,
                        lineHeight: 1.8
                      }}>
                        <div style={{ color: design.colors.semantic.info }}>2x + 3y = 12</div>
                        <div style={{ color: design.colors.semantic.error }}>x - y = 1</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '24px', color: design.colors.text.tertiary }}>→</div>
                    <div style={{ flex: '1', minWidth: '150px' }}>
                      <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '8px', fontWeight: '500' }}>YOU GET:</div>
                      <div style={{ 
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#059669',
                        background: '#f0fdf4',
                        padding: '12px 20px',
                        borderRadius: design.radius.sm,
                        textAlign: 'center'
                      }}>
                        (3, 2)
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'desmosWhenToUse':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ 
                    fontSize: '13px', 
                    color: design.colors.text.tertiary, 
                    marginBottom: '24px', 
                    fontWeight: '600', 
                    letterSpacing: '1px', 
                    textAlign: 'center' 
                  }}>WHEN TO USE WHAT</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    {/* DESMOS */}
                    <div style={{ 
                      borderRadius: design.radius.lg,
                      overflow: 'hidden',
                      border: '2px solid #059669'
                    }}>
                      <div style={{ 
                        background: '#059669',
                        color: design.colors.surface.white,
                        padding: '16px 20px',
                        fontSize: '16px',
                        fontWeight: '700'
                      }}>Use DESMOS</div>
                      <div style={{ padding: '20px' }}>
                        {[
                          'Finding intersection points',
                          'Checking if a point is a solution',
                          'Seeing if lines are parallel',
                          '"Solve the system" questions'
                        ].map((item, i) => (
                          <div key={i} style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '10px 0',
                            borderBottom: i < 3 ? '1px solid #e5e5e5' : 'none'
                          }}>
                            <div style={{ 
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: '#d1fae5',
                              color: '#059669',
                              fontSize: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <span style={{ fontSize: '10px' }}>●</span>
                            </div>
                            <span style={{ fontSize: '14px', color: design.colors.text.primary }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Algebra */}
                    <div style={{ 
                      borderRadius: design.radius.lg,
                      overflow: 'hidden',
                      border: '2px solid #6b7280'
                    }}>
                      <div style={{ 
                        background: '#6b7280',
                        color: design.colors.surface.white,
                        padding: '16px 20px',
                        fontSize: '16px',
                        fontWeight: '700'
                      }}>Use Algebra</div>
                      <div style={{ padding: '20px' }}>
                        {[
                          'Infinite solutions with parameter (r)',
                          '"Which system represents..."',
                          'Setting up word problems',
                          'Questions about coefficients'
                        ].map((item, i) => (
                          <div key={i} style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '10px 0',
                            borderBottom: i < 3 ? '1px solid #e5e5e5' : 'none'
                          }}>
                            <div style={{ 
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: '#f3f4f6',
                              color: design.colors.text.secondary,
                              fontSize: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <span style={{ fontSize: '10px' }}>●</span>
                            </div>
                            <span style={{ fontSize: '14px', color: design.colors.text.primary }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom line */}
                  <div style={{ 
                    marginTop: '24px',
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    borderRadius: design.radius.md,
                    padding: '20px 24px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '17px', color: design.colors.surface.white, fontWeight: '600' }}>
                      Default to DESMOS. Only use algebra when you have to.
                    </div>
                  </div>
                </div>
              );
            
            // Infinite Solutions Components
            case 'infiniteSolutionsIntro':
              return (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  color: design.colors.surface.white
                }}>
                  <div style={{ fontSize: design.typography.sizes.xs, color: design.colors.accent.orange, marginBottom: design.spacing.sm, fontWeight: design.typography.weights.semibold, letterSpacing: design.typography.letterSpacing.wider }}>SPECIAL CASE</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Infinite Solutions</div>
                  <div style={{ 
                    fontSize: '17px', 
                    opacity: 0.95, 
                    lineHeight: 1.6,
                    padding: '16px 20px',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: design.radius.sm
                  }}>
                    When two equations represent the <strong>same line</strong>, every point on that line is a solution.
                  </div>
                </div>
              );
            
            case 'infiniteSolutionsRecognize':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>RECOGNIZING INFINITE SOLUTIONS</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {/* What it looks like */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #7c3aed'
                    }}>
                      <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '16px' }}>WHAT IT LOOKS LIKE</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px' }}>
                        One equation is a <strong>multiple</strong> of the other:
                      </div>
                      <div style={{ 
                        background: '#f5f3ff',
                        borderRadius: design.radius.sm,
                        padding: '16px',
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '17px',
                        textAlign: 'center'
                      }}>
                        <div style={{ color: design.colors.semantic.info, marginBottom: '4px' }}>x + 2y = 6</div>
                        <div style={{ color: design.colors.text.secondary, fontSize: '14px', margin: '8px 0' }}>× 3</div>
                        <div style={{ color: '#7c3aed' }}>3x + 6y = 18</div>
                      </div>
                    </div>
                    
                    {/* What happens when solving */}
                    <div style={{ 
                      background: design.colors.surface.white, 
                      borderRadius: design.radius.md, 
                      padding: '24px',
                      border: '2px solid #16a34a'
                    }}>
                      <div style={{ fontSize: '14px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '16px' }}>WHAT HAPPENS WHEN SOLVING</div>
                      <div style={{ fontSize: '15px', color: design.colors.text.primary, marginBottom: '12px' }}>
                        Variables cancel, leaving a <strong>true statement</strong>:
                      </div>
                      <div style={{ 
                        background: '#f0fdf4',
                        borderRadius: design.radius.sm,
                        padding: '16px',
                        fontFamily: design.typography.fontFamilyMath,
                        fontSize: '17px',
                        textAlign: 'center'
                      }}>
                        <div style={{ color: design.colors.text.primary, marginBottom: '4px' }}>0 = 0</div>
                        <div style={{ color: design.colors.text.secondary, fontSize: '14px', marginTop: '8px', fontFamily: 'system-ui' }}>This confirms infinite solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            case 'infiniteSolutionsParametric':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.xl,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  boxShadow: design.shadows.md,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ fontSize: '13px', color: design.colors.text.tertiary, marginBottom: '24px', fontWeight: '600', letterSpacing: '1px', textAlign: 'center' }}>THE SAT QUESTION TYPE</div>
                  
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '24px',
                    marginBottom: '20px',
                    borderLeft: '4px solid #7c3aed'
                  }}>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.7 }}>
                      The SAT gives you a system with infinite solutions and asks: <strong>"Which point lies on the graph of each equation?"</strong>
                    </div>
                    <div style={{ fontSize: '15px', color: design.colors.text.primary, lineHeight: 1.7, marginTop: '12px' }}>
                      Answer choices use a <strong>parameter</strong> (usually <em>r</em>) to represent the infinite points, like: <span style={{ fontFamily: design.typography.fontFamilyMath }}>(r, 3 − r/2)</span>
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: design.colors.surface.white, 
                    borderRadius: design.radius.md, 
                    padding: '24px'
                  }}>
                    <div style={{ fontSize: '14px', color: '#7c3aed', fontWeight: '600', marginBottom: '16px' }}>HOW TO SOLVE</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { step: 'Let x = r', desc: 'Use the parameter as x' },
                        { step: 'Substitute into simpler equation', desc: 'Plug r in for x' },
                        { step: 'Solve for y', desc: 'Get y in terms of r' },
                        { step: 'Match to answer choice', desc: 'Find (r, your expression)' }
                      ].map((item, i) => (
                        <div key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '16px',
                          padding: '12px 16px',
                          background: design.colors.surface.gray,
                          borderRadius: design.radius.sm
                        }}>
                          <div style={{ 
                            width: '28px', 
                            height: '28px', 
                            borderRadius: '50%', 
                            background: '#7c3aed', 
                            color: design.colors.surface.white,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: '700',
                            flexShrink: 0
                          }}>{i + 1}</div>
                          <div>
                            <div style={{ fontSize: '15px', fontWeight: '600', color: design.colors.text.primary }}>{item.step}</div>
                            <div style={{ fontSize: '13px', color: design.colors.text.secondary }}>{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            
            case 'infiniteSolutionsExample':
              return (
                <div key={idx} style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.lg,
                  padding: design.spacing.xl,
                  margin: `${design.spacing.xl} 0`,
                  border: `1px solid ${design.colors.surface.grayDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: design.spacing.sm, marginBottom: design.spacing.lg }}>
                    <div style={{ width: '4px', height: '24px', background: design.colors.accent.orange, borderRadius: '2px' }} />
                    <span style={{ fontFamily: design.typography.fontFamily, fontSize: design.typography.sizes.xs, fontWeight: design.typography.weights.bold, color: design.colors.accent.orange, textTransform: 'uppercase', letterSpacing: design.typography.letterSpacing.wider }}>Example</span>
                  </div>
                  
                  {/* Problem */}
                  <div style={{ 
                    background: design.colors.surface.gray,
                    borderRadius: design.radius.md,
                    padding: '24px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ 
                      fontFamily: design.typography.fontFamilyMath,
                      fontSize: '18px',
                      color: design.colors.text.primary,
                      textAlign: 'center',
                      lineHeight: 2,
                      marginBottom: '12px'
                    }}>
                      <div>x + 2y = 6</div>
                      <div>3x + 6y = 18</div>
                    </div>
                    <div style={{ fontSize: '15px', color: design.colors.text.secondary, textAlign: 'center' }}>
                      Which point lies on the graph of each equation?
                    </div>
                  </div>
                  
                  {/* Solution Steps */}
                  <div style={{ 
                    background: '#f0fdf4', 
                    borderRadius: design.radius.md, 
                    padding: '24px'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Step 1 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>STEP 1: Let x = r</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '18px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <span style={{ color: '#7c3aed' }}>r</span> + 2y = 6
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>STEP 2: Solve for y</div>
                        <div style={{ fontFamily: design.typography.fontFamilyMath, fontSize: '18px', color: design.colors.text.primary, paddingLeft: '12px' }}>
                          <div style={{ marginBottom: '4px' }}>2y = 6 − r</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>y = 3 −</span>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <span style={{ fontSize: '14px' }}>r</span>
                              <div style={{ width: '14px', height: '2px', background: design.colors.text.primary }} />
                              <span style={{ fontSize: '14px' }}>2</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Result */}
                      <div style={{ 
                        borderTop: '1px solid #bbf7d0',
                        paddingTop: '16px',
                        marginTop: '8px'
                      }}>
                        <div style={{ fontSize: '13px', color: design.colors.semantic.success, fontWeight: '600', marginBottom: '8px' }}>STEP 3: Write the answer</div>
                        <div style={{ 
                          fontFamily: design.typography.fontFamilyMath, 
                          fontSize: '20px', 
                          fontWeight: '700', 
                          color: '#166534',
                          paddingLeft: '12px'
                        }}>
                          (r, 3 − r/2)
                        </div>
                        <div style={{ fontSize: '14px', color: design.colors.text.secondary, marginTop: '8px', paddingLeft: '12px' }}>
                          Select the answer choice matching this form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            
            default:
              return null;
          }
        })}

        {/* Ask Perform Button and Chat - below text lesson content */}
        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AiTutorButton
            onClick={() => setShowAiTutor(!showAiTutor)}
            isOpen={showAiTutor}
          />
          <div style={{ width: '100%' }}>
            <AiTutorChat
              isOpen={showAiTutor}
              onClose={() => setShowAiTutor(false)}
              moduleId={activeModule}
              lessonId={activeLesson}
              lessonTitle={currentLesson?.title}
              isVideoLesson={false}
              videoTranscript={null}
              videoTimestamp={0}
            />
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '4px solid #e5e7eb',
          borderTop: '4px solid #667eea',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={
          !user ? (
            <LandingPage />
          ) : (
            <Navigate to="/course" replace />
          )
        } />

        {/* Course Route */}
        <Route path="/course" element={
          user ? (
            <div style={{
              minHeight: '100vh',
              background: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
              color: design.colors.text.primary,
              WebkitFontSmoothing: 'antialiased'
            }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .module-card { transition: all 0.2s ease; cursor: pointer; }
        .module-card:hover { background: #f5f5f7; }
        
        .module-card { 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .module-card:hover { 
          border-color: rgba(234, 88, 12, 0.4) !important;
          background: linear-gradient(135deg, rgba(234, 88, 12, 0.02), rgba(249, 115, 22, 0.02)) !important;
        }
        
        .lesson-row { 
          transition: all 0.2s ease; 
          cursor: pointer;
        }
        .lesson-row:hover { 
          background: rgba(234, 88, 12, 0.03);
        }
        
        .back-btn { transition: all 0.2s ease; }
        .back-btn:hover { opacity: 0.7; }
        
        .nav-link {
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #ea580c !important;
        }
        
        ::selection { background: rgba(234, 88, 12, 0.15); }
      `}</style>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div 
            onClick={() => { setView('modules'); setActiveModule(null); setActiveLesson(null); }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer'
            }}
          >
            <span style={{
              fontSize: '18px',
              fontWeight: '600',
              color: design.colors.text.primary,
              letterSpacing: '-0.3px'
            }}>
              Perform
            </span>
            <span style={{
              fontSize: '18px',
              fontWeight: '700',
              color: design.colors.accent.orange,
              letterSpacing: '-0.3px',
              marginLeft: '5px'
            }}>
              SAT
            </span>
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="#" className="nav-link" style={{ 
              fontSize: '14px', 
              color: design.colors.text.primary, 
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Math
            </a>
            <a href="#" className="nav-link" style={{ 
              fontSize: '14px', 
              color: '#9ca3af', 
              textDecoration: 'none',
              fontWeight: '400'
            }}>
              Reading & Writing
            </a>
            {user && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '14px', color: design.colors.text.secondary }}>{user.firstName || user.email}</span>
                <button
                  onClick={logout}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(0,0,0,0.1)',
                    padding: '8px 16px',
                    borderRadius: design.radius.sm,
                    fontSize: '14px',
                    color: design.colors.text.secondary,
                    cursor: 'pointer'
                  }}
                >
                  Log out
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '140px 32px 100px'
      }}>
        {view === 'modules' && (
          <>
            {/* Page Title */}
            <div style={{ marginBottom: '64px' }}>
              {user && user.firstName && (
                <p style={{
                  fontSize: '16px',
                  color: design.colors.accent.orange,
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Welcome back, {user.firstName}
                </p>
              )}
              <h1 style={{
                fontSize: '52px',
                fontWeight: '700',
                letterSpacing: '-2px',
                color: design.colors.text.primary,
                marginBottom: '16px'
              }}>
                SAT Math
              </h1>
              <p style={{
                fontSize: '18px',
                color: design.colors.text.secondary,
                lineHeight: 1.5
              }}>
                Master every concept. Outperform the competition.
              </p>
            </div>

            {/* Module Cards */}
            <div>
              {modules.map((module, idx) => {
                const moduleLessons = allLessons[module.id] || [];
                const progress = getModuleProgress(module.id, moduleLessons);
                return (
                <div
                  key={module.id}
                  className="module-card"
                  onClick={() => { setActiveModule(module.id); setView('list'); }}
                  style={{
                    padding: '28px 32px',
                    borderRadius: design.radius.md,
                    border: progress === 100 ? '2px solid #10b981' : '1px solid rgba(0,0,0,0.08)',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: progress === 100 ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.03), rgba(16, 185, 129, 0.06))' : '#fff'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flex: 1 }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: progress === 100 ? '#10b981' : '#ea580c',
                      fontFeatureSettings: '"tnum"',
                      minWidth: '24px'
                    }}>
                      {progress === 100 ? '✓' : idx + 1}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <h2 style={{
                          fontSize: '17px',
                          fontWeight: '600',
                          color: design.colors.text.primary,
                          letterSpacing: '-0.2px'
                        }}>
                          {module.title}
                        </h2>
                        {progress === 100 && (
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: design.colors.surface.white,
                            background: design.colors.semantic.success,
                            padding: '4px 10px',
                            borderRadius: design.radius.md,
                            letterSpacing: '0.5px'
                          }}>
                            COMPLETE
                          </span>
                        )}
                      </div>
                      <p style={{
                        fontSize: '15px',
                        color: design.colors.text.secondary,
                        lineHeight: 1.4,
                        marginBottom: progress > 0 && progress < 100 ? '12px' : '0'
                      }}>
                        {module.description}
                      </p>
                      {progress > 0 && progress < 100 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{
                            flex: 1,
                            maxWidth: '200px',
                            height: '4px',
                            background: '#f3f4f6',
                            borderRadius: '2px',
                            overflow: 'hidden'
                          }}>
                            <div style={{
                              width: `${progress}%`,
                              height: '100%',
                              background: design.colors.accent.orange,
                              borderRadius: '2px'
                            }} />
                          </div>
                          <span style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: design.colors.accent.orange
                          }}>
                            {progress}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                    marginLeft: '16px'
                  }}>
                    <span style={{ 
                      color: progress === 100 ? '#10b981' : '#ea580c',
                      fontSize: '18px'
                    }}>→</span>
                  </div>
                </div>
              );})}
            </div>
          </>
        )}

        {view === 'list' && (
          <>
            {/* Back + Title */}
            <div style={{ marginBottom: '48px' }}>
              <button
                className="back-btn"
                onClick={() => { setView('modules'); setActiveModule(null); }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontSize: '14px',
                  color: design.colors.accent.orange,
                  cursor: 'pointer',
                  marginBottom: '32px',
                  fontWeight: '500'
                }}
              >
                ← All Modules
              </button>
              
              {/* Progress Section */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  flex: 1,
                  height: '8px',
                  background: '#f3f4f6',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${getModuleProgress(activeModule, currentModuleLessons)}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #ea580c, #f97316)',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: design.colors.accent.orange,
                  minWidth: '45px'
                }}>
                  {getModuleProgress(activeModule, currentModuleLessons)}%
                </span>
              </div>
              
              <h1 style={{
                fontSize: '40px',
                fontWeight: '700',
                letterSpacing: '-1px',
                color: design.colors.text.primary,
                marginBottom: '12px'
              }}>
                {currentModuleInfo?.title}
              </h1>
              <p style={{
                fontSize: '16px',
                color: design.colors.text.secondary
              }}>
                {currentModuleLessons.length} lessons
              </p>
            </div>

            {/* Sections */}
            {Object.entries(sections).map(([sectionName, sectionLessons], sectionIdx) => {
              const sectionHasVideos = sectionLessons.some(l => l.type === 'video');
              const sectionHasQuestions = hasQuestionsForSection(activeModule, sectionName);
              const practiced = hasPracticed(activeModule, sectionName);
              const bestScore = getBestScore(activeModule, sectionName);

              return (
              <div key={sectionIdx} style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h2 style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: design.colors.accent.orange,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {sectionName}
                  </h2>
                  {sectionHasVideos && sectionHasQuestions && (
                    <button
                      onClick={(e) => { e.stopPropagation(); startSectionPractice(activeModule, sectionName); }}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        background: practiced ? '#10b981' : '#ea580c',
                        color: '#fff',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {practiced ? `${bestScore}/5` : 'Practice →'}
                    </button>
                  )}
                </div>
                
                <div style={{
                  background: design.colors.surface.white,
                  borderRadius: design.radius.md,
                  border: '1px solid rgba(0,0,0,0.08)',
                  overflow: 'hidden'
                }}>
                  {sectionLessons.map((lesson, idx) => (
                    <div
                      key={lesson.id}
                      className="lesson-row"
                      onClick={() => { setActiveLesson(lesson.id); setView('lesson'); }}
                      style={{
                        padding: '18px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: idx < sectionLessons.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none'
                      }}
                    >
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: design.radius.sm,
                        background: completedLessons[`${activeModule}-${lesson.id}`] 
                          ? '#10b981' 
                          : lesson.type === 'video' ? '#ea580c' : '#1d1d1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px',
                        flexShrink: 0
                      }}>
                        <span style={{ 
                          color: design.colors.surface.white, 
                          fontSize: completedLessons[`${activeModule}-${lesson.id}`] ? '14px' : '10px'
                        }}>
                          {completedLessons[`${activeModule}-${lesson.id}`] ? '✓' : lesson.type === 'video' ? '▶' : '◆'}
                        </span>
                      </div>
                      
                      <span style={{
                        flex: 1,
                        fontSize: '15px',
                        fontWeight: '500',
                        color: completedLessons[`${activeModule}-${lesson.id}`] ? '#9ca3af' : '#1d1d1f',
                        textDecoration: completedLessons[`${activeModule}-${lesson.id}`] ? 'none' : 'none'
                      }}>
                        {lesson.title}
                      </span>
                      
                      <span style={{
                        fontSize: '14px',
                        color: '#9ca3af'
                      }}>
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
            })}
          </>
        )}

        {/* Practice View */}
        {view === 'practice' && activeSection && (() => {
          const questions = getQuestionsForSection(activeModule, activeSection);
          if (questions.length === 0) return null;
          const currentQuestion = questions[practiceState.currentQuestionIndex];

          // Results screen
          if (practiceState.isComplete) {
            const correctCount = Object.values(practiceState.answers).filter(a => a.correct).length;
            return (
              <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <button
                  onClick={() => { setView('list'); setActiveSection(null); setShowCalculator(false); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '14px',
                    color: '#ea580c',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '48px',
                    fontWeight: '500'
                  }}
                >
                  ← Back to {currentModuleInfo?.title}
                </button>

                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: correctCount >= 4 ? 'rgba(16, 185, 129, 0.1)' : correctCount >= 2 ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 32px'
                }}>
                  <span style={{
                    fontSize: '48px',
                    fontWeight: '700',
                    color: correctCount >= 4 ? '#10b981' : correctCount >= 2 ? '#eab308' : '#ef4444'
                  }}>
                    {correctCount}
                  </span>
                  <span style={{ fontSize: '24px', color: '#6b7280' }}>/5</span>
                </div>

                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1d1d1f', marginBottom: '12px' }}>
                  {correctCount >= 4 ? 'Excellent!' : correctCount >= 2 ? 'Good effort!' : 'Keep practicing!'}
                </h2>
                <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '48px' }}>
                  You got {correctCount} out of 5 questions correct
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                  <button
                    onClick={() => startSectionPractice(activeModule, activeSection)}
                    style={{
                      padding: '16px 32px',
                      borderRadius: '12px',
                      border: '2px solid #ea580c',
                      background: '#fff',
                      color: '#ea580c',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => { setView('list'); setActiveSection(null); setShowCalculator(false); }}
                    style={{
                      padding: '16px 32px',
                      borderRadius: '12px',
                      border: 'none',
                      background: '#ea580c',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            );
          }

          return (
            <>
              {/* Practice Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <button
                  onClick={() => { setView('list'); setActiveSection(null); setShowCalculator(false); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '14px',
                    color: '#ea580c',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: '500'
                  }}
                >
                  ← Back
                </button>

                <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1d1d1f' }}>
                  {activeSection}
                </h1>

                <button
                  onClick={() => setShowCalculator(!showCalculator)}
                  style={{
                    background: showCalculator ? '#ea580c' : '#1d1d1f',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="8" y2="10.01" />
                    <line x1="12" y1="10" x2="12" y2="10.01" />
                    <line x1="16" y1="10" x2="16" y2="10.01" />
                  </svg>
                  {showCalculator ? 'Hide Calculator' : 'DESMOS Calculator'}
                </button>
              </div>

              {/* Full Screen Calculator Modal */}
              {showCalculator && (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.92)',
                  zIndex: 9999,
                  display: 'flex',
                  padding: '24px',
                  gap: '24px'
                }}>
                  {/* Left: Question Panel (50%) */}
                  <div style={{
                    flex: '1 1 50%',
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '40px',
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Modal Progress indicator */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '32px'
                    }}>
                      {questions.map((_, idx) => (
                        <div
                          key={idx}
                          style={{
                            flex: 1,
                            height: '6px',
                            borderRadius: '3px',
                            background: practiceState.answers[questions[idx]?.id]
                              ? (practiceState.answers[questions[idx].id].correct ? '#10b981' : '#ef4444')
                              : idx === practiceState.currentQuestionIndex
                                ? '#ea580c'
                                : '#e5e5e5'
                          }}
                        />
                      ))}
                    </div>

                    {/* Modal Question number */}
                    <div style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#6b7280',
                      marginBottom: '20px'
                    }}>
                      Question {practiceState.currentQuestionIndex + 1} of {questions.length}
                    </div>

                    {/* Modal Question text */}
                    <h2 style={{
                      fontSize: '26px',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      lineHeight: 1.4,
                      marginBottom: '36px'
                    }}>
                      {currentQuestion.question}
                    </h2>

                    {/* Modal Answer choices */}
                    <div style={{ marginBottom: '28px', flex: 1 }}>
                      {currentQuestion.choices.map((choice) => {
                        const isSelected = practiceState.selectedAnswer === choice.id;
                        const isCorrect = choice.id === currentQuestion.correctAnswer;
                        const showResult = practiceState.showFeedback;

                        let borderColor = 'rgba(0,0,0,0.1)';
                        let bgColor = '#fff';

                        if (showResult) {
                          if (isCorrect) {
                            borderColor = '#10b981';
                            bgColor = 'rgba(16, 185, 129, 0.08)';
                          } else if (isSelected && !isCorrect) {
                            borderColor = '#ef4444';
                            bgColor = 'rgba(239, 68, 68, 0.08)';
                          }
                        } else if (isSelected) {
                          borderColor = '#ea580c';
                          bgColor = 'rgba(234, 88, 12, 0.05)';
                        }

                        return (
                          <div
                            key={choice.id}
                            onClick={() => handleSelectAnswer(choice.id)}
                            style={{
                              padding: '18px 24px',
                              borderRadius: '14px',
                              border: `2px solid ${borderColor}`,
                              background: bgColor,
                              cursor: practiceState.showFeedback ? 'default' : 'pointer',
                              marginBottom: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '14px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              background: showResult
                                ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#f5f5f7')
                                : (isSelected ? '#ea580c' : '#f5f5f7'),
                              color: (showResult && (isCorrect || isSelected)) || isSelected ? '#fff' : '#6b7280',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '15px',
                              fontWeight: '600'
                            }}>
                              {showResult && isCorrect ? '✓' : showResult && isSelected && !isCorrect ? '✗' : choice.id}
                            </span>
                            <span style={{
                              fontSize: '18px',
                              color: '#1d1d1f'
                            }}>
                              {choice.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Modal Check Answer / Feedback */}
                    {!practiceState.showFeedback ? (
                      <button
                        onClick={() => handleCheckAnswer(currentQuestion)}
                        disabled={!practiceState.selectedAnswer}
                        style={{
                          width: '100%',
                          padding: '18px',
                          borderRadius: '14px',
                          border: 'none',
                          background: practiceState.selectedAnswer ? '#ea580c' : '#e5e5e5',
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: '600',
                          cursor: practiceState.selectedAnswer ? 'pointer' : 'default'
                        }}
                      >
                        Check Answer
                      </button>
                    ) : (
                      <>
                        {/* Modal Feedback panel */}
                        <div style={{
                          background: practiceState.answers[currentQuestion.id]?.correct
                            ? 'rgba(16, 185, 129, 0.08)'
                            : 'rgba(239, 68, 68, 0.08)',
                          borderRadius: '14px',
                          padding: '24px',
                          marginBottom: '20px',
                          borderLeft: `4px solid ${practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444'}`
                        }}>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444',
                            marginBottom: '12px'
                          }}>
                            {practiceState.answers[currentQuestion.id]?.correct ? 'Correct!' : 'Incorrect'}
                          </div>
                          <p style={{
                            fontSize: '16px',
                            color: '#1d1d1f',
                            lineHeight: 1.6
                          }}>
                            {currentQuestion.explanation}
                          </p>
                        </div>

                        {/* Modal Next button */}
                        <button
                          onClick={() => handleNextQuestion(questions)}
                          style={{
                            width: '100%',
                            padding: '18px',
                            borderRadius: '14px',
                            border: 'none',
                            background: '#ea580c',
                            color: '#fff',
                            fontSize: '18px',
                            fontWeight: '600',
                            cursor: 'pointer'
                          }}
                        >
                          {practiceState.currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                        </button>
                      </>
                    )}
                  </div>

                  {/* Right: Calculator (50%) */}
                  <div style={{
                    flex: '1 1 50%',
                    background: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Calculator Header */}
                    <div style={{
                      padding: '16px 24px',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#1d1d1f'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                          <rect x="4" y="2" width="16" height="20" rx="2" />
                          <line x1="8" y1="6" x2="16" y2="6" />
                          <line x1="8" y1="10" x2="8" y2="10.01" />
                          <line x1="12" y1="10" x2="12" y2="10.01" />
                          <line x1="16" y1="10" x2="16" y2="10.01" />
                          <line x1="8" y1="14" x2="8" y2="14.01" />
                          <line x1="12" y1="14" x2="12" y2="14.01" />
                          <line x1="16" y1="14" x2="16" y2="14.01" />
                        </svg>
                        <span style={{ fontWeight: '600', color: '#fff', fontSize: '16px' }}>
                          DESMOS Calculator
                        </span>
                      </div>
                      <button
                        onClick={() => setShowCalculator(false)}
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '10px 16px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span style={{ fontSize: '18px' }}>×</span>
                        Close (ESC)
                      </button>
                    </div>

                    {/* Calculator iframe */}
                    <iframe
                      src="https://www.desmos.com/calculator"
                      title="DESMOS Calculator"
                      style={{
                        flex: 1,
                        width: '100%',
                        border: 'none'
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Regular Question Panel (when calculator is closed) */}
              <div style={{ display: showCalculator ? 'none' : 'block', maxWidth: '700px', margin: '0 auto' }}>
                {/* Progress indicator */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '32px'
                }}>
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        flex: 1,
                        height: '4px',
                        borderRadius: '2px',
                        background: practiceState.answers[questions[idx]?.id]
                          ? (practiceState.answers[questions[idx].id].correct ? '#10b981' : '#ef4444')
                          : idx === practiceState.currentQuestionIndex
                            ? '#ea580c'
                            : '#e5e5e5'
                      }}
                    />
                  ))}
                </div>

                {/* Question number */}
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#6b7280',
                  marginBottom: '16px'
                }}>
                  Question {practiceState.currentQuestionIndex + 1} of {questions.length}
                </div>

                {/* Question text */}
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  lineHeight: 1.4,
                  marginBottom: '32px'
                }}>
                  {currentQuestion.question}
                </h2>

                {/* Answer choices */}
                <div style={{ marginBottom: '24px' }}>
                  {currentQuestion.choices.map((choice) => {
                    const isSelected = practiceState.selectedAnswer === choice.id;
                    const isCorrect = choice.id === currentQuestion.correctAnswer;
                    const showResult = practiceState.showFeedback;

                    let borderColor = 'rgba(0,0,0,0.08)';
                    let bgColor = '#fff';

                    if (showResult) {
                      if (isCorrect) {
                        borderColor = '#10b981';
                        bgColor = 'rgba(16, 185, 129, 0.08)';
                      } else if (isSelected && !isCorrect) {
                        borderColor = '#ef4444';
                        bgColor = 'rgba(239, 68, 68, 0.08)';
                      }
                    } else if (isSelected) {
                      borderColor = '#ea580c';
                      bgColor = 'rgba(234, 88, 12, 0.05)';
                    }

                    return (
                      <div
                        key={choice.id}
                        onClick={() => handleSelectAnswer(choice.id)}
                        style={{
                          padding: '16px 20px',
                          borderRadius: '12px',
                          border: `2px solid ${borderColor}`,
                          background: bgColor,
                          cursor: practiceState.showFeedback ? 'default' : 'pointer',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          background: showResult
                            ? (isCorrect ? '#10b981' : isSelected ? '#ef4444' : '#f5f5f7')
                            : (isSelected ? '#ea580c' : '#f5f5f7'),
                          color: (showResult && (isCorrect || isSelected)) || isSelected ? '#fff' : '#6b7280',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          {showResult && isCorrect ? '✓' : showResult && isSelected && !isCorrect ? '✗' : choice.id}
                        </span>
                        <span style={{
                          fontSize: '16px',
                          color: '#1d1d1f'
                        }}>
                          {choice.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Check Answer / Feedback */}
                {!practiceState.showFeedback ? (
                  <button
                    onClick={() => handleCheckAnswer(currentQuestion)}
                    disabled={!practiceState.selectedAnswer}
                    style={{
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: 'none',
                      background: practiceState.selectedAnswer ? '#ea580c' : '#e5e5e5',
                      color: '#fff',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: practiceState.selectedAnswer ? 'pointer' : 'default'
                    }}
                  >
                    Check Answer
                  </button>
                ) : (
                  <>
                    {/* Feedback panel */}
                    <div style={{
                      background: practiceState.answers[currentQuestion.id]?.correct
                        ? 'rgba(16, 185, 129, 0.08)'
                        : 'rgba(239, 68, 68, 0.08)',
                      borderRadius: '12px',
                      padding: '24px',
                      marginBottom: '24px',
                      borderLeft: `4px solid ${practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444'}`
                    }}>
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: practiceState.answers[currentQuestion.id]?.correct ? '#10b981' : '#ef4444',
                        marginBottom: '12px'
                      }}>
                        {practiceState.answers[currentQuestion.id]?.correct ? 'Correct!' : 'Incorrect'}
                      </div>
                      <p style={{
                        fontSize: '15px',
                        color: '#1d1d1f',
                        lineHeight: 1.6
                      }}>
                        {currentQuestion.explanation}
                      </p>
                    </div>

                    {/* Next button */}
                    <button
                      onClick={() => handleNextQuestion(questions)}
                      style={{
                        width: '100%',
                        padding: '16px',
                        borderRadius: '12px',
                        border: 'none',
                        background: '#ea580c',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {practiceState.currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                  </>
                )}
              </div>
            </>
          );
        })()}

        {view === 'lesson' && (
          <>
            {/* Lesson View */}
            <div style={{ marginBottom: design.spacing['2xl'] }}>
              <button
                className="back-btn"
                onClick={() => { setView('list'); setActiveLesson(null); }}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: design.typography.fontFamily,
                  fontSize: design.typography.sizes.sm,
                  color: design.colors.accent.orange,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: design.spacing.xl,
                  fontWeight: design.typography.weights.medium,
                  transition: design.transitions.fast
                }}
              >
                ← {currentModuleInfo?.title}
              </button>

            </div>

            {renderLessonContent()}

            {/* Navigation */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: design.spacing['4xl'],
              paddingTop: design.spacing.xl,
              borderTop: `1px solid ${design.colors.surface.grayDark}`
            }}>
              <button
                onClick={() => {
                  const currentIndex = currentModuleLessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex > 0) {
                    setActiveLesson(currentModuleLessons[currentIndex - 1].id);
                  }
                }}
                disabled={currentModuleLessons.findIndex(l => l.id === activeLesson) === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: design.typography.fontFamily,
                  fontSize: design.typography.sizes.sm,
                  fontWeight: design.typography.weights.medium,
                  color: currentModuleLessons.findIndex(l => l.id === activeLesson) === 0 ? design.colors.surface.grayDark : design.colors.accent.orange,
                  cursor: currentModuleLessons.findIndex(l => l.id === activeLesson) === 0 ? 'default' : 'pointer',
                  padding: `${design.spacing.sm} 0`,
                  transition: design.transitions.fast
                }}
              >
                ← Previous
              </button>

              <button
                onClick={() => {
                  markLessonComplete(activeModule, activeLesson);
                  // Auto-advance to next lesson
                  const currentIndex = currentModuleLessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex < currentModuleLessons.length - 1) {
                    setActiveLesson(currentModuleLessons[currentIndex + 1].id);
                  }
                }}
                style={{
                  background: isLessonCompleted(activeModule, activeLesson) ? design.colors.semantic.success : design.colors.accent.orange,
                  border: 'none',
                  fontFamily: design.typography.fontFamily,
                  fontSize: design.typography.sizes.sm,
                  fontWeight: design.typography.weights.medium,
                  color: design.colors.surface.white,
                  cursor: 'pointer',
                  padding: `${design.spacing.sm} ${design.spacing.lg}`,
                  borderRadius: design.radius.sm,
                  display: 'flex',
                  alignItems: 'center',
                  gap: design.spacing.xs,
                  transition: design.transitions.fast,
                  boxShadow: design.shadows.sm
                }}
              >
                {isLessonCompleted(activeModule, activeLesson) ? 'Completed' : 'Mark Complete'}
              </button>

              <button
                onClick={() => {
                  const currentIndex = currentModuleLessons.findIndex(l => l.id === activeLesson);
                  if (currentIndex < currentModuleLessons.length - 1) {
                    setActiveLesson(currentModuleLessons[currentIndex + 1].id);
                  }
                }}
                disabled={currentModuleLessons.findIndex(l => l.id === activeLesson) === currentModuleLessons.length - 1}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: design.typography.fontFamily,
                  fontSize: design.typography.sizes.sm,
                  fontWeight: design.typography.weights.medium,
                  color: currentModuleLessons.findIndex(l => l.id === activeLesson) === currentModuleLessons.length - 1 ? design.colors.surface.grayDark : design.colors.accent.orange,
                  cursor: currentModuleLessons.findIndex(l => l.id === activeLesson) === currentModuleLessons.length - 1 ? 'default' : 'pointer',
                  padding: `${design.spacing.sm} 0`,
                  transition: design.transitions.fast
                }}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '32px 24px'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '14px', color: design.colors.text.primary, fontWeight: '500' }}>Perform</span>
            <span style={{ fontSize: '14px', color: design.colors.accent.orange, fontWeight: '600' }}>SAT</span>
          </div>
          <span style={{ fontSize: '13px', color: '#9ca3af' }}>© 2025</span>
        </div>
      </footer>

    </div>
          ) : (
            <Navigate to="/" replace />
          )
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default PerformSAT;
