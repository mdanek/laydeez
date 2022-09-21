import Logo from "./Logo";
import SmLinks from "./SmLinks";
import Navbar from "./Navbar";
import whitepaper from '../assets/whitepaper.png';
import deez from '../assets/social/dicon.svg';
import linktree from '../assets/social/linktree.svg';
import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import instagram from '../assets/social/instagram.svg';
import discord from '../assets/social/discord.svg';
import tiktok from '../assets/social/tiktok.svg';
import styles from './Header.module.css';

const smlinksobj = [
    // {
    //     name: "whitepaper",
    //     link: "https://deeznft.io/",
    //     icon: whitepaper
    // },
    {
        name: "deez website",
        link: "https://deeznft.io/",
        icon: deez
    },
    {
        name: "linktree",
        link: "https://linktr.ee/laydeeznft",
        icon: linktree
    },
    // {
    //     name: "facebook",
    //     link: "https://www.facebook.com/deeznfts",
    //     icon: facebook
    // },
    // {
    //     name: "twitter",
    //     link: "https://twitter.com/Laydeeznft",
    //     icon: twitter
    // },
    // {
    //     name: "instagram",
    //     link: "https://www.instagram.com/deezmeta",
    //     icon: instagram
    // },
    // {
    //     name: "discord",
    //     link: "https://discord.gg/deeznft",
    //     icon: discord
    // },
    // {
    //     name: "tiktok",
    //     link: "https://www.tiktok.com/@deezmeta",
    //     icon: tiktok
    // }
]

const whitepaperBtn = {
    text: "whitepaper",
    link: "https://deeznft.io/",
    img: whitepaper
};

const Header = ({ handleToggleMenu }) => {

    return (
        <header className={`${styles.header} row m-0 p-3 col-12`}>
            <Logo></Logo>
            <div className={`${styles.rightSide} col-10 row`}>
                <SmLinks smlinks={smlinksobj} button={whitepaperBtn}></SmLinks>
                <Navbar handleToggleMenu={handleToggleMenu}></Navbar>
            </div>
        </header>
    )
}

export default Header