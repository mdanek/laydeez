
import Button from './Button';
import earnnow from '../assets/customize/earnnow.png';
import opensea from '../assets/customize/opensea.png';
import Header from "./Header"
import styles from './Customize.module.css';

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

const Customize = ({ handleToggleMenu }) => {

    return (
        <div id="customize" className={`${styles.customize} d-flex flex-wrap`}>
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <div className={`${styles.customizeBody}`}>
                <div className={styles.img}></div>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> are customizable by using BAE Coin to buy alternate outfits.</h3>
                <div className={styles.buttons}>
                    <Button button={earnnowBtn}></Button>
                    <Button button={openseaBtn}></Button>
                </div>
            </div>
        </div>
    )
}

export default Customize