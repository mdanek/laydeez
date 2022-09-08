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
      canTouch = true;
    }, delay);
  }

  //Execute full page horizontal scroll with rainbow animation
  const executeScroll = (event, canScroll, delay, direction) => {
    let pageLeftSide = scrollContainer.current.scrollLeft;
    let pageRightSide = scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth;
    let fullContainerWidth = pagesContainer.current.offsetWidth;

    //scroll right on mousewheel down or swipe right after small timeout
    if (direction === "right" || event.deltaY > 0 && canScroll) {
      setTimeout(() => {
        scrollContainer.current.scrollLeft += (1 * scrollContainer.current.offsetWidth);
      }, delay/10);
      if(pageRightSide < fullContainerWidth) showRainbowAnimation(delay);
    }

    //scroll left on mousewheel up or swipe left after small timeout
    if (direction === "left" || event.deltaY < 0 && canScroll) {
      setTimeout(() => {
        scrollContainer.current.scrollLeft += (-1 * scrollContainer.current.offsetWidth);
      }, delay/10);
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

  //React to touch
  let touchesArray = [];
  let touchesArrayUpDown = [];
  let canTouch = true;
  let direction = "";

  const reactToTouchStart = () => {
    canTouch = true;
  }

  const reactToTouchMove = (event) => {
    if(touchesArray.length < 10 && canTouch && canScroll) {
      touchesArray.push(event.touches[0].clientX)
      touchesArrayUpDown.push(event.touches[0].clientY)
    } else if(canTouch) {

      if(canScroll) {
        startIgnoringEvents(delay);
        direction = checkTouchDirection(touchesArray);
        if(!upDown(touchesArrayUpDown)) {
          executeScroll(event, canScroll, delay, direction)
        }
        touchesArray = [];
        touchesArrayUpDown = [];
      }
      canScroll = false;
      canTouch = false
    }
  }

  const reactToTouchEnd = () => {
    canTouch = true;
  }

  const checkTouchDirection = (arr) => {
    if(arr[0] < arr[arr.length - 1]) {
      return "left"
    } else return "right";
  }
  
  const upDown = (arr) => {
    let deltaUpDown = (arr[0] - arr[arr.length - 1]);
    if(Math.abs(deltaUpDown) > 40) {
      return true
    } else return false;
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
  let mobile = false;
  if(window.innerWidth <= 600) {
    mobile = true;
  } else mobile = false;

//Main app section -----------------------------------------------------------
  return (
    <div className={`${styles.app}`}>
      <img ref={animationContainer} src={rainbowimg} className={`${styles.rainbow}`}/>
      <div onClick={closeOnContainer} ref={scrollContainer} onWheel={reactToScrolling} onTouchStart={reactToTouchStart} onTouchMove={reactToTouchMove} onTouchEnd={reactToTouchEnd} className={`${styles.mycontainer} ${toggleMenu ? styles.openMenu : styles.closeMenu}`}>        
        <div ref={pagesContainer} className={styles.page}>
          <Home handleToggleMenu={handleToggleMenu} mobile={mobile}></Home>
          <Team handleToggleMenu={handleToggleMenu} mobile={mobile}></Team>
          <Twodthreed handleToggleMenu={handleToggleMenu} mobile={mobile}></Twodthreed>
          <Arready handleToggleMenu={handleToggleMenu} mobile={mobile}></Arready>
          <Baecoin handleToggleMenu={handleToggleMenu} mobile={mobile}></Baecoin>
          <Customize handleToggleMenu={handleToggleMenu} mobile={mobile}></Customize>
        </div>
      </div>
      <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}></Menu>
      
    </div>
  );
}

export default App;
