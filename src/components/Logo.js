import logo from '../assets/laydeezlogowebmin.png';
import styles from './Logo.module.css';

const Logo = () => {

    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt='logo'></img>
        </div>
    )
}

export default Logo