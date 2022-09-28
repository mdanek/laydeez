import fcancer from '../assets/fcancer/fcancerimg3.png';
import mintnow from '../assets/home/mintnow.png';
import opensea from '../assets/home/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Fcancer.module.css';

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

const h3String = "<span style='color: rgb(255, 241, 124)'>Laydeez</span> and the <span style='color: rgb(255, 241, 124)'>Deez</span> ecosystem is using Web 3 to make a positive change. We are committed to raising over a quarter million dollars for our partner charity, Fuck Cancer. Our ecosystem has already raised over $50k and is set to donate another $50k after <span style='color: rgb(255, 241, 124)'>Laydeez</span> mint. We are also on the board of advisors of the giving platform <a href='https://www.generaize.com' style='color: rgb(0, 199, 237)'>generaize.com</a>.";

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