import scrollImg from '../assets/scroll.png'
import styles from './PageBody.module.css';

const PageBody = ({ img, h3String, buttons }) => {

    return (
        <div className={`${styles.pageBody}`}>
            <img className={styles.img} src={img} alt="Header"></img>
            <div className={styles.text}><h3 dangerouslySetInnerHTML={{__html: h3String}}></h3></div>
            <img className={styles.scroll} src={scrollImg} alt="scroll"></img>
        </div>
    )
}

export default PageBody