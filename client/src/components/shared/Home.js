import React from 'react'
import SearchBar from '../shared/SearchBar'
import {Image, Header} from 'semantic-ui-react'
import {HomeHead} from './sharedComponets'
import imageSrc from './images/Percent.png'

const Home = () => (
    <>
      <Image
      src={imageSrc}
      />
      <SearchBar/>
    </>
  )
  export default Home;