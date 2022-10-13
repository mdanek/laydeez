import scrollImg from '../assets/scroll.png';
import swipeImg from '../assets/swipehand.png';
import styles from './PageBody.module.css';

const PageBody = ({ img, h3String, buttons, mobile }) => {

    return (
        <div className={`${styles.pageBody}`}>
            <img className={styles.img} src={img} alt="Header"></img>
            <div className={styles.text}><h3 dangerouslySetInnerHTML={{__html: h3String}}></h3></div>
            <img className={styles.scroll} src={mobile ? swipeImg : scrollImg} alt="scroll"></img>
        </div>
    )
}

export default PageBody