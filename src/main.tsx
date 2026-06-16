import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/lexend/700.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import './index.css'; // global tokens/utilities first, so component modules can override
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Root element #root not found');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
