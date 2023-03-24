import { Typography, Button, Box } from "@mui/material";
import {  useState } from "react";
import {  Link } from "react-router-dom";
import { getProductsById, update, updateCart } from "../models/productModel";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';

function ProductLarge({ product }) {

 
  const [alertOpen, setAlertOpen] = useState(false);
  const [cart, setCart] = useState({  units: (0),userId:(1), products: ([]), });
 
   const [products, setProduct] = useState({ units: (0)});
 
  const cartId=1
  function updateUnits() {

    
    update(product, product.id).then(() => { console.log(product);  setAlertOpen(true)});
}
  function onUpdate() {


    cart.products.push(product);
    
    updateCart(cart, cartId).then(() => { console.log(cart); setAlertOpen(true)});
   
 }

  return product ? (
    <>
      <ul>
        <li key={`productId_${product.id}`}>
          <div>
            <img
              heigh="200"
              width="500"
              src={product.productImg}
              alt="bild på spel"
            />
          </div>

          <div>
            <Typography variant="h5" component="h3">
              {
                <Link to={`/productDetail/${product.id}`}>
                  {" "}
                  {product.title}{" "}
                </Link>
              }
            </Typography>
            <Typography> {product.description}</Typography>
            <br />
            <Typography variant="h5" component="h3">
              Price: {product.price}kr
            </Typography>


            <Box variant="h5" component="h3">
              
              <Button
              size="large"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => onUpdate({ ...cart})}
              variant="contained"
              color="primary"
             
                
              >
              Add to cart
              </Button>
{/* 
              <TextField
              name="productUnits"
              size="small"
              id="outlined-number"
                label=""
                InputProps={{ inputProps: { min: 0} }}
              type="number"
              value={product.units}
              onChange={(e) => setProduct({ ...product, units: parseInt(e.target.value)})}
              InputLabelProps={{
                shrink: true,
              }}/> */}
              
            </Box>

            


          </div>
        </li>
      </ul>
      <Typography variant="h5" component="h3">
        {<Link to={`/productEdit/${product.id}`}> {"Edit product"} </Link>}
      </Typography>
    </>
  ) : (
    <Typography>Product is missing</Typography>
  );
}

export default ProductLarge;
