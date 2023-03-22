import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsById, addProductToCart } from "../models/productModel";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';

function ProductLarge({ product }) {
  /*     console.log("HEJ");
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
      getProductsById(pathname).then((products) => setProducts(products));
    }, [pathname]);
    console.log(products);
 */
    
    const [ammount, setAmmount] = useState({productUnits: "", ammount:0});
    const userId = 3;

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


            <Typography variant="h5" component="h3">
              
              <Button
              size="large"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => addProductToCart({ product, userId , ammount})}
              variant="contained"
              color="primary"
              key={``}
              >
              Add to cart
              </Button>

              <TextField
              name="productUnits"
              size="small"
              id="outlined-number"
                label=""
                InputProps={{ inputProps: { min: 0} }}
              type="number"
              value={ammount.productUnits}
              onChange={(e) => setAmmount({ ammount, productUnits: e.target.value })}
              InputLabelProps={{
                shrink: true,
              }}/>

            </Typography>

            


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
