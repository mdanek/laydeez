import homevideo from '../assets/home/homevideo1.mp4';
import homevideoMob from '../assets/home/homevideo-mob1.mp4';
import homevideoposter from '../assets/home/home1e.jpg';
import homevideoposterMob from '../assets/home/home1e-mob.jpg';
import whoruns from '../assets/home/whoruns3.png';
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

const h3String = "<span style='color: rgb(255, 241, 124)'>LayDeez NFT</span> is a collection of unique profile pictures from the creators of <span style='color: rgb(255, 241, 124)'>Deez Nuts</span>. Every <span style='color: rgb(255, 241, 124)'>NFT</span> in the collection will come with additional utility and unlock special features including access to our play-to-earn games.";

const Home = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="home" className={`${styles.home} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <video className={styles.homevideo} src={mobile ? homevideoMob : homevideo} poster={mobile ? homevideoposterMob : homevideoposter} muted autoPlay={"autoplay"} preload="auto" loop playsInline />
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