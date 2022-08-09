
import Button from './Button';
import earnnow from '../assets/twodthreed/earnnow.png';
import opensea from '../assets/twodthreed/opensea.png';
import Header from "./Header"
import styles from './Twodthreed.module.css';

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

const Twodthreed = ({ handleToggleMenu }) => {

    return (
        <div id="twodthreed" className={`${styles.twodthreed} d-flex flex-wrap`}>
            <Header handleToggleMenu={handleToggleMenu}></Header>
            <div className={`${styles.twodthreedBody}`}>
                <div className={styles.img}></div>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> are not only 2D but have 3D versions that come along for free!</h3>
                <div className={styles.buttons}>
                    <Button button={earnnowBtn}></Button>
                    <Button button={openseaBtn}></Button>
                </div>
            </div>
        </div>
    )
}

export default Twodthreed