// Dev-only diagram preview. Mounts when the URL hash starts with `#__diag=`.
// Lets us iterate on question diagrams in isolation without going through
// the drill flow. Activated entirely client-side; never affects production
// paths because the hash check only fires on demand.
//
// Usage:
//   open http://localhost:3000/#__diag=bank-alg-203,bank-alg-204,bank-alg-207
//   open http://localhost:3000/#__diag=ALL_SCATTER     (every item that mentions 'scatter' in stem)
import React from 'react';
import QuestionDiagram from './QuestionDiagrams';
import QuestionRenderer from './QuestionRenderer';
import { getQuestionById, questionBank } from '../data/questions/bank';

const cardStyle = {
  border: '1px solid #d4d4d4',
  borderRadius: 8,
  background: '#ffffff',
  padding: 24,
  marginBottom: 24,
  maxWidth: 800,
  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
};

const labelStyle = {
  fontFamily: 'monospace',
  fontSize: 12,
  color: '#6b7280',
  marginBottom: 12,
};

const choicesStyle = {
  display: 'grid',
  gap: 8,
  marginTop: 16,
};

const choiceRow = (isCorrect) => ({
  border: isCorrect ? '2px solid #16a34a' : '1px solid #e5e7eb',
  borderRadius: 6,
  padding: '10px 14px',
  display: 'flex',
  gap: 12,
  alignItems: 'flex-start',
  background: isCorrect ? '#f0fdf4' : '#fafafa',
});

const choiceLetter = {
  fontWeight: 600,
  fontFamily: 'serif',
  minWidth: 18,
};

const resolveIds = (raw) => {
  if (!raw) return [];
  if (raw === 'ALL_SCATTER') {
    return questionBank
      .filter((q) => /scatter\s*plot|scatterplot/i.test(typeof q.question === 'string' ? q.question : ''))
      .map((q) => q.id);
  }
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
};

const DiagramPreviewCard = ({ id }) => {
  const q = getQuestionById(id);
  if (!q) {
    return (
      <div style={{ ...cardStyle, borderColor: '#fca5a5', background: '#fef2f2' }}>
        <div style={labelStyle}>missing</div>
        <div>No bank item found for id <code>{id}</code></div>
      </div>
    );
  }
  return (
    <div style={cardStyle} data-question-id={q.id} id={`q-${q.id}`}>
      <div style={labelStyle}>
        {q.id} · {q.domain} · {q.difficulty} · {q.type}
        {q.diagram ? ` · diagram=${q.diagram.type}` : ' · no diagram'}
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.55, marginBottom: 16 }}>
        <QuestionRenderer content={q.question} />
      </div>
      {q.diagram && (
        <div style={{ margin: '16px 0', display: 'flex', justifyContent: 'center' }}>
          <QuestionDiagram type={q.diagram.type} params={q.diagram.params} />
        </div>
      )}
      {Array.isArray(q.choices) && q.choices.length > 0 && (
        <div style={choicesStyle}>
          {q.choices.map((c) => {
            const isCorrect = c.id === q.correctAnswer;
            const text = typeof c.text === 'string' ? c.text : JSON.stringify(c.text);
            return (
              <div key={c.id} style={choiceRow(isCorrect)}>
                <span style={choiceLetter}>{c.id}.</span>
                <QuestionRenderer content={text} />
                {isCorrect && <span style={{ marginLeft: 'auto', color: '#16a34a', fontSize: 12 }}>correct</span>}
              </div>
            );
          })}
        </div>
      )}
      {q.type === 'fill-in' && (
        <div style={{ ...choiceRow(true), marginTop: 16 }}>
          <span style={choiceLetter}>=</span>
          <span>Fill-in answer: <code>{q.correctAnswer}</code></span>
        </div>
      )}
    </div>
  );
};

const DiagramPreview = () => {
  const raw = (window.location.hash || '').replace(/^#__diag=/, '');
  const ids = resolveIds(decodeURIComponent(raw));
  return (
    <div style={{ padding: 32, background: '#f5f5f5', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ fontSize: 20, marginBottom: 4 }}>Diagram preview ({ids.length} item{ids.length === 1 ? '' : 's'})</h1>
      <p style={{ color: '#6b7280', fontSize: 13, marginBottom: 24 }}>
        Dev-only. Edit the hash to load other items, e.g. <code>#__diag=bank-alg-301,bank-alg-302</code> or <code>#__diag=ALL_SCATTER</code>.
      </p>
      {ids.map((id) => (
        <DiagramPreviewCard key={id} id={id} />
      ))}
      {ids.length === 0 && (
        <div style={{ color: '#991b1b' }}>No ids in hash. Try <code>#__diag=bank-alg-203</code>.</div>
      )}
    </div>
  );
};

export default DiagramPreview;
