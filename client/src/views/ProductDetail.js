import ProductLarge from "../components/ProductLarge";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { Box, Grid, Rating, Typography } from "@mui/material";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addReview, getProductsById } from "../models/productModel";

function ProductDetail() {
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate;
 

  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductsById(productId).then((product) => setProduct(product));
  }, [productId]);
  
  function onReviewAdd(review) {
     console.log(review)
    addReview(productId, review).then((product) => {
      setProduct(product);
      window.location.reload(); 
    });
     
   }

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
          <ReviewForm onSave={onReviewAdd} ></ReviewForm>
          
        </Box>
      

        <Box
          className="ProductDetails__grid-item__content"
          border={2}
          borderTop={1}
        >
          <Typography variant="h4" component="h4">
            Reviews
            
          </Typography>

          {product.reviews && <ReviewList reviews={product.reviews}></ReviewList >}
        </Box>
        </Grid>
      </Grid>
    
  );
}

export default ProductDetail;
