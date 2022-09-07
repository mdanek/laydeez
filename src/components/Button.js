import styles from './Button.module.css';

const Button = ({ button }) => {

    return (
        <a className={`${styles.button} button`} href={button.link}>
            <img src={button.img} alt={button.text} className={styles.buttonImg}></img>
        </a>
    )
}

export default Button