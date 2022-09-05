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
    console.log("started ignoring events");

    setTimeout(() => {
      canScroll = true;
      console.log("Events not ignored anymore. Timeout canScroll: ", canScroll)
    }, delay);
  }

  //Execute full page horizontal scroll with rainbow animation
  const executeScroll = (event, canScroll, delay) => {
    let pageLeftSide = scrollContainer.current.scrollLeft;
    let pageRightSide = scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth;
    let fullContainerWidth = pagesContainer.current.offsetWidth;

    //scroll right on mousewheel down after small timeout
    if (event.deltaY > 0 && canScroll) {
      setTimeout(() => {
        scrollContainer.current.scrollLeft += (1 * scrollContainer.current.offsetWidth);
      }, delay/10);
      if(pageRightSide < fullContainerWidth) showRainbowAnimation(delay);
    }

    //scroll left on mousewheel up after small timeout
    if (event.deltaY < 0 && canScroll) {
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



/* useEffect(() => {
  const pages = pagesContainer.current.querySelectorAll('.page');
  const rainbow = animationContainer;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !rainbow.current.classList.contains(styles.testActive) && scrollContainer.current.classList.contains(styles.closeMenu)) {
        rainbow.current.classList.add(styles.testActive);
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
}, []) */

//Main app section -----------------------------------------------------------
  return (
    <div className={`${styles.app}`}>
      <img ref={animationContainer} src={rainbowimg} className={`${styles.rainbow}`}/>
      <div onClick={closeOnContainer} ref={scrollContainer} onWheel={reactToScrolling} className={`${styles.mycontainer} ${toggleMenu ? styles.openMenu : styles.closeMenu}`}>        
        <div ref={pagesContainer} className={styles.page}>
          <Home handleToggleMenu={handleToggleMenu}></Home>
          <Team handleToggleMenu={handleToggleMenu}></Team>
          <Twodthreed handleToggleMenu={handleToggleMenu}></Twodthreed>
          <Arready handleToggleMenu={handleToggleMenu}></Arready>
          <Baecoin handleToggleMenu={handleToggleMenu}></Baecoin>
          <Customize handleToggleMenu={handleToggleMenu}></Customize>
        </div>
      </div>
      <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}></Menu>
      
    </div>
  );
}

export default App;
