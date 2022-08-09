
import Button from './Button';
import baecoin from '../assets/baecoin/baecoin.png';
import earnnow from '../assets/baecoin/earnnow.png';
import opensea from '../assets/baecoin/opensea.png';
import Header from "./Header"
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

const Baecoin = ({ handleToggleMenu }) => {

    return (
        <div id="baecoin" className={`${styles.baecoin} d-flex flex-wrap`}>
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <div className={`${styles.baecoinBody}`}>
                <div className={styles.img}></div>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project that is AR ready to go and is exciting and fun!</h3>
                <div className={styles.buttons}>
                    <Button button={earnnowBtn}></Button>
                    <Button button={openseaBtn}></Button>
                </div>
            </div>
        </div>
    )
}

export default Baecoin