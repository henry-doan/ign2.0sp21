// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import Review from './Review'
// import Games from '../games/Games'

// const ReviewShow = ({match}) => {  

// const [reviews,setReviews] = useState([])

// const getReviews = async() => {
//     try{
//       let res = await axios.get(`/api/games/${match.params.id}/reviews`)
//       setReviews(res.data)
//     }catch(err){
//       alert("Error Failed to get Reviews")
//     }
// }
// useEffect(()=>{
//   getReviews()
// },[])

// const [games,] = useState([])
// const renderReviews = (reviews, games) =>{

// }
// return(
//  <>
//   <h1>Reviews</h1>
//   {renderReviews()}
//   </>
// )
// }


// export default ReviewShow;