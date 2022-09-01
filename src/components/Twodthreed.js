import twothreedimage from '../assets/twodthreed/twodthreedlaydeez1a.png';
import twodthreedvideo from '../assets/twodthreed/twodthreedvideo.mp4';
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

const h3String = "<span style='color: rgb(249, 97, 195)'>Laydeez</span> are not only 2D but have 3D versions that come along for free!";

const Twodthreed = ({ active, handleToggleMenu }) => {

    return (
        <div id="twodthreed" className={`${styles.twodthreed} page d-flex flex-wrap`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <video className={styles.twodthreedvideo} src={twodthreedvideo} autoPlay loop muted />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={twothreedimage} h3String={h3String} buttons={[earnnowBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Twodthreed