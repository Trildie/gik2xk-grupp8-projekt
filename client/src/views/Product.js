import ProductList from "../components/ProductList";
import { Grid } from "@mui/material";

function Product({ product }) {
    return (
      <div>
        {product.title}
        {product.price}
      </div>
      /*    <Grid container columnSpacing={2} className="Product">
      <Grid className="ProductList__grid-item" item xs={12} md={4}>
        
      </Grid>
      <Grid className="ProductList__grid-item" item xs={12} md={4}>
        {<ProductList></ProductList>}
      </Grid>
      <Grid className="ProductList__grid-item" item xs={12} md={4}>
        {<ProductList></ProductList>}
      </Grid>
    </Grid> */
    );
}

export default Product;
