import { useState, useEffect, useRef } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Team from './components/Team';
import Twodthreed from './components/Twodthreed';
import Arready from './components/Arready';
import Baecoin from './components/Baecoin';
import Customize from './components/Customize';
import Fcancer from './components/Fcancer';
import Playtoearn from './components/Playtoearn';
import Breeding from './components/Breeding';
import styles from './App.module.css';
import './App.css';
import rainbowimg from './assets/transition4.png';

// const scrollContainer = () => document.getElementsByClassName("container-fluid")[0];
// console.log(scrollContainer());

function App() {

  //Scrolling slides section -----------------------------------------
  
  //Variables used for scrolling and animating
  const scrollContainer = useRef(null);
  const pagesContainer = useRef(null);

  let canScroll = true;
  const delay = 2100;

  //Start ignoring unnecessary scroll events
  const startIgnoringEvents = (delay) => {

    setTimeout(() => {
      canScroll = true;
    }, delay);
  }

  //Execute full page horizontal scroll with rainbow animation
  const executeScroll = (event, canScroll, delay, direction) => {
    let pageLeftSide = scrollContainer.current.scrollLeft;
    let pageRightSide = scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth;
    let fullContainerWidth = pagesContainer.current.offsetWidth;

    //scroll right on mousewheel down after small timeout
    if (event.deltaY > 0 && canScroll) {
      setTimeout(() => {
        scrollContainer.current.scrollLeft += (1 * scrollContainer.current.offsetWidth);
      }, delay/4);
      if(pageRightSide < fullContainerWidth) showRainbowAnimation(delay);
    }

    //scroll left on mousewheel up after small timeout
    if (event.deltaY < 0 && canScroll) {
      setTimeout(() => {
        scrollContainer.current.scrollLeft += (-1 * scrollContainer.current.offsetWidth);
      }, delay/4);
      if(pageLeftSide > 0) showRainbowAnimation(delay);
    }
  }

  //React to onWheel event
  const reactToScrolling = (event) => {
    if(canScroll) {
      startIgnoringEvents(delay);
      executeScroll(event, canScroll, delay);
    }
    canScroll = false;
  }

  //Swiping on mobile section --------------------------------------------
  let start = 0;
  let end = 0;
  let deltaX, deltaY;

  const reactToTouchStart = (event) => {
    start = event.touches[0];
  }

  const reactToTouchEnd = (event) => {
    end = event.changedTouches[0];
    deltaX = Math.abs(start.clientX - end.clientX);
    deltaY = Math.abs(start.clientY - end.clientY);

    if (deltaY < 50) {
      if (deltaX > 30 && start.clientX < end.clientX) {executeSwipe('left')}
      if (deltaX > 30 && start.clientX > end.clientX) {executeSwipe('right')}
    }
    start = 0;
    end = 0;
  }

  //Execute mobile full page horizontal scroll
  const executeSwipe = (direction) => {  
    //swipe right
    if (direction === "right") {
      scrollContainer.current.scrollLeft += (1 * scrollContainer.current.offsetWidth);
    }

    //left
    if (direction === "left") {
      scrollContainer.current.scrollLeft += (-1 * scrollContainer.current.offsetWidth);
    }
  }

  //Rainbow animation on slide transition section ----------------------------
  const animationContainer = useRef(null);
  
  const showRainbowAnimation = (delay) => {
    const rainbow = animationContainer;
  
    if(!toggleMenu) {
      rainbow.current.classList.add(styles.rainbowActive);
      setTimeout(() => {
        rainbow.current.classList.remove(styles.rainbowActive);
      }, delay);
    }
  }

  //Hamburger menu section --------------------------------------------------
  const [toggleMenu, setToggleMenu] = useState(false);

  //Change hamburger menu open/close state
  const handleToggleMenu = () => {
    setToggleMenu(m => !m);
    toggleRainbow(toggleMenu)
  }

  //Toggle rainbow container on/off when menu is open
  const toggleRainbow = (bool) => {
    const rainbow = animationContainer;

    //Check if menu is closed
    if(bool) {
      //Add rainbow class if there is none yet
      if(!rainbow.current.classList.contains(styles.rainbow)) {
        rainbow.current.classList.add(styles.rainbow);
      }
      //Remove rainbowOff class if there is one
      if(rainbow.current.classList.contains(styles.rainbowOff)) {
        rainbow.current.classList.remove(styles.rainbowOff);
      }

    //Remove rainbow class and add rainbowOff if menu is open
    } else {
        if(rainbow.current.classList.contains(styles.rainbow)) {
          rainbow.current.classList.remove(styles.rainbow);
        }
        if(!rainbow.current.classList.contains(styles.rainbowOff)) {
          rainbow.current.classList.add(styles.rainbowOff);
        }
    }
  }

  //Close hamburger menu when container is clicked
  const closeOnContainer = () => {
    if (toggleMenu) {
      handleToggleMenu();
    }
  }

  //Handle mobile/desktop version
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 600) {
        setMobile(true);
      } else setMobile(false);
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  const appContainer = useRef(null);
  let vh = window.innerHeight * 0.01;
  useEffect(() => appContainer.current.style.setProperty('--vh', `${vh}px`), []);
 
//Main app section -----------------------------------------------------------
  return (
    <div ref={appContainer} className={`${styles.app}`}>
      <img ref={animationContainer} src={rainbowimg} className={`${styles.rainbow}`} alt="rainbow"/>
      <div onClick={closeOnContainer} ref={scrollContainer} onWheel={reactToScrolling} onTouchStart={reactToTouchStart}  onTouchEnd={reactToTouchEnd} className={`${styles.mycontainer} ${toggleMenu ? styles.openMenu : styles.closeMenu}`}>        
        <div ref={pagesContainer} className={styles.page}>
          <Home handleToggleMenu={handleToggleMenu} mobile={mobile}></Home>
          <Twodthreed handleToggleMenu={handleToggleMenu} mobile={mobile}></Twodthreed>
          <Arready handleToggleMenu={handleToggleMenu} mobile={mobile}></Arready>
          <Breeding handleToggleMenu={handleToggleMenu} mobile={mobile}></Breeding>
          <Playtoearn handleToggleMenu={handleToggleMenu} mobile={mobile}></Playtoearn>
          <Team handleToggleMenu={handleToggleMenu} mobile={mobile}></Team>
          <Fcancer handleToggleMenu={handleToggleMenu} mobile={mobile}></Fcancer>
          <Baecoin handleToggleMenu={handleToggleMenu} mobile={mobile}></Baecoin>
          <Customize handleToggleMenu={handleToggleMenu} mobile={mobile}></Customize>
        </div>
      </div>
      <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}></Menu>
      
    </div>
  );
}

export default App;
