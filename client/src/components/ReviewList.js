import { List, Rating } from '@mui/material';
import Review from './Review';


function ReviewList({ reviews }) {
  let totScore = 0;
  let g = 0;
  /* console.log(reviews.len()); */
    return ( 
      <>
        Average Rating
        <Rating
        name="half-rating-read"
          defaultValue={2.5}
        
          precision={0.1}
        readOnly
        />
        <List>
            {reviews &&
              reviews.map((review, i) => {
                
                totScore += review.rating
                g=g+1

                return (
                  <li key={`productId_${review.id}`}>
                    {/* <ReviewItemSmall review={review.userId} /> */}
                    
                    <Review key={`review_${i}`} review={review} />
                  </li>
                );
                
              })}
            {console.log(totScore/g)}
          </List> 
      </>);
}

export default ReviewList;