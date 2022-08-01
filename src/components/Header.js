import Logo from "./Logo";
import SmLinks from "./SmLinks";
import Navbar from "./Navbar";
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import instagram from '../assets/social/instagram.svg';
import discord from '../assets/social/discord.svg';
import styles from './Header.module.css';

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

const Header = () => {

    return (
        <header className={`${styles.header} row m-0 p-3 col-12`}>
            <Logo></Logo>
            <div className={`${styles.rightSide} col-10 row`}>
                <SmLinks smlinks={smlinksobj}></SmLinks>
                <Navbar></Navbar>
            </div>
        </header>
    )
}

export default Header