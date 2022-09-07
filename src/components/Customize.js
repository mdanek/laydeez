import customizevideo from '../assets/customize/customizevideo.mp4';
import customizevideoMob from '../assets/customize/customizevideo-mob.mp4';
import customizeimage from '../assets/customize/customlaydeez1a.png';
import earnnow from '../assets/customize/earnnow.png';
import opensea from '../assets/customize/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Customize.module.css';

const earnnowBtn = {
    text: "Earn Now",
    link: "#",
    img: earnnow
};
const openseaBtn = {
    text: "OpenSea",
    link: "#",
    img: opensea
};

const h3String = "<span style='color: rgb(249, 97, 195)'>Laydeez</span> are customizable by using BAE Coin to buy alternate outfits.";

const Customize = ({ handleToggleMenu, mobile }) => {

    return (
        <div id="customize" className={`${styles.customize} page`}>
            <video className={styles.customizevideo} src={mobile ? customizevideoMob : customizevideo} autoPlay loop muted />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={customizeimage} h3String={h3String} buttons={[earnnowBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Customize