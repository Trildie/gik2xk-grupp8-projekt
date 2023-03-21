import ProductLarge from "../components/ProductLarge";
import Review from "../components/Review";
import ReviewForm from "../components/ReviewForm";
import { Box, Grid, Rating, Typography } from "@mui/material";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsById } from "../models/productModel";

function ProductDetail() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductsById(productId).then((product) => setProduct(product));
  }, [productId]);

  return (
    <Grid container columnSpacing={2} className="ProductDetail">
      <Grid className="ProductDetails__grid-item" item xs={12} md={8}>
        <Typography variant="h4" component="h2">
          Product
        </Typography>
        {<ProductLarge product={product} />}
      </Grid>

      <Grid className="ProductDetails__grid-item" item xs={12} md={4}>
        <Box
          className="ProductDetails__grid-item__content"
          border={2}
          borderBottom={1}
        >
          <Typography variant="h4" component="h2">
            ReviewForm
          </Typography>
          <ReviewForm></ReviewForm>
        </Box>

        <Box
          className="ProductDetails__grid-item__content"
          border={2}
          borderTop={1}
        >
          <Typography variant="h4" component="h4">
            Reviews
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </Typography>

          <Review reviews={product.reviews} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductDetail;
