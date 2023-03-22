import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import ReviewList from "../components/ReviewList";
import { getByUserID } from "../models/userModel";


function Users({ pathname }) {
  const params= useParams;
  const [user, setUser] = useState([]);
   const userId = 3;

  
  useEffect(() => {
    getByUserID(userId).then((user) => setUser(user));
  }, [userId]);

   
  
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






          </div>
      
        <Typography variant="h5" component="h3">
          {/* {product.reviews && <ReviewList reviews={product.reviews}></ReviewList >} */}
        {<Link to={`/UsersEdit/${userId}`}> {"Edit user"} </Link>}
        </Typography>
        </ul>  
    </>
  ) : (
    <Typography>User is missing</Typography>
  );
}

export default Users;
