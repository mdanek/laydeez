// import logo from '../assets/laydeezlogowebmin.png';
import styles from './Menu.module.css';

const Menu = () => {

    return (
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#arready">AR Ready</a></li>
                <li><a href="#baecoin">BaeCoin</a></li>
            </ul>
        </div>
    )
}

export default Menu