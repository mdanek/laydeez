import fcancer from '../assets/fcancer/fcancerimg.png';
import mintnow from '../assets/home/mintnow.png';
import opensea from '../assets/home/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Fcancer.module.css';
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

const h3String = "<span style='color: rgb(255, 241, 124)'>Laydeez</span> <span style='color: rgb(0, 199, 237)'>NFT</span> is a proud sponsor of the Fuck Cancer foundation and give to them regularly.";

const Fcancer = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="fcancer" className={`${styles.fcancer} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={fcancer} h3String={h3String} buttons={[mintnowBtn, openseaBtn]}></PageBody>
            {/* <div className={`${styles.homeBody}`}>
                <img className={styles.img} src={whoruns}></img>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project led by women team. We look to give to empower women.</h3>
                <Buttons buttons={[mintnowBtn, openseaBtn]}></Buttons>
            </div> */}
        </div>
    )
}

export default Fcancer