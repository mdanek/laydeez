import styles from './Navbar.module.css';
import menu from '../assets/social/menu.svg'

const Navbar = () => {

    return (
        <nav className={styles.nav}>
            <img src={menu} alt="menu"></img>
        </nav>
    )
}

export default Navbar