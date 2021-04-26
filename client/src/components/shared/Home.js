import React from 'react'
import SearchBar from '../shared/SearchBar'
import {Image, Header} from 'semantic-ui-react'
import {HomeHead} from './sharedComponets'
import imageSrc from './images/Percent.png'
const Home = () => (
    <>
      <HomeHead>Welcome To 80 Percent Gaming</HomeHead>
      <SearchBar align='center'/>
      <Image
      src={imageSrc}
      />
     
    </>
  )
  export default Home;