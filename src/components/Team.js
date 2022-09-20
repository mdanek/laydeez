import TeamCard from "./TeamCard";
import Header from "./Header";
import teamheader from '../assets/team/teamheader.png';
import avatar1 from '../assets/team/avatar1.png';
import avatar2 from '../assets/team/avatar2.png';
import avatar3 from '../assets/team/avatar3.png';
import avatar4 from '../assets/team/avatar4.png';
import teamdata from './TeamData';
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import instagram from '../assets/social/instagram.svg';
import discord from '../assets/social/discord.svg';
import tiktok from '../assets/social/tiktok.svg';
import styles from './Team.module.css';
import Rainbow from './Rainbow';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Avatars from "./Avatars";

// const teamobj = [
//     {
//         avatar: Avatars[0],
//         name: "Katie Roberts",
//         role: "Co Founder",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar2,
//         name: "Lexi Grey",
//         role: "Co Founder",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar3,
//         name: "Alina Bashlakova",
//         role: "Lead Artist",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar4,
//         name: "Soleil Moon",
//         role: "Head Operations",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar1,
//         name: "Olesia Martushkanova",
//         role: "Web Developer",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar2,
//         name: "Jazz Maya",
//         role: "Lead Social Media & Marketing",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar3,
//         name: "Lisa Page",
//         role: "Community Manager",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     },
//     {
//         avatar: avatar4,
//         name: "Julie Greenbaum",
//         role: "Charity Partnership Representative",
//         smlinks: [
//             {
//                 name: "facebook",
//                 link: "https://facebook.com",
//                 icon: facebook
//             },
//             {
//                 name: "twitter",
//                 link: "https://twitter.com",
//                 icon: twitter
//             },
//             {
//                 name: "instagram",
//                 link: "https://instagram.com",
//                 icon: instagram
//             },
//             {
//                 name: "discord",
//                 link: "https://discord.com",
//                 icon: discord
//             }
//         ]
//     }
// ];

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