import styles from './SmLink.module.css';

const SmLink = ({ smlink, small }) => {
    let smallIcon = "";

    if (small===true) {
        smallIcon = styles.small; 
    };

    // if (smlink.name === "whitepaper") {
    //     smallIcon = styles.large;
    // }

    return (

        <a className={styles.smlink} href={smlink.link} target="_blank" rel="noopener noreferrer">
            <li>
                <img className={smallIcon} src={smlink.icon} alt={smlink.name}></img>
            </li>
        </a>
    )
}

export default SmLink