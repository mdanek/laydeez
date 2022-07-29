import Logo from "./Logo"
import SmLinks from "./SmLinks"
import Navbar from "./Navbar"
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <Logo></Logo>
            <div className={styles.rightSide}>
                <SmLinks></SmLinks>
                <Navbar></Navbar>
            </div>
        </header>
    )
}

export default Header