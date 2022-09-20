import TeamCard from "./TeamCard";
import Header from "./Header";
import teamheader from '../assets/team/teamheader2.png';
import teamdata from './TeamData';
import styles from './Team.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const teamobj = teamdata;

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

const Team = ({ active, handleToggleMenu }) => {

    return (
        <div id="team" className={`${styles.team} page`}>
            {/* <Rainbow active={active}></Rainbow> */}
            <Header handleToggleMenu={handleToggleMenu}/>
            <img className={styles.teamheader} src={teamheader} alt="Laydeez Team"></img>
                <div className={styles.aboutus}>
                    <h2><span style={{ color: 'rgb(249, 97, 195)' }}>About </span>
                    <span style={{ color: 'rgb(255, 241, 124)' }}>Us</span></h2>
                    <p><span style={{ color: 'rgb(249, 97, 195)' }}>LayDeez</span>  is the latest installment in the Deez ecosystem. The team behind the project is fully doxxed and has 7+ years of experience in art design and game development with over 300 Million game downloads on the app store and two #1 ranked, world wide hits.
                    The team has worked on projects such as Assassin’s Creed, Cyberpunk 2077, the Witcher, Halo, Spyro the Dragon, and much more. Several new women were hired specifically for this project to bring more inclusion into Web 3.0 and the NFT space. More can be learned about the overall company at <a href="https://DeezNFT.io"><span style={{ color: 'rgb(249, 97, 195)' }}>https://DeezNFT.io</span></a></p>
                </div>
                <Carousel 
                    className={styles.cards}
                    sliderClass={styles.cardList}
                    itemClass={styles.card}
                    responsive={responsive}
                    infinite={true}
                    focusOnSelect={true}
                    keyBoardControl={true}
                >
                            {teamobj.map((member, index) => 
                            (<TeamCard key={index} member={member} />))}
                </Carousel>
        </div>
    )
}

export default Team