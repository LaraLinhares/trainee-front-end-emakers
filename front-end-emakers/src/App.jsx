import { useState } from 'react'
import './App.css'
import { AuthProvider } from './contexts/auth';

// Reaproveitamento de estrutura
import{ Outlet } from "react-router-dom";

function App() {
    return(
    <div className="App">
      <Outlet></Outlet>
    </div>
  )
};

export default App;
