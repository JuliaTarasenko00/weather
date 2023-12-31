import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './styles/index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider } from 'provider/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
