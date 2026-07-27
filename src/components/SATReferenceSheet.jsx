import React, { useState, useRef, useEffect } from 'react';
import { MathText } from './MathText';

// Bluebook parity: on desktop the reference sheet is a FLOATING, DRAGGABLE
// panel with no backdrop — the student keeps it open beside the question and
// keeps working (the old centered modal + blurred backdrop blocked the page).
// Mobile keeps the near-full-screen sheet with a tap-to-dismiss backdrop.
const SHEET_WIDTH = 720;

const SATReferenceSheet = ({ isOpen, onClose }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const [position, setPosition] = useState(() => ({
    x: typeof window !== 'undefined' ? Math.max(12, (window.innerWidth - SHEET_WIDTH) / 2) : 80,
    y: 64,
  }));
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    if (isMobile) return;
    if (e.target.tagName === 'BUTTON') return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragOffsetRef.current = { x: clientX - position.x, y: clientY - position.y };
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return undefined;
    const getClientPos = (e) => (e.touches
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: e.clientX, y: e.clientY });
    const handleMove = (e) => {
      const pos = getClientPos(e);
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - 80, pos.x - dragOffsetRef.current.x)),
        y: Math.max(0, Math.min(window.innerHeight - 50, pos.y - dragOffsetRef.current.y)),
      });
    };
    const handleEnd = () => setIsDragging(false);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove, { passive: true });
    document.addEventListener('touchend', handleEnd);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop — mobile only; desktop floats over the live question */}
      {isMobile && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 998,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        />
      )}
      {/* Panel */}
      <div style={{
        position: 'fixed',
        top: isMobile ? '5%' : position.y,
        left: isMobile ? '3%' : position.x,
        width: isMobile ? '94%' : `${SHEET_WIDTH}px`,
        maxHeight: isMobile ? '90vh' : '80vh',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 24px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.08)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        userSelect: isDragging ? 'none' : undefined,
      }}>
        {/* Header — drag handle on desktop */}
        <div
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#f8f8fa',
            flexShrink: 0,
            cursor: isMobile ? 'default' : (isDragging ? 'grabbing' : 'grab'),
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: '15px', color: '#1d1d1f', letterSpacing: '-0.01em' }}>
              SAT Math Reference Sheet
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '8px',
              width: '32px', height: '32px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', color: '#666',
            }}
            aria-label="Close reference sheet"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          fontSize: '14px',
          lineHeight: '1.8',
          color: '#1d1d1f',
        }}>
          {/* Geometry Formulas */}
          <Section title="Geometry" isMobile={isMobile}>
            <FormulaCard label="Area of a circle" diagram={<CircleDiagram />} formula="$A = \pi r^2$" />
            <FormulaCard label="Circumference of a circle" diagram={<CircleDiagram />} formula="$C = 2\pi r$" />
            <FormulaCard label="Area of a rectangle" diagram={<RectangleDiagram />} formula="$A = \ell w$" />
            <FormulaCard label="Area of a triangle" diagram={<TriangleDiagram />} formula="$A = \tfrac{1}{2}bh$" />
            <FormulaCard label="Pythagorean theorem" diagram={<RightTriangleDiagram />} formula="$a^2 + b^2 = c^2$" />
          </Section>

          {/* Volume Formulas */}
          <Section title="Volume" isMobile={isMobile}>
            <FormulaCard label="Rectangular prism" diagram={<PrismDiagram />} formula="$V = \ell wh$" />
            <FormulaCard label="Cylinder" diagram={<CylinderDiagram />} formula="$V = \pi r^2 h$" />
            <FormulaCard label="Sphere" diagram={<SphereDiagram />} formula="$V = \tfrac{4}{3}\pi r^3$" />
            <FormulaCard label="Cone" diagram={<ConeDiagram />} formula="$V = \tfrac{1}{3}\pi r^2 h$" />
            <FormulaCard label="Pyramid" diagram={<PyramidDiagram />} formula="$V = \tfrac{1}{3}\ell wh$" />
          </Section>

          {/* Special Right Triangles */}
          <Section title="Special Right Triangles" isMobile={isMobile}>
            <FormulaCard label="45°–45°–90°" diagram={<Triangle454590 />} formula="sides: $x,\; x,\; x\sqrt{2}$" />
            <FormulaCard label="30°–60°–90°" diagram={<Triangle306090 />} formula="sides: $x,\; x\sqrt{3},\; 2x$" />
          </Section>

          {/* Key Facts */}
          <div style={{ marginBottom: '8px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', marginBottom: '16px' }}>
              Key Facts
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
              <FactRow text="The number of degrees of arc in a circle is $360$." />
              <FactRow text="The number of radians of arc in a circle is $2\pi$." />
              <FactRow text="The sum of the measures in degrees of the angles of a triangle is $180$." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ title, children, isMobile }) => (
  <div style={{ marginBottom: '28px' }}>
    <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', marginBottom: '16px' }}>
      {title}
    </h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: '12px',
    }}>
      {children}
    </div>
  </div>
);

const FormulaCard = ({ label, diagram, formula }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    padding: '14px 10px',
    background: '#f5f5f7',
    borderRadius: '10px',
    minHeight: '180px',
  }}>
    <div style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '90px',
    }}>
      {diagram}
    </div>
    <div style={{ fontFamily: 'KaTeX_Main, serif', fontSize: '14px', textAlign: 'center' }}>
      <MathText text={formula} />
    </div>
    <div style={{ fontSize: '11px', color: '#6e6e73', textAlign: 'center', letterSpacing: '-0.01em' }}>
      {label}
    </div>
  </div>
);

const FactRow = ({ text }) => (
  <div style={{
    padding: '8px 12px',
    background: '#f5f5f7',
    borderRadius: '8px',
    fontSize: '13px',
  }}>
    <MathText text={text} />
  </div>
);

/* ---------- Diagrams ---------- */

const STROKE = '#1d1d1f';
const SHADE = 'rgba(0,0,0,0.06)';
const LABEL_STYLE = {
  fontFamily: 'KaTeX_Math, "Times New Roman", serif',
  fontStyle: 'italic',
  fontSize: '13px',
  fill: '#1d1d1f',
};

const svgProps = {
  width: 150,
  height: 100,
  viewBox: '0 0 150 100',
};

// Centered text helper for clean middle alignment
const labelCenter = { textAnchor: 'middle' };
const labelLeft = { textAnchor: 'end' };

const CircleDiagram = () => (
  <svg {...svgProps}>
    <circle cx="75" cy="50" r="30" fill="none" stroke={STROKE} strokeWidth="1.5" />
    <line x1="75" y1="50" x2="105" y2="50" stroke={STROKE} strokeWidth="1.2" />
    <circle cx="75" cy="50" r="1.6" fill={STROKE} />
    <text x="90" y="44" {...LABEL_STYLE} {...labelCenter}>r</text>
  </svg>
);

const RectangleDiagram = () => (
  <svg {...svgProps}>
    <rect x="30" y="28" width="90" height="44" fill="none" stroke={STROKE} strokeWidth="1.5" />
    <text x="75" y="88" {...LABEL_STYLE} {...labelCenter}>ℓ</text>
    <text x="130" y="54" {...LABEL_STYLE}>w</text>
  </svg>
);

const TriangleDiagram = () => (
  <svg {...svgProps}>
    <polygon points="20,82 130,82 75,16" fill="none" stroke={STROKE} strokeWidth="1.5" />
    <line x1="75" y1="16" x2="75" y2="82" stroke={STROKE} strokeWidth="1" strokeDasharray="3,2" />
    <path d="M 75 76 L 69 76 L 69 82" fill="none" stroke={STROKE} strokeWidth="0.8" />
    <text x="75" y="96" {...LABEL_STYLE} {...labelCenter}>b</text>
    <text x="82" y="52" {...LABEL_STYLE}>h</text>
  </svg>
);

const RightTriangleDiagram = () => (
  <svg {...svgProps}>
    <polygon points="26,80 116,80 26,18" fill="none" stroke={STROKE} strokeWidth="1.5" />
    <path d="M 26 74 L 32 74 L 32 80" fill="none" stroke={STROKE} strokeWidth="0.8" />
    <text x="71" y="94" {...LABEL_STYLE} {...labelCenter}>b</text>
    <text x="18" y="52" {...LABEL_STYLE} {...labelLeft}>a</text>
    <text x="78" y="44" {...LABEL_STYLE}>c</text>
  </svg>
);

const PrismDiagram = () => (
  <svg {...svgProps}>
    {/* front face */}
    <rect x="22" y="32" width="64" height="48" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* top face */}
    <polygon points="22,32 42,16 106,16 86,32" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* right face */}
    <polygon points="86,32 106,16 106,64 86,80" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* labels */}
    <text x="54" y="94" {...LABEL_STYLE} {...labelCenter}>ℓ</text>
    <text x="118" y="52" {...LABEL_STYLE}>h</text>
    <text x="74" y="11" {...LABEL_STYLE} {...labelCenter}>w</text>
  </svg>
);

const CylinderDiagram = () => (
  <svg {...svgProps}>
    {/* body sides */}
    <path d="M 49 24 L 49 78" stroke={STROKE} strokeWidth="1.5" fill="none" />
    <path d="M 101 24 L 101 78" stroke={STROKE} strokeWidth="1.5" fill="none" />
    {/* bottom ellipse */}
    <ellipse cx="75" cy="78" rx="26" ry="7" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* top ellipse */}
    <ellipse cx="75" cy="24" rx="26" ry="7" fill="#fff" stroke={STROKE} strokeWidth="1.5" />
    {/* radius line on top */}
    <line x1="75" y1="24" x2="101" y2="24" stroke={STROKE} strokeWidth="1" />
    <circle cx="75" cy="24" r="1.4" fill={STROKE} />
    <text x="88" y="20" {...LABEL_STYLE} {...labelCenter}>r</text>
    <text x="113" y="54" {...LABEL_STYLE}>h</text>
  </svg>
);

const SphereDiagram = () => (
  <svg {...svgProps}>
    <circle cx="75" cy="50" r="30" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* equator (dashed for 3D feel) */}
    <ellipse cx="75" cy="50" rx="30" ry="8" fill="none" stroke={STROKE} strokeWidth="1" strokeDasharray="3,2" />
    {/* radius line going UP from center to avoid the equator line */}
    <line x1="75" y1="50" x2="75" y2="20" stroke={STROKE} strokeWidth="1.2" />
    <circle cx="75" cy="50" r="1.6" fill={STROKE} />
    <text x="82" y="35" {...LABEL_STYLE}>r</text>
  </svg>
);

const ConeDiagram = () => (
  <svg {...svgProps}>
    {/* cone sides */}
    <path d="M 75 14 L 49 76 L 101 76 Z" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* base ellipse */}
    <ellipse cx="75" cy="76" rx="26" ry="7" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* height line (dashed) */}
    <line x1="75" y1="14" x2="75" y2="76" stroke={STROKE} strokeWidth="1" strokeDasharray="3,2" />
    {/* radius line */}
    <line x1="75" y1="76" x2="101" y2="76" stroke={STROKE} strokeWidth="1" />
    <text x="68" y="48" {...LABEL_STYLE} {...labelLeft}>h</text>
    <text x="88" y="94" {...LABEL_STYLE} {...labelCenter}>r</text>
  </svg>
);

const PyramidDiagram = () => (
  <svg {...svgProps}>
    {/* base (parallelogram) */}
    <polygon points="22,76 82,76 118,58 58,58" fill={SHADE} stroke={STROKE} strokeWidth="1.5" />
    {/* edges from apex to front base corners (solid) */}
    <line x1="75" y1="14" x2="22" y2="76" stroke={STROKE} strokeWidth="1.5" />
    <line x1="75" y1="14" x2="82" y2="76" stroke={STROKE} strokeWidth="1.5" />
    {/* edge to back-right base corner (solid, visible) */}
    <line x1="75" y1="14" x2="118" y2="58" stroke={STROKE} strokeWidth="1.5" />
    {/* altitude from apex to base centroid (dashed) */}
    <line x1="75" y1="14" x2="70" y2="67" stroke={STROKE} strokeWidth="1" strokeDasharray="3,2" />
    {/* labels */}
    <text x="52" y="92" {...LABEL_STYLE} {...labelCenter}>ℓ</text>
    <text x="108" y="76" {...LABEL_STYLE}>w</text>
    <text x="60" y="42" {...LABEL_STYLE} {...labelLeft}>h</text>
  </svg>
);

const Triangle454590 = () => (
  <svg {...svgProps}>
    {/* equal-leg right triangle */}
    <polygon points="30,82 90,82 30,22" fill="none" stroke={STROKE} strokeWidth="1.5" />
    <path d="M 30 76 L 36 76 L 36 82" fill="none" stroke={STROKE} strokeWidth="0.8" />
    {/* side labels — outside the triangle, no overlap */}
    <text x="60" y="96" {...LABEL_STYLE} {...labelCenter}>x</text>
    <text x="22" y="56" {...LABEL_STYLE} {...labelLeft}>x</text>
    <text x="72" y="46" {...LABEL_STYLE}>x√2</text>
  </svg>
);

const Triangle306090 = () => (
  <svg {...svgProps}>
    {/* 30-60-90: vertical leg shorter, horizontal leg ~√3× longer */}
    <polygon points="30,82 116,82 30,32" fill="none" stroke={STROKE} strokeWidth="1.5" />
    <path d="M 30 76 L 36 76 L 36 82" fill="none" stroke={STROKE} strokeWidth="0.8" />
    {/* side labels — outside the triangle */}
    <text x="73" y="96" {...LABEL_STYLE} {...labelCenter}>x√3</text>
    <text x="22" y="60" {...LABEL_STYLE} {...labelLeft}>x</text>
    <text x="84" y="50" {...LABEL_STYLE}>2x</text>
  </svg>
);

export default SATReferenceSheet;
