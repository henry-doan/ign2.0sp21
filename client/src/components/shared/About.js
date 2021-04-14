import Card from 'react-bootstrap/Card'
import Image from './images/Jayden.jpg'

const About = () => (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    </>
)
export default About;