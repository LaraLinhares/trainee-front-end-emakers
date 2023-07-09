import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Configurar Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UserPage from './pages/UserPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
      path: "userpage",
      element: <UserPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
