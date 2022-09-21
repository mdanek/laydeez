import styles from './Button.module.css';

const Button = ({ button }) => {
    let buttonWhitepaper, buttonWhitepaperImage;

    if (button && button.text === "whitepaper") {
        buttonWhitepaper = styles.whitepaper
        buttonWhitepaperImage = styles.whitepaperImage
    } else {
        buttonWhitepaper = styles.button
        buttonWhitepaperImage = styles.buttonImg
    }

    return (
        <a className={`${buttonWhitepaper} button`} href={button.link}>
            <img src={button.img} alt={button.text} className={buttonWhitepaperImage}></img>
        </a>
    )
}

export default Button