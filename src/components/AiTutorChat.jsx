import React, { useState, useRef, useEffect } from 'react';
import { chatWithTutor } from '../services/aiTutorService';

// Simple markdown renderer for chat messages with math support
const renderMarkdown = (text) => {
  if (!text) return null;

  // Split into lines for processing
  const lines = text.split('\n');
  const elements = [];
  let currentList = [];
  let listType = null;

  const processMath = (str) => {
    let processed = str;

    // Process exponents with parentheses containing fractions: ^(7/3) - keep fraction as text in superscript
    processed = processed.replace(/\^[\(\{]([^\)\}]+)[\)\}]/g, '<sup style="font-size:0.75em;vertical-align:super;">$1</sup>');

    // Process simple exponents: ^2, ^7, ^n (single character or number)
    processed = processed.replace(/\^(\d+)/g, (match, num) => {
      const superscripts = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
      return num.split('').map(d => superscripts[d] || d).join('');
    });
    processed = processed.replace(/\^([a-zA-Z])/g, '<sup style="font-size:0.75em;vertical-align:super;">$1</sup>');

    // Process subscripts with parentheses: _(n+1), etc.
    processed = processed.replace(/_[\(\{]([^\)\}]+)[\)\}]/g, '<sub style="font-size:0.75em;vertical-align:sub;">$1</sub>');

    // Process simple subscripts: _1, _2, _n
    processed = processed.replace(/_(\d+)/g, (match, num) => {
      const subscripts = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉' };
      return num.split('').map(d => subscripts[d] || d).join('');
    });

    // Process square root: sqrt(x) → √(x)
    processed = processed.replace(/sqrt\(([^)]+)\)/gi, '√($1)');

    // Process standalone fractions: 7/3, 1/2, etc. (not inside sup tags already)
    // Only match fractions that are standalone (surrounded by spaces or at word boundaries)
    processed = processed.replace(/(?<!<sup[^>]*>.*?)(?<![a-zA-Z\d])(\d+)\/(\d+)(?![a-zA-Z\d])/g,
      '<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1;"><span style="border-bottom:1px solid currentColor;padding:0 3px;font-size:0.85em;">$1</span><span style="padding:0 3px;font-size:0.85em;">$2</span></span>');

    // Convert common math symbols
    processed = processed.replace(/(\d)\s*\*\s*(\d)/g, '$1 × $2'); // 3 * 4 → 3 × 4
    processed = processed.replace(/<=/g, '≤');
    processed = processed.replace(/>=/g, '≥');
    processed = processed.replace(/!=/g, '≠');
    processed = processed.replace(/\+-/g, '±');
    processed = processed.replace(/\bpi\b/gi, 'π');
    processed = processed.replace(/\binfinity\b/gi, '∞');

    return processed;
  };

  const processInlineMarkdown = (line) => {
    // Process bold (**text** or __text__) - do this BEFORE math processing
    let processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');
    // Process italic (*text*) - single asterisks, but not math multiplication
    processed = processed.replace(/(?<![a-zA-Z0-9])\*([^*\s][^*]*[^*\s])\*(?![a-zA-Z0-9])/g, '<em>$1</em>');
    // Process inline code
    processed = processed.replace(/`([^`]+?)`/g, '<code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:13px;font-family:monospace;">$1</code>');
    // Process math (exponents, subscripts, symbols)
    processed = processMath(processed);
    return processed;
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const Tag = listType === 'ol' ? 'ol' : 'ul';
      elements.push(
        <Tag key={`list-${elements.length}`} style={{ margin: '8px 0', paddingLeft: '20px' }}>
          {currentList.map((item, i) => (
            <li key={i} style={{ marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
          ))}
        </Tag>
      );
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, idx) => {
    // Check for numbered list (1. item)
    const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (numberedMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol';
      currentList.push(numberedMatch[2]);
      return;
    }

    // Check for bullet list (- item or * item)
    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul';
      currentList.push(bulletMatch[1]);
      return;
    }

    // Not a list item, flush any pending list
    flushList();

    // Empty line
    if (line.trim() === '') {
      elements.push(<div key={`br-${idx}`} style={{ height: '8px' }} />);
      return;
    }

    // Check for headers (# to ####)
    const headerMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headerMatch) {
      const level = headerMatch[1].length;
      const text = headerMatch[2];
      const sizes = { 1: '1.5em', 2: '1.3em', 3: '1.1em', 4: '1em' };
      const weights = { 1: '700', 2: '700', 3: '600', 4: '600' };
      elements.push(
        <div
          key={idx}
          style={{
            fontSize: sizes[level],
            fontWeight: weights[level],
            margin: level <= 2 ? '16px 0 8px 0' : '12px 0 6px 0',
            color: '#0a0a0a'
          }}
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(text) }}
        />
      );
      return;
    }

    // Check for horizontal rule (---)
    if (line.match(/^-{3,}$/)) {
      elements.push(
        <hr key={idx} style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '12px 0' }} />
      );
      return;
    }

    // Regular paragraph
    elements.push(
      <p key={idx} style={{ margin: '0 0 8px 0' }} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }} />
    );
  });

  // Flush any remaining list
  flushList();

  return <>{elements}</>;
};

// Premium design tokens (matching App.jsx)
const design = {
  colors: {
    text: {
      primary: '#0a0a0a',
      secondary: '#525252',
      muted: '#a3a3a3',
    },
    accent: {
      orange: '#ea580c',
      orangeHover: '#c2410c',
      orangeLight: '#fff7ed',
    },
    surface: {
      white: '#ffffff',
      offWhite: '#fafafa',
      gray: '#f5f5f5',
      dark: '#171717',
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  }
};

const AiTutorChat = ({ isOpen, onClose, moduleId, lessonId, lessonTitle, isVideoLesson, videoTranscript, videoTimestamp }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input and scroll chat into view when panel opens
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
      // Build video context if available
      const videoContext = isVideoLesson && videoTranscript ? {
        transcript: videoTranscript,
        currentTime: videoTimestamp
      } : null;

      const response = await chatWithTutor(
        newMessages,
        moduleId,
        lessonId,
        null, // API key no longer needed - handled by Cloud Function
        videoContext
      );
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${error.message}. Please try again.`
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
        marginTop: '24px',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        background: design.colors.surface.white,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        fontFamily: design.typography.fontFamily,
        animation: 'slideDown 0.3s ease-out'
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e5e7eb',
          background: design.colors.surface.dark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontSize: '16px',
            fontWeight: '600',
            color: design.colors.surface.white
          }}>
            Ask Perform
          </span>
          {isVideoLesson && videoTranscript && (
            <span style={{
              background: 'rgba(234, 88, 12, 0.3)',
              color: '#f97316',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              Video synced
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: design.colors.surface.white,
            fontSize: '18px',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          ×
        </button>
      </div>

      {/* Messages Area */}
      <div
        style={{
          height: '320px',
          overflowY: 'auto',
          padding: '20px',
          background: design.colors.surface.offWhite
        }}
      >
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div style={{
              fontSize: '15px',
              fontWeight: '500',
              color: design.colors.text.primary,
              marginBottom: '8px'
            }}>
              {isVideoLesson && videoTranscript
                ? "I'm watching the video with you!"
                : "How can I help?"
              }
            </div>
            <div style={{
              fontSize: '14px',
              color: design.colors.text.secondary,
              marginBottom: '20px'
            }}>
              {isVideoLesson && videoTranscript
                ? "Ask about any step and I'll explain it."
                : "Ask me anything about this lesson."
              }
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center'
            }}>
              {(isVideoLesson ? [
                "Why did he do that?",
                "Explain this step",
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
                    padding: '8px 14px',
                    background: design.colors.surface.white,
                    border: '1px solid #e5e7eb',
                    borderRadius: '20px',
                    fontSize: '13px',
                    color: design.colors.text.secondary,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = design.colors.accent.orange;
                    e.target.style.color = design.colors.accent.orange;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.color = design.colors.text.secondary;
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
                  marginBottom: '12px',
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #ea580c, #f97316)'
                      : design.colors.surface.white,
                    color: msg.role === 'user' ? 'white' : design.colors.text.primary,
                    fontSize: '14px',
                    lineHeight: '1.6',
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  {msg.role === 'assistant' ? renderMarkdown(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '16px 16px 16px 4px',
                    background: design.colors.surface.white,
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: design.colors.accent.orange,
                          opacity: 0.6,
                          animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`
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
          padding: '14px 16px',
          borderTop: '1px solid #e5e7eb',
          background: design.colors.surface.white
        }}
      >
        <div style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-end'
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question..."
            rows={1}
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              fontSize: '14px',
              fontFamily: design.typography.fontFamily,
              resize: 'none',
              outline: 'none',
              maxHeight: '100px',
              lineHeight: '1.5',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = design.colors.accent.orange}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border: 'none',
              background: input.trim() && !isLoading
                ? 'linear-gradient(135deg, #ea580c, #f97316)'
                : '#e5e7eb',
              cursor: input.trim() && !isLoading ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              flexShrink: 0
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={input.trim() && !isLoading ? 'white' : '#9ca3af'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// Ask Perform Button Component
export const AiTutorButton = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      style={{
        height: '48px',
        borderRadius: '24px',
        background: isOpen
          ? design.colors.surface.dark
          : 'linear-gradient(135deg, #ea580c, #f97316)',
        border: 'none',
        boxShadow: isOpen
          ? '0 4px 12px rgba(0, 0, 0, 0.15)'
          : '0 8px 24px rgba(234, 88, 12, 0.4)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 28px',
        transition: 'all 0.2s ease',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}
      onMouseOver={(e) => {
        if (!isOpen) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(234, 88, 12, 0.5)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isOpen
          ? '0 4px 12px rgba(0, 0, 0, 0.15)'
          : '0 8px 24px rgba(234, 88, 12, 0.4)';
      }}
    >
      <span style={{
        color: 'white',
        fontWeight: '600',
        fontSize: '15px',
        whiteSpace: 'nowrap'
      }}>
        {isOpen ? 'Close' : 'Ask Perform'}
      </span>
    </button>
  );
};

export default AiTutorChat;
