import { Rating, Typography } from "@mui/material";
import UserSmall from "./UserSmall";

function ReviewItemSmall({ review }) {
    const author = review.userId;

  return (
    <>
      {/* <UserSmall user={author}/> */}
      <div>
        <Typography variant="h5" component="h3"></Typography>
        <Typography> {review.summary}</Typography>
        <Typography variant="h5" component="h3">
          <Rating
            name="half-rating-read"
            defaultValue={review.rating}
            precision={0.5}
            readOnly
          />
        </Typography>
      </div>
    </>
  );
}

export default ReviewItemSmall;
