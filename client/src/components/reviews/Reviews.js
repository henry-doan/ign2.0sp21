import react,{useState, useEffect} from 'react';
import axios from 'axios'
import Review from './Review'
import {Button} from 'react-bootstrap'
import ReviewForm from './ReviewForm'

const Reviews = ({game}) => {
    const [reviews, setReviews] = useState([]);
    const [show, setShow] = useState(false)
    const [displayState, setDisplayState] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getReviews = async() => {
        try{
            let res = await axios.get('/api/games/${game}/reviews');
            setReviews(res.data)
        }catch (err) {
            console.log(err.response);
            alert("Error: Failed to get Reviews")
        }
    }

    useEffect(() => {
        getReviews
    },[])

    const handleDeleteReview = (id) => {
        setReviews(reviews.filter((reviews)=> review.id !== id))
    }

    const addReview = (review) => {
        setReviews([reviw,...reviews])
    }

    const handleEditReview = (r) => {
        const newReview = review.map((review) => {
            if (r.id === review.id) return newReview;
            else return review;
        });
        setReviews(r);
    }
    
    const renderReviews = () => {
        return reviews.map((review) => <Review key={review.id} game={game} review={review} deleteReview={handleDeleteReview}/>)
    };

    return (
        <>
        <Button onClick={() => setDisplayState(true)}>{displayState ? "Add a Review":"Cancel"}</Button>
                <ReviewForm add={addReview} afterUpdate={handleEditReview} game={game} display={!displayState ? "none" : "block"}/>
                <Button> Cancel </Button>
        <div>
            {renderReviews()}
        </div>
        </>
    )
}
export default Reviews;