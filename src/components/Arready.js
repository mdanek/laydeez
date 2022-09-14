import arreadyvideo from '../assets/arready/arreadyvideo1.mp4';
import arreadyvideoMob from '../assets/arready/arreadyvideo-mob1.mp4';
import arreadyvideoposter from '../assets/arready/arbackground1b.jpg';
import arreadyvideoposterMob from '../assets/arready/arbackground1b-mob.jpg';
import arready from '../assets/arready/arready2.png';
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

const h3String = "Shortly after mint, we will be releasing a download link where holders can download meta-ready models of their PFP. This will allow users to take their PFP to tons of different metaverse locations. It’s a true meta-ready NFT project.";

const Arready = ({ handleToggleMenu, mobile }) => {
    return (
        <div id="arready" className={`${styles.arready} page`}>
            <video className={styles.arreadyvideo} src={mobile ? arreadyvideoMob : arreadyvideo} poster={mobile ? arreadyvideoposterMob : arreadyvideoposter} muted autoPlay={"autoplay"} preLoad="auto" loop playsInline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={arready} h3String={h3String} buttons={[learnmoreBtn, openseaBtn]}></PageBody>
        </div>
    )
}

export default Arready