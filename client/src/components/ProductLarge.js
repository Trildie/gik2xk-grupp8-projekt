import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function ProductLarge({product}) {
/*   const product = [
    {
      id: 1,
      title: "Monsterhunter World ",
      description:
        "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand.Hunt alone or in co- op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
      price: 300,
      createdAt: "2023-03-14T11:54:38.000z",
      updatedAt: "2023-03-14T11:54:38.000z",
      productImg: {
        imgUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307lWuUhMIK8lvklGLsefZ-ctNgO7fyYGha3AJD3P6cdPMDmAJhJldENfuLZLb_bggUXULYyNwXUeRf6hdo9mda98yhaPU.png'
         
      }
    },
  ]; */

  return (
    <ul>
      {product &&
        product.map((product) => {
          return (
            <li>
              <div>
                <img heigh="200" width="500" src={product.productImg.imgUrl} alt="NEJ"/>
                
              </div>

              <div>
                <Typography variant="h5" component="h3">
                  <Link to={`/productDetails/${product.id}`}> {product.title} </Link> 
                </Typography>
                <Typography> {product.description}</Typography>
                <br />
                <Typography variant="h5" component="h3">
                Price: {product.price}$
                </Typography>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductLarge;
