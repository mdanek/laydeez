import customizevideo from '../assets/customize/customizevideo1.mp4';
import customizevideoMob from '../assets/customize/customizevideo-mob1.mp4';
import customizevideoposter from '../assets/customize/custom1b.jpg';
import customizevideoposterMob from '../assets/customize/custom1b-mob.jpg';
import customizeimage from '../assets/customize/customlaydeez3.png';
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

const h3String = "<span style='color: rgb(255, 241, 124)'>Laydeez</span> is one of the first <span style='color: rgb(255, 241, 124)'>NFT</span> projects in the world to allow full customization on-chain! Use the utility token in our shop to get backgrounds, music, and new traits to fully customize your <span style='color: rgb(255, 241, 124)'>PFP</span>. This increases the value and rarity of your <span style='color: rgb(255, 241, 124)'>NFT</span> and makes it unique to you! Or buy these items and resell them to others for <span style='color: rgb(255, 241, 124)'>ETH</span> on marketplaces like Opensea.";

const Customize = ({ handleToggleMenu, mobile }) => {

    return (
        <div id="customize" className={`${styles.customize} page`}>
            <video className={styles.customizevideo} src={mobile ? customizevideoMob : customizevideo} poster={mobile ? customizevideoposterMob : customizevideoposter} muted autoPlay={"autoplay"} preload="auto" loop playsInline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={customizeimage} h3String={h3String} buttons={[earnnowBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Customize