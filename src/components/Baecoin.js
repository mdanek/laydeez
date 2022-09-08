import baecoinvideo from '../assets/baecoin/baecoinvideo.mp4';
import baecoinvideoMob from '../assets/baecoin/baecoinvideo-mob.mp4';
import baecoinvideoposter from '../assets/baecoin/baecoinbackground1b.jpg';
import baecoinvideoposterMob from '../assets/baecoin/baecoinbackground1b-mob.jpg';
import baecoin from '../assets/baecoin/baecoin.png';
import earnnow from '../assets/baecoin/earnnow.png';
import opensea from '../assets/baecoin/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Baecoin.module.css';

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

const h3String = "<span style='color: rgb(249, 97, 195)'>Laydeez</span> <span style='color: rgb(255, 241, 124)'>NFT</span> is a project that is AR ready to go and is exciting and fun!";

const Baecoin = ({ handleToggleMenu, mobile }) => {
    return (
        <div id="baecoin" className={`${styles.baecoin} page`}>
            <video className={styles.baecoinvideo} src={mobile ? baecoinvideoMob : baecoinvideo} poster={mobile ? baecoinvideoposterMob : baecoinvideoposter} autoplay loop muted />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={baecoin} h3String={h3String} buttons={[earnnowBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Baecoin