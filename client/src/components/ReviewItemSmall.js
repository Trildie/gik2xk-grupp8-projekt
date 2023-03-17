import { Typography } from "@mui/material";
import UserSmall from "./UserSmall";

function ReviewItemSmall({ review }) {
    const author = review.author;
  return (
    <>
    <UserSmall user={author}/>
      <div>
        <Typography variant="h5" component="h3">
        </Typography>
        <Typography> {review.summary}</Typography>
        <Typography variant="h5" component="h3">
          Rating: {review.rating}/5
        </Typography>
      </div>
    </>
  );
}

export default ReviewItemSmall;
