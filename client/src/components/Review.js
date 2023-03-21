import ReviewItemSmall from "./ReviewItemSmall";

function Review({reviews}) {
    
    return ( 
    <ul>
        {reviews &&
          reviews.map((review) => {
            
            return (
              <li key={`productId_${review.id}`}>
                {/* <ReviewItemSmall review={review.userId} /> */}
                <ReviewItemSmall review={review} />
              </li>
            );
            
          })}
      </ul> );
}

export default Review;