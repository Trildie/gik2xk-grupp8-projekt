import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link, Navigate, useParams } from "react-router-dom";
import Review from "../components/Review";
import { getReviewByUserID, remove } from "../models/userModel";
import { getByUserID } from "../models/userModel";


function Users({ }) {
  const params= useParams;
  const [user, setUser] = useState([]);
  const [reviews, setReview] = useState([]);
  const userId = 1;

    
  useEffect(() => {
    getByUserID(userId).then((user) => setUser(user));
  }, [userId]);

   useEffect(() => {
   getReviewByUserID(userId).then((review) => setReview(review));
   }, [userId]);
  
 /*  function onupdate(product) {
  console.log(product.id);
  remove(product).then(() => navigate('/products',{state: {message:"product removed"}} )); */
  /*   product.id = productId; */
   /*  if (product.id=== 0) {
        console.log("new product created");
        create({ ...product }).then(() => setAlertOpen(true));
    } else {
    console.log("uppdated product");
     update({ ...product }).then(() => setAlertOpen(true));
    }
  } */

  function onDelete(review){ 
  
     console.log(review.id);
  remove(review).then(() => Navigate('/',{state: {message:"review was removed"}} ));
  }
 

  return user ? (
 <>
       <ul>
          <li key={`userId_${user.id}`}></li>
        <div>
          
            <Typography variant="h5" component="h3">
             
             
            </Typography>
            <Typography variant="h5" component="h3"> First Name: {user.f_name}</Typography>
            <br />
            <Typography variant="h5" component="h3">
             Last Name: {user.l_name}
            </Typography>


          <Typography variant="h5" component="h3">
            {reviews &&
        reviews.map((review) => {
            return (
              <li key={`reviewId_${review.id}`}>
                <Review review={review} ></Review>
                 <Link to={`/ReviewEdit/${review.id}`}>
             <EditIcon ></EditIcon>
               </Link> <Button variant="contained" color="primary" startIcon={<DeleteForeverIcon ></DeleteForeverIcon>} onClick={() => onDelete({ ...review })}>
        Delete
      </Button>
              </li>
            );
        })}
            
            
      </Typography>

          </div>
      
        <Typography variant="h5" component="h3">
            Edit User
    <Link to={`/UsersEdit/${userId}`}>
            <EditIcon label="edit User" ></EditIcon>
            
          </Link>
         
        
        </Typography>
        </ul>  
    </>
  ) : (
      <Typography>User is missing

        <EditIcon >{<Link to={`/UsersEdit/${userId}`}> {"Edit user"} </Link>} </EditIcon>
        
      </Typography>
      
  );
}

export default Users;
