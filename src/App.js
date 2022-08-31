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
    console.log("active is" + isActive);
  }

const pagesContainer = useRef(null);
const animationContainer = useRef(null);

// useEffect(() => {
//   const pages = pagesContainer.current.querySelectorAll('.page');
//   const rainbow = animationContainer;
//   const observer = new IntersectionObserver(entries => {
//     // console.log('entries', entries);
//     entries.forEach(entry => {
//       console.log(entry);
//       if (!entry.isIntersecting) {
//         rainbow.current.classList.add(styles.testActive);
//         return;
//       }

//       rainbow.current.classList.remove(styles.testActive);
//     });
//   });
//   pages.forEach(page => {
//     observer.observe(page);
//     // console.log(page);
//   });
// }, [])
// const rainbow = animationContainer;
// // rainbow.classList.remove(styles.testActive);



// observer.observe(pageContainer);

  // useEffect(() => {
  //   scrollContainer.current.scrollLeft += 100;
  // }, [scrollContainer]);
  
    // scrollContainer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

  return (
    <div className={`${styles.app}`}>
      
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
        {/* <div ref={pageContainer} className={`${styles.test} ${isActive ? styles.testActive : ''}`}></div>   */}
        {/* <div ref={animationContainer} className={`${styles.test}`}></div>  */}
      </div>
      <Menu toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}></Menu>
      
    </div>
  );
}

export default App;
