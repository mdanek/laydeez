
import Button from './Button';
import mintnow from '../assets/mintnow.png';
import opensea from '../assets/opensea.png';
import Header from "./Header"
import styles from './Hero.module.css';

const mintnowBtn = {
    text: "Mint Now",
    link: "#",
    img: mintnow
};
const openseaBtn = {
    text: "OpenSea",
    link: "#",
    img: opensea
};

const Hero = () => {

    return (
        <div className={styles.hero}>
            <Header></Header>
            <div className={styles.heroBody}>
                <Button button={mintnowBtn}></Button>
                <Button button={openseaBtn}></Button>
            </div>
        </div>
    )
}

export default Hero