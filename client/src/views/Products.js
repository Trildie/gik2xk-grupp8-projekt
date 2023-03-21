import ProductList from "../components/ProductList";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';
import "./Products.css"
import { Container } from '@mui/material';
import ProductLarge from "../components/ProductLarge";
//p är padding

function Products() {
  const location = useLocation();
  return (
    /* 
    <Grid container columnSpacing={2} p={1} className="ProdMenu">

      <Grid className="Product__grid-item" item xs={12} md={4}>
        <Box className="Product__grid-item-content">
          <Typography variant="h4" component="h2">Product</Typography>
          <ProductList pathname={location.pathname}></ProductList>
        </Box>
      </Grid>

      <Grid className="Product__grid-item" item xs={12} md={4}>
        <h2>test</h2>
      </Grid>

      <Grid className="Product__grid-item" item xs={12} md={4}>
        <h2>test</h2>
      </Grid>

    </Grid> */

  
    <Container maxWidth="md">
      
      <ProductList pathname={location.pathname} />
    </Container>
  );
  
}

export default Products;
