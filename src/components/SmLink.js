import styles from './SmLink.module.css';

const SmLink = ({ smlink, small }) => {
    let smallIcon = "";

    if (small===true) {
        smallIcon = styles.small; 
    };

    return (

        <a className={styles.smlink} href={smlink.link}>
            {/* <li>
                <i className={`${smlink} + ${styles.smlink}`}></i>
            </li> */}
            <li>
                <img className={smallIcon} src={smlink.icon} alt={smlink.name}></img>
            </li>
        </a>
    )
}

export default SmLink