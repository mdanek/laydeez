import twothreedimage from '../assets/twodthreed/twodthreedlaydeez4.png';
import twodthreedvideo from '../assets/twodthreed/twodthreedvideo1.mp4';
import twodthreedvideoMob from '../assets/twodthreed/twodthreedvideo-mob1.mp4';
import twodthreedvideoposter from '../assets/twodthreed/twodthreed1b.jpg';
import twodthreedvideoposterMob from '../assets/twodthreed/twodthreed1b-mob.jpg';
import earnnow from '../assets/twodthreed/earnnow.png';
import opensea from '../assets/twodthreed/opensea.png';
import PageBody from './PageBody';
import styles from './Twodthreed.module.css';
import Header from './Header';

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

const h3String = "Every <span style='color: rgb(0, 199, 237)'>LayDeez NFT</span> comes with a <span style='color: rgb(255, 241, 124)'>2D PFP</span> as well as a matching <span style='color: rgb(255, 241, 124)'>3D PFP</span> for free! Swap between <span style='color: rgb(255, 241, 124)'>PFPs</span> on-chain with the click of a button!";

const Twodthreed = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="twodthreed" className={`${styles.twodthreed} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <video className={styles.twodthreedvideo} src={mobile ? twodthreedvideoMob : twodthreedvideo} poster={mobile ? twodthreedvideoposterMob : twodthreedvideoposter} muted autoPlay={"autoplay"} preload="auto" loop playsInline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={twothreedimage} h3String={h3String} buttons={[earnnowBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Twodthreed