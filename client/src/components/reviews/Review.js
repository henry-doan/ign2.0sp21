import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Button,Modal,Row,Col} from "react-bootstrap";
import ReviewForm from "./ReviewForm"


const Comment = ({comment,deleteComment,editComment,post}) => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleDeleteReveiw = () => {
    axios
    .delete(`/api/games/${game}/reviews/${review.id}`)
    .then((res) =>{
      setShow(false)
      deleteReview(review.id);
    })
    .catch(err => {
      console.log(err)
    })
  }


return(
  <>
  <Row style={{justifyContent:"center", alignItems:"center"}}>
  <h5>{review.title}</h5>
  <h5>{review.rating}</h5>
  <h5>{review.gamereview}</h5>
  <h5>{review.body}</h5>
  <h5>{review.image}</h5>
  <h5>{review.gameplay}</h5>
  <h5>{review.visual}</h5>
  <h5>{review.soundtrack}</h5>

  <Button varient="warning"onClick={handleEditShow}>Edit</Button>
  <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm game={game} reveiwProp={review} editReview={editReview}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  <Button  varient="danger" onClick={handleShow}>Delete</Button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your reveiw</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteRewveiw}>
            Yes,Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>

  </>
)

}


// const StyledCBody = styled.div`
//   margin-top: 15px;
//   margin-botton: 15px;
//   margin-left: 15px;
//   background-color: lightgrey;
//   border-radius: 25px;
//   width:300px;
// `;

// const StyledCommentTriangle = styled.div`
//   width: 0; 
//   height: 0; 
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   border-left: 10px solid lightgrey;
// `;

// const CommentUser= styled.div`
//   width:50px;
//   height:50px;
//   border-radius:50%;
//   background:red;
// `;


export default Comment;