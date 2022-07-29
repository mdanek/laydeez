import SmLink from './SmLink';
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import instagram from '../assets/social/instagram.svg';
import discord from '../assets/social/discord.svg';
import styles from './SmLinks.module.css';

// const smlinksarr = [
//     "bi bi-facebook",
//     "bi bi-twitter",
//     "bi bi-instagram",
//     "bi bi-discord"
// ]

const smlinksobj = [
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

const SmLinks = () => {
    return (
        // <ul className={styles.smlinks}>
        // {smlinksarr.map((smlink, index) => 
        //     (<SmLink key={index} smlink={smlink} />))}
        // </ul>
        <ul className={styles.smlinks}>
        {smlinksobj.map((smlink, index) => 
            (<SmLink key={index} smlink={smlink} />))}
        </ul>
    )
}

export default SmLinks