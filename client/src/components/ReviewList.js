import { List } from '@mui/material';
import Review from './Review';


function ReviewList({ reviews }) {
    
    return ( 
    <List>
        {reviews &&
          reviews.map((review, i) => {
            
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