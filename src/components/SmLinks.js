import SmLink from './SmLink';
import styles from './SmLinks.module.css';

// const smlinksarr = [
//     "bi bi-facebook",
//     "bi bi-twitter",
//     "bi bi-instagram",
//     "bi bi-discord"
// ]


const SmLinks = ({ smlinks, small }) => {
    let smallStyle = "";

    if (small) {
        const small = true;
        smallStyle = styles.small;
    };

    return (
        // <ul className={styles.smlinks}>
        // {smlinksarr.map((smlink, index) => 
        //     (<SmLink key={index} smlink={smlink} />))}
        // </ul>
        <ul className={`${styles.smlinks} col-11 ${smallStyle}`}>
        {smlinks.map((smlink, index) => 
            (<SmLink key={index} smlink={smlink} small={small} />))}
        </ul>
    )
}

export default SmLinks