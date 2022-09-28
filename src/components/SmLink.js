import styles from './SmLink.module.css';

const SmLink = ({ smlink, small, purple }) => {
    let smallIcon = "";
    let purpleIcon = "";

    if (small) {
        smallIcon = styles.small; 
    };

    if (purple) {
        purpleIcon = styles.purple;
    };

    // if (smlink.name === "whitepaper") {
    //     smallIcon = styles.large;
    // }

    return (

        <a className={styles.smlink} href={smlink.link} target="_blank" rel="noopener noreferrer">
            <li>
                <img className={`${smallIcon} ${purpleIcon}`} src={smlink.icon} alt={smlink.name}></img>
            </li>
        </a>
    )
}

export default SmLink