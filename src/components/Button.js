import styles from './Button.module.css';

const Button = ({ button }) => {

    return (
        <a className={`${styles.button} button`} href={button.link}>
            <button>{button.text}</button>
        </a>
    )
}

export default Button