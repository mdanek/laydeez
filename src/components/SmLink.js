import styles from './SmLink.module.css';

const SmLink = ({ smlink }) => {

    return (
        <a className={styles.smlink} href={smlink.link}>
            {/* <li>
                <i className={`${smlink} + ${styles.smlink}`}></i>
            </li> */}
            <li>
                <img src={smlink.icon} alt={smlink.name}></img>
            </li>
        </a>
    )
}

export default SmLink