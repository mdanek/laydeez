import TeamCard from "./TeamCard"
import styles from './Team.module.css';

const teamobj = [
    {
        name: "Lil Kim",
        text: "She's got a booooty xD",
        link: "google.com"
    },
    {},
    {}
];

const Team = () => {

    return (
        <div className={styles.team}>
            <h1>Laydeez Team</h1>
            <div>
            {teamobj.map((teamcard, index) => 
            (<TeamCard key={index} teamcard={teamcard} />))}
            </div>
        </div>
    )
}

export default Team