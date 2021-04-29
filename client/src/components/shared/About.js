import React from 'react'
import {Card, Icon, Image, Button, Segment} from 'semantic-ui-react'
import imageSrc from './images/Jared.jpg'
import imageSrc2 from './images/Jayden.jpg'
import imageSrc3 from './images/Spencer.jpg'


const About = () => {

return (
    <>
    <h1>Our Devs</h1>
<Segment floated='left'>

<Card>

  <Image src={imageSrc}i={false} />
    <Card.Content>
      <Card.Header>Jared</Card.Header>
      <Card.Meta>DevPoint Labs 2021</Card.Meta>
      <Card.Description>
        Dad. Gamer. Jr Dev. Sometimes in order.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 Friends
      </a>
    </Card.Content>
  </Card>
</Segment>

<Segment floated='center'>
  <Card>
  <Image src={imageSrc2} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jayden</Card.Header>
      <Card.Meta>DevPoint Labs 2021</Card.Meta>
      <Card.Description>
        <p> Corrections Officer turned Web Developer, I first fell in love with coding when I did a follow along
          youtube tutorial for a video game I built. I was hooked! Not long after I had enrolled in DevPoint Labs
          and have learned more then I ever imagined. I LOVE TO CODE!
        </p>
      <Button color='linkedin' href='https://www.linkedin.com/in/jayden-owens/'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram' href='https://www.instagram.com/code_with_jayden/'>
      <Icon name='instagram' /> Instagram
    </Button>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 Friends
      </a>
    </Card.Content>
  </Card>
</Segment>

<Segment floated='right'>

  <Card>

  <Image src={imageSrc3} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Spencer</Card.Header>
      <Card.Meta>DevPoint Labs 2021</Card.Meta>
      <Card.Description>
        <p>
          Gamer.
        </p>
        <Button color='linkedin' href='https://www.linkedin.com/in/spencerscurtis/'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram' href='https://github.com/Scurtis90'>
      <Icon name='instagram' /> Instagram
    </Button>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        So Many Friends
      </a>
    </Card.Content>
  </Card>
</Segment>
    </>
)
}
export default About;