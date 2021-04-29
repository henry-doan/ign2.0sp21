import React from 'react'
import SearchBar from '../shared/SearchBar'
import {Image, Header, Divider} from 'semantic-ui-react'
import {HomeHead, Background, Container, ContainerSec, SecBackground} from './sharedComponets'
import imageSrc from './images/Percent.png'
import Fade from 'react-reveal/Fade'
import styles from '../styledComponents/index.module.css'



const Home = () => (
  <Fade clear>

    <SecBackground>

      <Container className={styles.logoCard}>

      <Image
      className={styles.mainImage}
      src={imageSrc}
      object={SearchBar}
      />
      </Container>
      <ContainerSec>

      <SearchBar/>
      </ContainerSec>
      <br />

      <Container>
        <h4 className={styles.intro}>
          Welcome to Eighty Percent Gaming! Where we want YOUR game to get the recognition it deserves. It all started with a child's dream of making his own Mario game. But how would they introduce their game to others? Look no further.
        </h4>
      </Container>

      <a href='/games' style={{color: 'white'}}>View Games</a>
    </SecBackground>
  </Fade>


  )
  export default Home;