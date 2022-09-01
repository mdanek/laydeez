import { useState, useEffect, useRef } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import Home from './components/Home';
import Team from './components/Team';
import Twodthreed from './components/Twodthreed';
import Arready from './components/Arready';
import Baecoin from './components/Baecoin';
import Customize from './components/Customize';
import styles from './App.module.css';
import './App.css';
import rainbowimg from './assets/transition3.png';

// const scrollContainer = () => document.getElementsByClassName("container-fluid")[0];
// console.log(scrollContainer());

function App() {

  const scrollContainer = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  function reactToScrolling(e) {
    
      if (e.deltaY > 0) {
        scrollContainer.current.scrollLeft += (1 * scrollContainer.current.offsetWidth);
      // console.log(-1 * scrollContainer.current.offsetWidth);
      } else {
        scrollContainer.current.scrollLeft += (-1 * scrollContainer.current.offsetWidth);
      // console.log(1 * scrollContainer.current.offsetWidth);
      } 

    // scrollContainer.current.scrollLeft += (e.deltaY/100 * scrollContainer.current.offsetWidth);
    // console.log(e.deltaY/100 * scrollContainer.current.offsetWidth);
  }

  const handleToggleMenu = () => {
    setToggleMenu(m => !m);
  }

  const closeOnContainer = () => {
    if (toggleMenu) {
      handleToggleMenu();
    }
  }

  const handleAnimation = () => {
    setIsActive(m => !m);
    // console.log("active is" + isActive);
  }

const pagesContainer = useRef(null);
const animationContainer = useRef(null);

useEffect(() => {
  const pages = pagesContainer.current.querySelectorAll('.page');
  const rainbow = animationContainer;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !rainbow.current.classList.contains(styles.testActive) && scrollContainer.current.classList.contains(styles.closeMenu)) {
        rainbow.current.classList.add(styles.testActive);
        // console.log("contains: ", scrollContainer.current.classList.contains(styles.closeMenu));
        return
      }
      setTimeout(() => {
        rainbow.current.classList.remove(styles.testActive);
      }, 2000);
    });
  }, {
    rootMargin: "0px -50px 0px",
    threshold: 0
  });
  pages.forEach(page => {
    if(page.id!=="home") {
      observer.observe(page);
    }
  });
}, [])

  return (
    <div className={`${styles.app}`}>
      <img ref={animationContainer} src={rainbowimg} className={`${styles.test}`}/>
      <div onClick={closeOnContainer} ref={scrollContainer} onWheel={reactToScrolling} className={`${styles.mycontainer} ${toggleMenu ? styles.openMenu : styles.closeMenu}`}>
        {/* <div className={styles.kwadrat}></div> */}
        {/* <Header handleToggleMenu={handleToggleMenu}></Header> */}
        
        <div ref={pagesContainer} className={styles.page}>
          <Home handleToggleMenu={handleToggleMenu}></Home>
          <Team handleToggleMenu={handleToggleMenu}></Team>
          <Twodthreed handleToggleMenu={handleToggleMenu}></Twodthreed>
          <Arready handleToggleMenu={handleToggleMenu}></Arready>
          <Baecoin handleToggleMenu={handleToggleMenu}></Baecoin>
          <Customize handleToggleMenu={handleToggleMenu}></Customize>
        </div>
        {/* <img src={rainbowimg} className={`${styles.test} ${isActive ? styles.testActive : ''}`}/> */}
        {/* <div ref={animationContainer} className={`${styles.test}`}></div>  */}
      </div>
      <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}></Menu>
      
    </div>
  );
}

export default App;
