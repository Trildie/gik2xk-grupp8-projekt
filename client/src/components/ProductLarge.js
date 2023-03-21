import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductsById } from "../models/productModel";

function ProductLarge({ product }) {
  /*     console.log("HEJ");
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
      getProductsById(pathname).then((products) => setProducts(products));
    }, [pathname]);
    console.log(products);
 */
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
              Price: {product.price}$
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
