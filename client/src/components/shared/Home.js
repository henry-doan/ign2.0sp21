import React from 'react'
import SearchBar from '../shared/SearchBar'
import {Image, Header} from 'semantic-ui-react'
import {HomeHead, Background, Container, ContainerSec} from './sharedComponets'
import imageSrc from './images/Percent.png'



const Home = () => (
    
    <>

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
    </>
  )
  export default Home;