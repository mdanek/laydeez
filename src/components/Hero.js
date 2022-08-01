
import Button from './Button';
import whoruns from '../assets/whoruns.png';
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
        <div id="hero" className={`${styles.hero} d-flex flex-wrap`}>
            <Header></Header>
            <div className={`${styles.heroBody}`}>
                <div className={styles.img}></div>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project led by women team. We look to give to empower women.</h3>
                <div className={styles.buttons}>
                    <Button button={mintnowBtn}></Button>
                    <Button button={openseaBtn}></Button>
                </div>
            </div>
        </div>
    )
}

export default Hero