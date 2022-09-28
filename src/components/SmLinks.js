import SmLink from './SmLink';
import Button from './Button';
import styles from './SmLinks.module.css';

const SmLinks = ({ smlinks, small, purple, button }) => {
    let smallStyle = "";

    if (small) {
        const small = true;
        smallStyle = styles.small;
    };

    return (
        <ul className={`${styles.smlinks} col-11 ${smallStyle}`}>
            {button ? (<li className={styles.whitepaper}><Button button={button}></Button></li>) : null}
        {smlinks.map((smlink, index) => 
            (<SmLink key={index} smlink={smlink} small={small} purple={purple} />))}
        </ul>
    )
}

export default SmLinks