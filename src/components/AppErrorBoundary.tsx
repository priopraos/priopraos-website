/**
 * The last thing between a render failure and a blank white page.
 *
 * Scope note, because it is easy to expect too much of this. The site ships as
 * a single bundle, so if THAT script fails to load nothing here runs either —
 * the boundary is inside the file that did not arrive. That failure mode is
 * handled in staticwebapp.config.json instead, by never caching index.html so
 * it cannot name a bundle a deploy has already replaced.
 *
 * What this catches is the other half: a runtime error while rendering. React
 * unmounts the whole tree on an uncaught error, so without a boundary a single
 * bad value anywhere produces a white screen on a page whose entire job is to
 * make the company look credible to an NHS buyer.
 */
import { Component, ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

export default class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, background: '#0A1628',
        fontFamily: "'Inter', system-ui, -apple-system, Arial, sans-serif",
      }}>
        <div style={{ maxWidth: 440, width: '100%', textAlign: 'center' }}>
          <p style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.3px', margin: '0 0 14px' }}>
            <span style={{ color: '#FFFFFF' }}>Priora</span>
            <span style={{ color: '#FFD700' }}>OS</span>
          </p>
          <h1 style={{ fontSize: 19, fontWeight: 600, color: '#FFFFFF', margin: '0 0 10px' }}>
            This page didn't load properly
          </h1>
          <p style={{ fontSize: 14, color: '#A9C8EA', lineHeight: 1.6, margin: '0 0 24px' }}>
            Something went wrong on our side, not yours. Reloading usually fixes it.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '13px 30px', borderRadius: 10, border: 'none', cursor: 'pointer',
              background: '#005EB8', color: '#fff', fontSize: 15, fontWeight: 700,
              fontFamily: 'inherit',
            }}
          >
            Reload the page
          </button>
          <p style={{ fontSize: 12.5, color: '#7A96B8', margin: '22px 0 0' }}>
            Still stuck? Email{' '}
            <a href="mailto:contact@prioraos.com" style={{ color: '#41B6E6' }}>
              contact@prioraos.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}
