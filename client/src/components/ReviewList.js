import { List, Rating } from '@mui/material';
import Review from './Review';


function ReviewList({ reviews }) {
  /* const totScore = 0; */
    return ( 
    <List>
        {reviews &&
          reviews.map((review, i) => {

            /* totScore += review.Rating */

            return (
              <li key={`productId_${review.id}`}>
                {/* <ReviewItemSmall review={review.userId} /> */}
                <Review key={`review_${i}`} review={review} />
              </li>
            );
            
          })}
      </List> );
}

export default ReviewList;