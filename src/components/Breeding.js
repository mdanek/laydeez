import breeding from '../assets/breeding/breedingimg3.png';
import mintnow from '../assets/home/mintnow.png';
import opensea from '../assets/home/opensea.png';
import Header from './Header';
import PageBody from './PageBody';
import styles from './Breeding.module.css';

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

const h3String = "<span style='color: rgb(255, 241, 124)'>Laydeez </span> have an on contract Breeding Function which allows them to create unique <span style='color: rgb(0, 199, 237)'>NFT</span>'s you can receive on chain. These will give our holders access to our Play to Earn Games. Learn more by downloading our White Paper.";

const Breeding = ({ active, handleToggleMenu, mobile }) => {

    return (
        <div id="breeding" className={`${styles.breeding} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <PageBody img={breeding} h3String={h3String} buttons={[mintnowBtn, openseaBtn]}></PageBody>
            {/* <div className={`${styles.homeBody}`}>
                <img className={styles.img} src={whoruns}></img>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project led by women team. We look to give to empower women.</h3>
                <Buttons buttons={[mintnowBtn, openseaBtn]}></Buttons>
            </div> */}
        </div>
    )
}

export default Breeding