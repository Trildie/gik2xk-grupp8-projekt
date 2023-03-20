import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';



function ProductSmall({product}) {
  return (
    <>
      <div>
        <img heigh="200" width="500" src={product.productImg.imgUrl} alt="NEJ"/>
      </div>

      <div>
        <Typography variant="h5" component="h3">
          <Link to={`/productDetail/${product.id}`}>{product.title}</Link>
        </Typography>
        <Typography> {product.description}</Typography>
        <Typography variant="h5" component="h3">
          Price: {product.price}$
        </Typography>
      </div>
    </>
  );
}

export default ProductSmall;
