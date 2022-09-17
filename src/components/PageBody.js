import Buttons from './Buttons';
import scrollImg from '../assets/scroll.png'
import styles from './PageBody.module.css';

const PageBody = ({ img, h3String, buttons }) => {

    return (
        <div className={`${styles.pageBody}`}>
            <img className={styles.img} src={img}></img>
            <div className={styles.text}><h3 dangerouslySetInnerHTML={{__html: h3String}}></h3></div>
            <img className={styles.scroll} src={scrollImg}></img>
            {/* <Buttons buttons={buttons}></Buttons> */}
        </div>
    )
}

export default PageBody