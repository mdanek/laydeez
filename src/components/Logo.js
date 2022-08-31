// import logo from '../assets/laydeezlogowebmin.png';
import styles from './Logo.module.css';

const Logo = () => {

    return (
        // 
        <div className={`${styles.logo} col-2`}>
            <a className={styles.logoAnchor} href="#home"></a>
        </div>
        // </a>
    )
}

export default Logo