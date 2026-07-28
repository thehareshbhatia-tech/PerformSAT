import React from 'react';
import QuestionDiagram from './QuestionDiagrams';

/**
 * Error boundary around a tutor-emitted graph. A malformed-but-parseable spec can
 * still make a graph component throw at render (e.g. a shape the library can't draw
 * for these exact numbers). We DEGRADE GRACEFULLY: swallow the error and render the
 * fallback (nothing by default) so the surrounding chat prose is never broken and
 * raw JSON is never shown. `parseGraphSpec` already filters unsupported types and
 * missing fields upstream; this is the last line of defense.
 */
class GraphErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // Intentionally silent — a graph that can't render must not surface an error
    // to the student; the tutor's prose already stands on its own.
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}

/**
 * Renders a single tutor graph inline in a chat bubble from a validated
 * `{ type, params }` spec. `type`/`params` map 1:1 onto the existing
 * `QuestionDiagram` dispatcher, so this is a thin, centered, scroll-safe wrapper —
 * NOT a new plotting engine. Mounted by renderChatMarkdown in place of the raw
 * ```seva-graph``` block.
 *
 * @param {{spec: {type: string, params: object}}} props
 */
export { GraphErrorBoundary };

const TutorGraph = ({ spec }) => {
  if (!spec || typeof spec.type !== 'string') return null;
  return (
    <div
      style={{
        margin: '14px 0',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        overflowX: 'auto',
      }}
    >
      <GraphErrorBoundary fallback={null}>
        <QuestionDiagram type={spec.type} params={spec.params} />
      </GraphErrorBoundary>
    </div>
  );
};

export default TutorGraph;
