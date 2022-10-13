import playtoearn from '../assets/playtoearn/playtoearnimg3.png';
import mintnow from '../assets/home/mintnow.png';
import opensea from '../assets/home/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Playtoearn.module.css';

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

const h3String = "The children <span style='color: rgb(255, 241, 124)'>Laydeez</span> can create are called Jr'z. Jr'z are essentially free <span style='color: rgb(0, 199, 237)'>NFT</span>'s produced by your <span style='color: rgb(255, 241, 124)'>Laydeez</span>. These give you access to a variety of Play to Earn Games that we've produced. Over $500 per day will be given out!";

const Playtoearn = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="playtoearn" className={`${styles.playtoearn} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={playtoearn} h3String={h3String} buttons={[mintnowBtn, openseaBtn]} mobile={mobile}></PageBody>
            {/* <div className={`${styles.homeBody}`}>
                <img className={styles.img} src={whoruns}></img>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project led by women team. We look to give to empower women.</h3>
                <Buttons buttons={[mintnowBtn, openseaBtn]}></Buttons>
            </div> */}
        </div>
    )
}

export default Playtoearn