import React from 'react'
import SearchBar from '../shared/SearchBar'
import {Image, Header, Divider} from 'semantic-ui-react'
import {HomeHead, Background, Container, ContainerSec, SecBackground} from './sharedComponets'
import imageSrc from './images/Percent.png'
import Fade from 'react-reveal/Fade'




const Home = () => (
  <Fade clear>

    <SecBackground>

      <Container>

      <Image
      src={imageSrc}
      size='big'
      object={SearchBar}
      />
      </Container>
      <ContainerSec>

      <SearchBar/>
      </ContainerSec>

      <a href='/games' style={{color: 'white'}}>View Games</a>
    </SecBackground>
  </Fade>


  )
  export default Home;