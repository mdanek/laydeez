import twothreedimage from '../assets/twodthreed/twodthreedlaydeez1d.png';
import twodthreedvideo from '../assets/twodthreed/twodthreedvideo1.mp4';
import twodthreedvideoMob from '../assets/twodthreed/twodthreedvideo-mob1.mp4';
import twodthreedvideoposter from '../assets/twodthreed/twodthreed1b.jpg';
import twodthreedvideoposterMob from '../assets/twodthreed/twodthreed1b-mob.jpg';
import earnnow from '../assets/twodthreed/earnnow.png';
import opensea from '../assets/twodthreed/opensea.png';
import PageBody from './PageBody';
import styles from './Twodthreed.module.css';
import Header from './Header';
import Rainbow from './Rainbow';

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

const h3String = "<span style='color: rgb(0, 199, 237)'>Laydeez</span> <span style='color: rgb(249, 97, 195)'>are not only 2D but have 3D versions that come along for free!</span>";

const Twodthreed = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="twodthreed" className={`${styles.twodthreed} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <video className={styles.twodthreedvideo} src={mobile ? twodthreedvideoMob : twodthreedvideo} poster={mobile ? twodthreedvideoposterMob : twodthreedvideoposter} muted autoPlay={"autoplay"} preLoad="auto" loop playsInline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={twothreedimage} h3String={h3String} buttons={[earnnowBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Twodthreed