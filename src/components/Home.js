import homevideo from '../assets/home/homevideo.mp4';
import homevideoMob from '../assets/home/homevideo-mob.mp4';
import homevideoposter from '../assets/home/home1e.jpg';
import homevideoposterMob from '../assets/home/home1e-mob.jpg';
import whoruns from '../assets/home/whoruns1a.png';
import mintnow from '../assets/home/mintnow.png';
import opensea from '../assets/home/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Home.module.css';
import Rainbow from './Rainbow';

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

const h3String = "<span style='color: rgb(0, 199, 237)'>Laydeez</span> <span style='color: rgb(255, 241, 124)'>NFT</span> is a project led by women team. We look to give to empower women.";

const Home = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="home" className={`${styles.home} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <video className={styles.homevideo} src={mobile ? homevideoMob : homevideo} poster={mobile ? homevideoposterMob : homevideoposter} muted autoPlay={"autoplay"} preLoad="auto" loop playsinline />
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={whoruns} h3String={h3String} buttons={[mintnowBtn, openseaBtn]}></PageBody>
            {/* <div className={`${styles.homeBody}`}>
                <img className={styles.img} src={whoruns}></img>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project led by women team. We look to give to empower women.</h3>
                <Buttons buttons={[mintnowBtn, openseaBtn]}></Buttons>
            </div> */}
        </div>
    )
}

export default Home