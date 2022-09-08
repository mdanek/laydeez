import arreadyvideo from '../assets/arready/arreadyvideo.mp4';
import arreadyvideoMob from '../assets/arready/arreadyvideo-mob.mp4';
import arreadyvideoposter from '../assets/arready/arbackground1b.jpg';
import arreadyvideoposterMob from '../assets/arready/arbackground1b-mob.jpg';
import arready from '../assets/arready/arready1.png';
import learnmore from '../assets/arready/learnmore.png';
import opensea from '../assets/arready/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Arready.module.css';

const learnmoreBtn = {
    text: "Learn More",
    link: "#",
    img: learnmore
};
const openseaBtn = {
    text: "OpenSea",
    link: "#",
    img: opensea
};

const h3String = "<span style='color: rgb(249, 97, 195)'>Laydeez</span> <span style='color: rgb(255, 241, 124)'>NFT</span> is a project that is AR ready to go and is exciting and fun!";

const Arready = ({ handleToggleMenu, mobile }) => {
    return (
        <div id="arready" className={`${styles.arready} page`}>
            <video className={styles.arreadyvideo} src={mobile ? arreadyvideoMob : arreadyvideo} poster={mobile ? arreadyvideoposterMob : arreadyvideoposter} muted autoPlay={"autoplay"} preLoad="auto" loop playsinline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={arready} h3String={h3String} buttons={[learnmoreBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Arready