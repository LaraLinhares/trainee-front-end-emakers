import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Configurar Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import UserPage from './pages/UserPage/UserPage.jsx';

// Mudança para a pág. UserPage apenas quando logar (não utilizado ainda)
const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <Item /> : <Login />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "userpage",
        element: <UserPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
