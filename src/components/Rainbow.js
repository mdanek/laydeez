import styles from './Rainbow.module.css';
import rainbowimg from '../assets/transition1.png';

const Rainbow = (active) => {
    return (
        <img src={rainbowimg} className={`${styles.test} ${active.active ? styles.testActive : ''}`}/>
    )
}

export default Rainbow