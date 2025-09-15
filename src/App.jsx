
import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './NavBar/Navigation';
import Nav from './NavBar/Nav';

function App() {

  return (
    <div>
      <Navigation />
      <div className="main-content">
        <Nav />
      </div>
    </div>
  );
}

export default App
