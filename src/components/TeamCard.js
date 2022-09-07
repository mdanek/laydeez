import SmLinks from "./SmLinks";
import styles from './TeamCard.module.css';

const TeamCard = ({member}) => {
    const small = true;
    
    return (
        <div className={styles.card}>
            <img src={member.avatar} className={styles.avatar} alt={member.name}></img>
            <h3 className={styles.name}>{member.name}</h3>
            <span className={styles.role}>{member.role}</span>
            <div className={styles.smLinksDiv}>
                <SmLinks small={small} smlinks={member.smlinks}></SmLinks>
            </div>
        </div>
    )
}

export default TeamCard