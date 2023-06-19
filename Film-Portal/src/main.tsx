import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.tsx'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import './i18n'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Suspense>,
)
