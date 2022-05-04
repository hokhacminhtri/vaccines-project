import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './contexts/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
);
