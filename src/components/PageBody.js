import Buttons from './Buttons';
import styles from './PageBody.module.css';

const PageBody = ({ img, h3String, buttons }) => {

    return (
        <div className={`${styles.pageBody}`}>
            <img className={styles.img} src={img}></img>
            <h3 dangerouslySetInnerHTML={{__html: h3String}}></h3>
            <Buttons buttons={buttons}></Buttons>
        </div>
    )
}

export default PageBody