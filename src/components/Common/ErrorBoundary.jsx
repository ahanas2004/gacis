import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Operational Component Boundary Caught Error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{
          padding: '3rem 2rem',
          background: 'var(--surface-dark, #111214)',
          color: '#ffffff',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          margin: '2rem auto',
          maxWidth: '680px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(200, 32, 47, 0.15)',
            color: 'var(--color-brand-red, #c8202f)',
            marginBottom: '1.25rem'
          }}>
            <AlertTriangle size={24} />
          </div>
          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 700 }}>
            {this.props.componentName ? `${this.props.componentName} Offline` : 'Component Operational Interruption'}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            A temporary rendering conflict occurred in this module. The rest of the GACIS logistics platform remains fully operational.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button
              onClick={this.handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'var(--color-brand-red, #c8202f)',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={14} /> Retry Component
            </button>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '0.875rem'
              }}
            >
              <Home size={14} /> Return Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
