import { useState, useEffect, useRef } from 'react';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Team from './components/Team';
import Arready from './components/Arready';
import Baecoin from './components/Baecoin';
import Utilities from './components/Utilities';
import styles from './App.module.css';
import './App.css';

// const scrollContainer = () => document.getElementsByClassName("container-fluid")[0];
// console.log(scrollContainer());

function App() {

  const scrollContainer = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  function reactToScrolling(e) {
    scrollContainer.current.scrollLeft += (e.deltaY/100 * scrollContainer.current.offsetWidth);
  }

  const handleToggleMenu = () => {
    setToggleMenu(m => !m);
  }

  // useEffect(() => {
  //   scrollContainer.current.scrollLeft += 100;
  // }, [scrollContainer]);
  
    // scrollContainer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

  return (
    <div className={`${styles.app}`}>
      <div ref={scrollContainer} onWheel={reactToScrolling} className={`${styles.mycontainer} ${toggleMenu ? styles.openMenu : styles.closeMenu}`}>
        <div className={styles.page}>
          <Hero handleToggleMenu={handleToggleMenu}></Hero>
          <Team handleToggleMenu={handleToggleMenu}></Team>
          <Arready handleToggleMenu={handleToggleMenu}></Arready>
          <Baecoin handleToggleMenu={handleToggleMenu}></Baecoin>
          {/* <Utilities></Utilities> */}
        </div>
      </div>
      <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}></Menu>
      
    </div>
  );
}

export default App;
