import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './TeamCard.module.css';

const TeamCard = ({member}) => {

    return (
        <div>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={member.avatar} className={styles.cardImg} />
                <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>
                        {member.role}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard