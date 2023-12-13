import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './store/store.js';

import './index.html';
import 'normalize.css/normalize.css';

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
