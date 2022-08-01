import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Team from './components/Team';
import Arready from './components/Arready';
import Baecoin from './components/Baecoin';
import Utilities from './components/Utilities';
import styles from './App.module.css';
import './App.css';

const pages = [
  Hero,
  Team,
  Utilities
]

function App() {

  return (
    <div className={`${styles.app}`}>
      {/* <Menu></Menu> */}
      <div className={`container-fluid ${styles.closed}`}>
        <Hero></Hero>
        <Team></Team>
        <Arready></Arready>
        <Baecoin></Baecoin>
        {/* <Utilities></Utilities> */}
      </div>
    </div>
  );
}

export default App;
