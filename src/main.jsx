import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.addEventListener('error', (e) => {
  console.error("Global window error:", e.error || e.message);
  const el = document.getElementById('root');
  if (el && !el.innerHTML) {
    el.innerHTML = '<div style="color:red;padding:20px;font-family:monospace">Window Error: ' + (e.error?.stack || e.message) + '</div>';
  }
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: '#ef4444', padding: 24, background: '#09090b', fontFamily: 'monospace' }}>
          <h2>React Error:</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.stack || String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}
