import ProductLarge from "../components/ProductLarge";
import {Grid} from "@mui/material";
import "./ProductDetail.css"

function ProductDetail() {
    return <Grid container columnSpacing={2} className="ProductDetail">
        <Grid className="ProductDetail__grid-item" item xs={12} md={8}>
            {<ProductLarge></ProductLarge>}
        </Grid>
        <Grid className="ProductDetail__grid-item" item xs={12} md={4}><h2>Insert reviews here</h2></Grid>
    </Grid>;
}

export default ProductDetail;