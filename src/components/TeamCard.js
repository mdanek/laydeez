import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './TeamCard.module.css';

const TeamCard = ({teamcard}) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className="bi bi-emoji-smile" />
                <Card.Body>
                    <Card.Title>{teamcard.name}</Card.Title>
                    <Card.Text>
                        {teamcard.text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard