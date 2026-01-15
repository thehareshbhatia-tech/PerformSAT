import React, { useState, useRef, useEffect } from 'react';
import { chatWithTutor } from '../services/aiTutorService';

// Comprehensive markdown renderer for chat messages with full math/LaTeX support
const renderMarkdown = (text) => {
  if (!text) return null;

  let cleanedText = text;

  // === LATEX CLEANUP - ORDER MATTERS! ===

  // First, handle \text{} commands - extract the text content
  cleanedText = cleanedText.replace(/\\text\{([^}]+)\}/g, '$1');
  cleanedText = cleanedText.replace(/\\textbf\{([^}]+)\}/g, '**$1**');
  cleanedText = cleanedText.replace(/\\textit\{([^}]+)\}/g, '*$1*');
  cleanedText = cleanedText.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  cleanedText = cleanedText.replace(/\\mathbf\{([^}]+)\}/g, '$1');

  // Handle fractions BEFORE removing delimiters (convert to special marker)
  // \frac{a}{b} -> ⟦FRAC:a:b⟧ (temporary marker)
  cleanedText = cleanedText.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '⟦FRAC:$1:$2⟧');

  // Remove display math delimiters: $$...$$ and \[...\]
  cleanedText = cleanedText.replace(/\$\$([^$]+)\$\$/g, '$1');
  cleanedText = cleanedText.replace(/\\\[([^\]]+)\\\]/g, '$1');
  // Remove inline math delimiters: $...$ and \(...\)
  cleanedText = cleanedText.replace(/\$([^$\n]+)\$/g, '$1');
  cleanedText = cleanedText.replace(/\\\(([^)]+)\\\)/g, '$1');

  // === LATEX COMMANDS TO READABLE FORMAT ===
  // Square root: \sqrt{x} -> √(x)
  cleanedText = cleanedText.replace(/\\sqrt\{([^}]+)\}/g, '√($1)');
  cleanedText = cleanedText.replace(/\\sqrt\[([^\]]+)\]\{([^}]+)\}/g, '$1√($2)');
  // Powers: x^{2} -> x^2, also handles x^2 directly
  cleanedText = cleanedText.replace(/\^\{([^}]+)\}/g, '^($1)');
  // Subscripts: x_{n} -> x_n
  cleanedText = cleanedText.replace(/_\{([^}]+)\}/g, '_($1)');
  // Common LaTeX symbols
  cleanedText = cleanedText.replace(/\\times/g, '×');
  cleanedText = cleanedText.replace(/\\cdot/g, '·');
  cleanedText = cleanedText.replace(/\\div/g, '÷');
  cleanedText = cleanedText.replace(/\\pm/g, '±');
  cleanedText = cleanedText.replace(/\\mp/g, '∓');
  cleanedText = cleanedText.replace(/\\leq/g, '≤');
  cleanedText = cleanedText.replace(/\\geq/g, '≥');
  cleanedText = cleanedText.replace(/\\neq/g, '≠');
  cleanedText = cleanedText.replace(/\\approx/g, '≈');
  cleanedText = cleanedText.replace(/\\equiv/g, '≡');
  cleanedText = cleanedText.replace(/\\sim/g, '∼');
  cleanedText = cleanedText.replace(/\\propto/g, '∝');
  cleanedText = cleanedText.replace(/\\infty/g, '∞');
  cleanedText = cleanedText.replace(/\\pi/g, 'π');
  cleanedText = cleanedText.replace(/\\theta/g, 'θ');
  cleanedText = cleanedText.replace(/\\alpha/g, 'α');
  cleanedText = cleanedText.replace(/\\beta/g, 'β');
  cleanedText = cleanedText.replace(/\\gamma/g, 'γ');
  cleanedText = cleanedText.replace(/\\delta/g, 'δ');
  cleanedText = cleanedText.replace(/\\Delta/g, 'Δ');
  cleanedText = cleanedText.replace(/\\sigma/g, 'σ');
  cleanedText = cleanedText.replace(/\\Sigma/g, 'Σ');
  cleanedText = cleanedText.replace(/\\mu/g, 'μ');
  cleanedText = cleanedText.replace(/\\lambda/g, 'λ');
  cleanedText = cleanedText.replace(/\\phi/g, 'φ');
  cleanedText = cleanedText.replace(/\\omega/g, 'ω');
  cleanedText = cleanedText.replace(/\\Omega/g, 'Ω');
  // Trig functions - remove backslash
  cleanedText = cleanedText.replace(/\\(sin|cos|tan|cot|sec|csc|arcsin|arccos|arctan|log|ln|exp)/g, '$1');
  // Left/right delimiters
  cleanedText = cleanedText.replace(/\\left/g, '');
  cleanedText = cleanedText.replace(/\\right/g, '');
  // Remove remaining backslashes from LaTeX commands (cleanup)
  cleanedText = cleanedText.replace(/\\([a-zA-Z]+)/g, '$1');
  // Remove empty braces
  cleanedText = cleanedText.replace(/\{\}/g, '');
  // Clean up standalone braces used in LaTeX
  cleanedText = cleanedText.replace(/\{([^{}]+)\}/g, '$1');

  const lines = cleanedText.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;

  const processMath = (str) => {
    let processed = str;

    // Process fraction markers (⟦FRAC:num:denom⟧) into stacked fractions
    processed = processed.replace(/⟦FRAC:([^:]+):([^⟧]+)⟧/g,
      '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px;line-height:1.1;"><span style="border-bottom:1px solid currentColor;padding:1px 4px;font-size:0.9em;">$1</span><span style="padding:1px 4px;font-size:0.9em;">$2</span></span>');

    // Process simple fractions like 1/2, 3/4 (only simple numeric ones)
    processed = processed.replace(/(?<![a-zA-Z\d\/])(\d+)\/(\d+)(?![a-zA-Z\d\/])/g,
      '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.1;"><span style="border-bottom:1px solid currentColor;padding:1px 3px;font-size:0.85em;">$1</span><span style="padding:1px 3px;font-size:0.85em;">$2</span></span>');

    // Process exponents with parentheses containing content
    processed = processed.replace(/\^\(([^)]+)\)/g, '<sup style="font-size:0.75em;vertical-align:super;">$1</sup>');

    // Process simple numeric exponents (x^2, x^12, etc.)
    processed = processed.replace(/\^(\d+)/g, (match, num) => {
      const superscripts = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
      return num.split('').map(d => superscripts[d] || d).join('');
    });
    // Process letter exponents (x^n, x^a, etc.)
    processed = processed.replace(/\^([a-zA-Z])/g, '<sup style="font-size:0.75em;vertical-align:super;">$1</sup>');

    // Process subscripts with parentheses
    processed = processed.replace(/_\(([^)]+)\)/g, '<sub style="font-size:0.75em;vertical-align:sub;">$1</sub>');
    // Process simple numeric subscripts
    processed = processed.replace(/_(\d+)/g, (match, num) => {
      const subscripts = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
      return num.split('').map(d => subscripts[d] || d).join('');
    });
    // Process letter subscripts
    processed = processed.replace(/_([a-zA-Z])(?![a-zA-Z])/g, '<sub style="font-size:0.75em;vertical-align:sub;">$1</sub>');

    // Process square root (already converted from \sqrt{})
    processed = processed.replace(/sqrt\(([^)]+)\)/gi, '√($1)');

    // Convert remaining math symbols
    processed = processed.replace(/(\d)\s*\*\s*(\d)/g, '$1 × $2');
    processed = processed.replace(/<=/g, '≤');
    processed = processed.replace(/>=/g, '≥');
    processed = processed.replace(/!=/g, '≠');
    processed = processed.replace(/\+-/g, '±');
    processed = processed.replace(/\bpi\b/gi, 'π');
    processed = processed.replace(/\binfinity\b/gi, '∞');

    return processed;
  };

  const processInlineMarkdown = (line) => {
    // Bold: **text** or __text__
    let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
    // Italic: *text* (but not **)
    processed = processed.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    // Inline code: `code`
    processed = processed.replace(/`([^`]+?)`/g, '<code style="background:rgba(0,0,0,0.04);padding:2px 6px;border-radius:4px;font-size:0.9em;font-family:\'SF Mono\',Menlo,monospace;">$1</code>');
    // Process math notation
    processed = processMath(processed);
    return processed;
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={`list-${elements.length}`} style={{ margin: '12px 0', paddingLeft: '24px', lineHeight: '1.7' }}>
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: '6px' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
          ))}
        </Tag>
      );
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, idx) => {
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(numberedMatch[2]);
      return;
    }

    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(bulletMatch[1]);
      return;
    }

    flushList();

    if (line.trim() === '') {
      elements.push(<div key={`br-${idx}`} style={{ height: '12px' }} />);
      return;
    }

    const headerMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const text = headerMatch[2];
      const sizes = { 1: '1.25em', 2: '1.15em', 3: '1.05em', 4: '1em' };
      const weights = { 1: '600', 2: '600', 3: '600', 4: '600' };
      elements.push(
        <div
          key={idx}
          style={{
            fontSize: sizes[level],
            fontWeight: weights[level],
            margin: '20px 0 10px 0',
            color: '#1d1d1f',
            letterSpacing: '-0.01em'
          }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
      return;
    }

    if (line.match(/^-{3,}$/)) {
      elements.push(
        <hr key={idx} style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '16px 0' }} />
      );
      return;
    }

    elements.push(
      <p key={idx} style={{ margin: '0 0 10px 0', lineHeight: '1.65' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }} />
    );
  });

  flushList();

  return <>{elements}</>;
};

// Apple-inspired design system
const design = {
  colors: {
    text: {
      primary: '#1d1d1f',
      secondary: '#6e6e73',
      tertiary: '#86868b',
    },
    accent: {
      primary: '#0071e3',
      orange: '#ea580c',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#f5f5f7',
      tertiary: '#fbfbfd',
    },
    border: {
      light: 'rgba(0,0,0,0.06)',
      medium: 'rgba(0,0,0,0.1)',
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
  },
  shadow: {
    small: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
    medium: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
    large: '0 8px 28px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.04)',
  }
};

const AiTutorChat = ({ isOpen, onClose, moduleId, lessonId, lessonTitle, isVideoLesson, videoTranscript, videoTimestamp }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        chatContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const videoContext = isVideoLesson && videoTranscript ? {
        transcript: videoTranscript,
        currentTime: videoTimestamp
      } : null;

      const response = await chatWithTutor(
        newMessages,
        moduleId,
        lessonId,
        null,
        videoContext
      );
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: `I encountered an issue. Please try again.`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={chatContainerRef}
      style={{
        marginTop: '20px',
        borderRadius: '20px',
        background: design.colors.surface.primary,
        boxShadow: design.shadow.large,
        overflow: 'hidden',
        fontFamily: design.typography.fontFamily,
        animation: 'chatSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        border: `1px solid ${design.colors.border.light}`,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '18px 24px',
          background: design.colors.surface.primary,
          borderBottom: `1px solid ${design.colors.border.light}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{
            fontSize: '17px',
            fontWeight: '600',
            color: design.colors.text.primary,
            letterSpacing: '-0.02em'
          }}>
            Perform
          </span>
          {isVideoLesson && videoTranscript && (
            <span style={{
              background: 'rgba(52, 199, 89, 0.12)',
              color: '#248a3d',
              padding: '5px 12px',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.01em'
            }}>
              Watching with you
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          style={{
            background: design.colors.surface.secondary,
            border: 'none',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: design.colors.text.secondary,
            fontSize: '16px',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = design.colors.border.medium;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = design.colors.surface.secondary;
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div
        style={{
          height: '380px',
          overflowY: 'auto',
          padding: '24px',
          background: design.colors.surface.tertiary,
        }}
      >
        {messages.length === 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '32px',
              marginBottom: '16px',
              opacity: 0.15
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div style={{
              fontSize: '17px',
              fontWeight: '600',
              color: design.colors.text.primary,
              marginBottom: '6px',
              letterSpacing: '-0.02em'
            }}>
              {isVideoLesson && videoTranscript
                ? "Ask about any step"
                : "How can I help?"
              }
            </div>
            <div style={{
              fontSize: '14px',
              color: design.colors.text.tertiary,
              marginBottom: '28px',
              textAlign: 'center',
              maxWidth: '280px',
              lineHeight: '1.5'
            }}>
              {isVideoLesson && videoTranscript
                ? "I can see what's happening in the video and explain it."
                : "Ask me anything about this lesson."
              }
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              maxWidth: '340px'
            }}>
              {(isVideoLesson ? [
                "Explain this step",
                "Why did he do that?",
                "What formula is this?"
              ] : [
                "Why this formula?",
                "Explain again",
                "Common mistakes?"
              ]).map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setInput(suggestion)}
                  style={{
                    padding: '10px 18px',
                    background: design.colors.surface.primary,
                    border: `1px solid ${design.colors.border.medium}`,
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: design.colors.text.secondary,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: design.typography.fontFamily,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = design.colors.surface.secondary;
                    e.currentTarget.style.borderColor = design.colors.border.medium;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = design.colors.surface.primary;
                    e.currentTarget.style.borderColor = design.colors.border.medium;
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '16px',
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '88%',
                    padding: msg.role === 'user' ? '12px 18px' : '16px 20px',
                    borderRadius: msg.role === 'user' ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
                    background: msg.role === 'user'
                      ? design.colors.accent.orange
                      : design.colors.surface.primary,
                    color: msg.role === 'user' ? 'white' : design.colors.text.primary,
                    fontSize: '15px',
                    lineHeight: '1.6',
                    boxShadow: msg.role === 'user'
                      ? 'none'
                      : design.shadow.small,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
                <div
                  style={{
                    padding: '16px 20px',
                    borderRadius: '20px 20px 20px 6px',
                    background: design.colors.surface.primary,
                    boxShadow: design.shadow.small,
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: design.colors.text.tertiary,
                          animation: `typingPulse 1.4s ease-in-out ${i * 0.15}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div
        style={{
          padding: '16px 20px',
          background: design.colors.surface.primary,
          borderTop: `1px solid ${design.colors.border.light}`,
        }}
      >
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end'
        }}>
          <div style={{
            flex: 1,
            position: 'relative',
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message..."
              rows={1}
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '24px',
                border: `1px solid ${design.colors.border.medium}`,
                fontSize: '15px',
                fontFamily: design.typography.fontFamily,
                resize: 'none',
                outline: 'none',
                maxHeight: '120px',
                lineHeight: '1.5',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                background: design.colors.surface.secondary,
                color: design.colors.text.primary,
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = design.colors.accent.orange;
                e.target.style.boxShadow = `0 0 0 3px rgba(234, 88, 12, 0.1)`;
                e.target.style.background = design.colors.surface.primary;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = design.colors.border.medium;
                e.target.style.boxShadow = 'none';
                e.target.style.background = design.colors.surface.secondary;
              }}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: 'none',
              background: input.trim() && !isLoading
                ? design.colors.accent.orange
                : design.colors.surface.secondary,
              cursor: input.trim() && !isLoading ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseOver={(e) => {
              if (input.trim() && !isLoading) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              style={{
                transform: 'rotate(-45deg)',
                marginLeft: '2px',
              }}
            >
              <path
                d="M22 2L11 13"
                stroke={input.trim() && !isLoading ? 'white' : design.colors.text.tertiary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke={input.trim() && !isLoading ? 'white' : design.colors.text.tertiary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes typingPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes chatSlideIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

// Ask Perform Button Component - Apple-inspired
export const AiTutorButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      style={{
        height: '52px',
        borderRadius: '26px',
        background: isOpen
          ? design.colors.text.primary
          : design.colors.accent.orange,
        border: 'none',
        boxShadow: isOpen
          ? design.shadow.medium
          : '0 4px 14px rgba(234, 88, 12, 0.35)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        fontFamily: design.typography.fontFamily,
      }}
      onMouseOver={(e) => {
        if (!isOpen) {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(234, 88, 12, 0.45)';
        } else {
          e.currentTarget.style.transform = 'scale(1.02)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isOpen
          ? design.shadow.medium
          : '0 4px 14px rgba(234, 88, 12, 0.35)';
      }}
    >
      <span style={{
        color: 'white',
        fontWeight: '600',
        fontSize: '16px',
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap'
      }}>
        {isOpen ? 'Close' : 'Ask Perform'}
      </span>
    </button>
  );
};

export default AiTutorChat;
