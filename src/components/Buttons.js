import Button from './Button';
import styles from './Buttons.module.css';

const Buttons = ({ buttons }) => {

    return (
        <div className={styles.buttons}>
            {buttons.map((button, index) => 
            (<Button key={index} button={button} />))}
        </div>
    )
}

export default Buttons