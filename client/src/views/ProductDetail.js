import ProductLarge from "../components/ProductLarge";
import Review from "../components/Review";
import ReviewForm from "../components/ReviewForm";
import {Box, Grid, Typography} from "@mui/material";
import "./ProductDetail.css"

function ProductDetail() {

    const product = [
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
             
          },         
        },
      ];

      const prodRev= product.review;


    return <Grid container columnSpacing={2} className="ProductDetail">
        <Grid className="ProductDetails__grid-item" item xs={12} md={8} >
            <Typography variant="h4" component="h2">Product</Typography>
            {<ProductLarge product={product} />}
        </Grid>

        <Grid className="ProductDetails__grid-item" item xs={12} md={4} >
            <Box className="ProductDetails__grid-item__content" border={2} borderBottom={1}>
                <Typography variant="h4" component="h2">ReviewForm</Typography>
                <ReviewForm></ReviewForm>
            </Box>

            <Box className="ProductDetails__grid-item__content" border={2} borderTop={1}>
                <Typography variant="h4" component="h4">Reviews</Typography>
                <Review />
            </Box>
        </Grid>

        

    </Grid>;
}

export default ProductDetail;