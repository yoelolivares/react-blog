import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import AboutusPage from './pages/AboutusPage';
import Homepage from './pages/HomePage';
import Preferences from './components/Preferences/Preferences';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

function App() {
  const [ token , setToken ] = useState();

  if (!token) {
	  return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} exact/>
        <Route path='/about-us' element={<AboutusPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/preferences' element={<Preferences />} />
      </Routes>

    </div>
  );
}

export default App;
