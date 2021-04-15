import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext  from './AuthProvider';

export const ReviewContext = React.createContext();

export const ReviewConsumer = ReviewContext.Consumer;

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([])

  
  useEffect( () => {
    axios.get('/api/reviews')
      .then( res => setReviews(res.data))
      .catch( err => console.log(err))
  }, [])

  const addReview = (review, match) => {
    axios.post(`/api/reviews/`, { review })
      .then( res => {
        setReviews([...reviews, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateReview = (id, review, match) => {
    axios.put(`/api/reviews/${match.params.id}`, { review })
      .then(res => {
        const updatedReviews = reviews.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setReviews(updatedReviews)
      })
  }

  const deleteReview = (id) => {
    axios.delete(`/api/reviews/${id}`)
      .then( res => {
        setReviews(reviews.filter(t => t.id !== id))
      })
  }

  return(
    <ReviewContext.Provider value={{
      reviews,
      addReview: addReview,
      updateReview: updateReview,
      deleteReview: deleteReview,
    }}>
      { children }
    </ReviewContext.Provider>
  )

}
export default ReviewProvider;