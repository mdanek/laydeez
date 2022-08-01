
import Button from './Button';
import arready from '../assets/arready/arready.png';
import learnmore from '../assets/arready/learnmore.png';
import opensea from '../assets/arready/opensea.png';
import Header from "./Header"
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

const Arready = () => {

    return (
        <div id="#arready" className={`${styles.arready} d-flex flex-wrap`}>
            <Header></Header>
            <div className={`${styles.arreadyBody}`}>
                <div className={styles.img}></div>
                <h3><span style={{ color: 'rgb(249, 97, 195)' }}>Laydeez</span> <span style={{ color: 'rgb(255, 241, 124)' }}>NFT</span> is a project that is AR ready to go and is exciting and fun!</h3>
                <div className={styles.buttons}>
                    <Button button={learnmoreBtn}></Button>
                    <Button button={openseaBtn}></Button>
                </div>
            </div>
        </div>
    )
}

export default Arready