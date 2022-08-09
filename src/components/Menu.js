// import logo from '../assets/laydeezlogowebmin.png';
import styles from './Menu.module.css';

const Menu = ({ toggleMenu, handleToggleMenu }) => {

    return (
        <div className={toggleMenu ? styles.navBar : styles.navBarHidden}>
            <ul className={styles.menuList}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#twodthreed">2D + 3D</a></li>
                <li><a href="#arready">AR Ready</a></li>
                <li><a href="#baecoin">BaeCoin</a></li>
                <li><a href="#customize">Customize</a></li>
            </ul>
            <div onClick={handleToggleMenu} className={toggleMenu ? styles.imgClose : styles.displayNone}></div>
        </div>
    )
}

export default Menu