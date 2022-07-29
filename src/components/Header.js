import Logo from "./Logo"
import SmLinks from "./SmLinks"
import Navbar from "./Navbar"
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={`${styles.header} row m-0 p-3 col-12`}>
            <Logo></Logo>
            <div className={`${styles.rightSide} col-10 row justify-content-end`}>
                <SmLinks></SmLinks>
                <Navbar></Navbar>
            </div>
        </header>
    )
}

export default Header