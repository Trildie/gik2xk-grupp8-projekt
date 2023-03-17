import ProductList from "../components/ProductList";
import { Box, Grid, Typography } from "@mui/material";
import "./Product.css"

//p är padding

function Product({ product }) {
  return (
    <Grid container columnSpacing={2} p={1} className="ProdMenu">

      <Grid className="Product__grid-item" item xs={12} md={4}>
        <Box className="Product__grid-item-content">
          <Typography variant="h4" component="h2">Product</Typography>
          <ProductList></ProductList>
        </Box>
      </Grid>

      <Grid className="Product__grid-item" item xs={12} md={4}>
        <h2>test</h2>
      </Grid>

      <Grid className="Product__grid-item" item xs={12} md={4}>
        <h2>test</h2>
      </Grid>

    </Grid>
  );
}

export default Product;
