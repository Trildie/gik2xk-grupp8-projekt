import ReviewItemSmall from "./ReviewItemSmall";

function Review({}) {
    const reviews = [
        {
          id: 1,
          rating: 4,
          summary: "Welcome to a new world!",
          createdAt: "2023-03-14T11:54:38.000z",
          updatedAt: "2023-03-14T11:54:38.000z",
          userId: 3,
          productId: 1,
          product: {
            productId: 1,
            title: "Monster Hunter World"
          },
          author: {
            userId: 3,
            fName: "Pär"
          }
          
        }
    ]
    return ( 
    <ul>
        {reviews &&
          reviews.map((review) => {
            return (
              <li key={`productId_${review.id}`}>
                <ReviewItemSmall review={review} />
              </li>
            );
          })}
      </ul> );
}

export default Review;