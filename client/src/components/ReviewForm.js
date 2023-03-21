import { Button, Rating, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

function ReviewForm(onSave) {
  const [review, setReview] = useState({ summary: "", rating: (0)});

  return (
    <form>
      <TextField
        name="summary"
        label="Summary"
        fullWidth
        multiline
        minRows={5}
        value={review.summary}
        onChange={(e) => setReview({ ...review, summary: e.target.value })}
      ></TextField>

      <Rating
        name="half-rating"
        value={review.rating}
        precision={0.5}
        onChange={(e) =>
          setReview({
            ...review,
            rating: parseFloat(e.target.value)
          })
        }
      />

      <Link to={`/products/${1}/createReview`}>
        <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
          Spara
        </Button>
      </Link>
    </form>
  );
}

export default ReviewForm;
