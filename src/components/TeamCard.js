import SmLinks from "./SmLinks";
import styles from './TeamCard.module.css';

const TeamCard = ({index, member}) => {
    const small = true;
    let cardColor;

    switch (index%4) {
        case 0: {
            cardColor = styles.cardColor0
            break;
        }
        case 1: {
            cardColor = styles.cardColor1
            break;
        }
        case 2: {
            cardColor = styles.cardColor2
            break;
        }
        case 3: {
            cardColor = styles.cardColor3
            break;
        }
    }
    console.log(cardColor)
    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${cardColor}`}>
                <img src={member.avatar} className={styles.avatar} alt={member.name}></img>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <div className={styles.smLinksDiv}>
                    <SmLinks small={small} smlinks={member.smlinks}></SmLinks>
                </div>
            </div>
        </div>
    )
}

export default TeamCard