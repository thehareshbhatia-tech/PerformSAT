import React from 'react';
import { MathText } from './MathText';

const SATReferenceSheet = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      />
      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: isMobile ? '5%' : '50%',
        left: isMobile ? '3%' : '50%',
        transform: isMobile ? 'none' : 'translate(-50%, -50%)',
        width: isMobile ? '94%' : '680px',
        maxHeight: isMobile ? '90vh' : '85vh',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#f8f8fa',
          flexShrink: 0,
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
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', marginBottom: '16px' }}>
              Geometry
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px 24px' }}>
              <FormulaRow label="Area of a circle" formula="$A = \pi r^2$" />
              <FormulaRow label="Circumference of a circle" formula="$C = 2\pi r$" />
              <FormulaRow label="Area of a rectangle" formula="$A = \ell w$" />
              <FormulaRow label="Area of a triangle" formula="$A = \frac{1}{2}bh$" />
              <FormulaRow label="Pythagorean theorem" formula="$a^2 + b^2 = c^2$" />
            </div>
          </div>

          {/* Volume Formulas */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', marginBottom: '16px' }}>
              Volume
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px 24px' }}>
              <FormulaRow label="Rectangular prism" formula="$V = \ell wh$" />
              <FormulaRow label="Cylinder" formula="$V = \pi r^2 h$" />
              <FormulaRow label="Sphere" formula="$V = \frac{4}{3}\pi r^3$" />
              <FormulaRow label="Cone" formula="$V = \frac{1}{3}\pi r^2 h$" />
              <FormulaRow label="Pyramid" formula="$V = \frac{1}{3}\ell wh$" />
            </div>
          </div>

          {/* Special Right Triangles */}
          <div style={{ marginBottom: '28px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6e6e73', marginBottom: '16px' }}>
              Special Right Triangles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '12px 24px' }}>
              <FormulaRow label="45-45-90 triangle" formula="$x,\; x,\; x\sqrt{2}$" />
              <FormulaRow label="30-60-90 triangle" formula="$x,\; x\sqrt{3},\; 2x$" />
            </div>
          </div>

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

const FormulaRow = ({ label, formula }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    background: '#f5f5f7',
    borderRadius: '8px',
    gap: '12px',
  }}>
    <span style={{ color: '#1d1d1f', fontSize: '13px', flexShrink: 0 }}>{label}</span>
    <span style={{ fontFamily: 'KaTeX_Main, serif', whiteSpace: 'nowrap' }}>
      <MathText text={formula} />
    </span>
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

export default SATReferenceSheet;
