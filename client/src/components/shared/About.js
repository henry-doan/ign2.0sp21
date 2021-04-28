import React from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import imageSrc from './images/Jared.jpg'
import imageSrc2 from './images/Jayden.jpg'


const About = () => {

return (
    <>
    <h1>Our Devs</h1>
<Card>

  <Image src={imageSrc}i={false} />
    <Card.Content>
      <Card.Header>Jared</Card.Header>
      <Card.Meta>DevPoint Labs 2021</Card.Meta>
      <Card.Description>
        Jared is a part-time magician living in Salt Lake. While not practicing magic he can be found donating time at the local foster home for stray cats. Enjoy cold showers and walking on legos in the dark.  Also DIY Dentistry!
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 Friends
      </a>
    </Card.Content>
  </Card>
  <Card>

  <Image src={imageSrc2} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jayden</Card.Header>
      <Card.Meta>DevPoint Labs 2021</Card.Meta>
      <Card.Description>
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
  <Card>

  <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Spencer/Simon</Card.Header>
      <Card.Meta>DevPoint Labs 2021</Card.Meta>
      <Card.Description>
       
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 Friends
      </a>
    </Card.Content>
  </Card>
  <Card>
  <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Taylor</Card.Header>
      <Card.Meta>Fresh from Hawaii</Card.Meta>
      <Card.Description>
       
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        3 Friends
      </a>
    </Card.Content>
  </Card>
    </>
)
}
export default About;