import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Utilities from './components/Utilities';
import './App.css';

const pages = [
  Hero,
  Team,
  Utilities
]

function App() {
  const Page = pages[0];

  return (
    <div className="container-fluid">
      <Hero></Hero>
      <Team></Team>
      <Utilities></Utilities>
    </div>
  );
}

export default App;
