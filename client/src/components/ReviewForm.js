import { Alert, Button, Rating, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
/* import { create } from "../models/productModel"; */
import { addReview } from "../models/productModel";

  
/*   function onSave() {
    if (product.id === 0) {
      create
    } */
    

function ReviewForm({onSave}) {
  const [review, setReview] = useState({ summary: "", rating: 0 });
  const [alertOpen, setAlertOpen] = useState(false);


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
            rating: parseFloat(e.target.value),
          })
        }
      />
      <Button
        startIcon={<SaveIcon />}
        onClick={() => onSave({ ...review, userId: 1 })}
        variant="contained"
        color="primary"
      >
        Spara
      </Button>
    </form>
  );
}

export default ReviewForm;

//

{
  /* <Button
        startIcon={<SaveIcon />}
        onClick={() => (onSave = { onReviewAdd })}
        variant="contained"
        color="primary"
      >
        Spara
      </Button>*/
}