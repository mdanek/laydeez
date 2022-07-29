import styles from './Navbar.module.css';
import menu from '../assets/social/menu.svg'

const Navbar = () => {

    return (
        <nav className={`${styles.nav} col-1 justify-content-end`}>
            <img src={menu} alt="menu"></img>
        </nav>
    )
}

export default Navbar