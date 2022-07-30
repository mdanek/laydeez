import TeamCard from "./TeamCard";
import Carousel from 'react-bootstrap/Carousel';
import avatar1 from '../assets/team/avatar1.png';
import avatar2 from '../assets/team/avatar2.png';
import avatar3 from '../assets/team/avatar3.png';
import avatar4 from '../assets/team/avatar4.png';
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import instagram from '../assets/social/instagram.svg';
import discord from '../assets/social/discord.svg';
import styles from './Team.module.css';

const teamobj = [
    {
        avatar: avatar1,
        name: "Lil Kim",
        role: "She's got a booooty xD",
        smlinks: [
            {
                name: "facebook",
                link: "https://facebook.com",
                icon: facebook
            },
            {
                name: "twitter",
                link: "https://twitter.com",
                icon: twitter
            },
            {
                name: "instagram",
                link: "https://instagram.com",
                icon: instagram
            },
            {
                name: "discord",
                link: "https://discord.com",
                icon: discord
            }
        ]
    },
    {
        avatar: avatar2,
        name: "Julia Roberts",
        role: "Actress",
        smlinks: [
            {
                name: "facebook",
                link: "https://facebook.com",
                icon: facebook
            },
            {
                name: "twitter",
                link: "https://twitter.com",
                icon: twitter
            },
            {
                name: "instagram",
                link: "https://instagram.com",
                icon: instagram
            },
            {
                name: "discord",
                link: "https://discord.com",
                icon: discord
            }
        ]
    },
    {
        avatar: avatar3,
        name: "T Pain",
        role: "Autotune master",
        smlinks: [
            {
                name: "facebook",
                link: "https://facebook.com",
                icon: facebook
            },
            {
                name: "twitter",
                link: "https://twitter.com",
                icon: twitter
            },
            {
                name: "instagram",
                link: "https://instagram.com",
                icon: instagram
            },
            {
                name: "discord",
                link: "https://discord.com",
                icon: discord
            }
        ]
    },
    {
        avatar: avatar4,
        name: "Yo Menik",
        role: "Rapper",
        smlinks: [
            {
                name: "facebook",
                link: "https://facebook.com",
                icon: facebook
            },
            {
                name: "twitter",
                link: "https://twitter.com",
                icon: twitter
            },
            {
                name: "instagram",
                link: "https://instagram.com",
                icon: instagram
            },
            {
                name: "discord",
                link: "https://discord.com",
                icon: discord
            }
        ]
    }
];

const Team = () => {

    return (
        <div className={styles.team}>
            <div className={styles.teamHeader}></div>
            <div className={styles.cards}>
                <Carousel>
                    {teamobj.map((member, index) => 
                    (<Carousel.Item>
                        <TeamCard key={index} member={member} />
                    </Carousel.Item>))}
                </Carousel>
            </div>
        </div>
    )
}

export default Team