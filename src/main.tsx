// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AuthContext'; // Import AuthProvider here
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'; // Import Redux Provider
import { store, persistor } from './store'; // Import your Redux store and persistor
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> {/* Wrap with Provider */}
        <PersistGate loading={null} persistor={persistor}> {/* Wrap with PersistGate */}
          <AppProvider>
            <Toaster />
            <App />
          </AppProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
