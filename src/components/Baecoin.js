import baecoinvideo from '../assets/baecoin/baecoinvideo1.mp4';
import baecoinvideoMob from '../assets/baecoin/baecoinvideo-mob1.mp4';
import baecoinvideoposter from '../assets/baecoin/baecoinbackground1b.jpg';
import baecoinvideoposterMob from '../assets/baecoin/baecoinbackground1b-mob.jpg';
import baecoin from '../assets/baecoin/baecoin4.png';
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

const h3String = "All <span style='color: rgb(255, 241, 124)'>LayDeez NFTs</span> will be able to earn our utility token just by holding. The utility token is a real crypto coin that you can use within our ecosystem. You’ll be able to visit our shop and buy <span style='color: rgb(255, 241, 124)'>NFTs</span>, new traits, WL spots, raffles, and so much more!";

const Baecoin = ({ handleToggleMenu, mobile }) => {
    return (
        <div id="baecoin" className={`${styles.baecoin} page`}>
            <video className={styles.baecoinvideo} src={mobile ? baecoinvideoMob : baecoinvideo} poster={mobile ? baecoinvideoposterMob : baecoinvideoposter} muted autoPlay={"autoplay"} preload="auto" loop playsInline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={baecoin} h3String={h3String} buttons={[earnnowBtn, openseaBtn]} mobile={mobile}></PageBody>
        </div>
    )
}

export default Baecoin