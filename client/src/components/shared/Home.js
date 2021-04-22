import React from 'react'
import SearchBar from '../shared/SearchBar'
import {Image, Header} from 'semantic-ui-react'
import {HomeHead} from './sharedComponets'

const Home = () => (
    <>
      <HomeHead>Welcome To 80 Percent Gaming</HomeHead>
      <Image
      src='./images/Percent.png'
      />
      <SearchBar align='center'/>
    </>
  )
  export default Home;