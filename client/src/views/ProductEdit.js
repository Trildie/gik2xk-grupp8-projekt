import { Button, TextField } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { create, getOne, remove, update } from '../models/productModel';
import { Link } from 'react-router-dom';

function ProductEdit() {

    const params = useParams();
    const navigate = useNavigate();
    const productId = params.id;
/*     const emptyProduct = {
        id: 0,
        title: '',
        pris: 0,
        description: '',
        imageUrl: []
    }; */
/*     const [product, setProduct] = useState(emptyProduct);
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        getOne(productId).then((product) => setProduct(product));
    }, [productId]);


    function onSave() {
        if (product.id === 0) {
          create({ ...product}).then(() => setAlertOpen(true));
        } else {
          update(product).then(() => setAlertOpen(true));
        }
      } */

//value={product.title}
    return ( 
        <form>
            <TextField fullWidth   name="title" id="title" label="Title" variant="standard" margin="normal"> </TextField>
            <TextField name="description" label="description" fullWidth multiline minRows={7}> </TextField>
            <TextField name="price" label="price" fullWidth> </TextField>
            <TextField name="imgUrl" label="imgUrl" fullWidth> </TextField>

            <Link to={`/products/${productId}/edit`}>
                <Button variant="contained" color="primary">Edit</Button>
            </Link>
            
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} >Spara</Button>
        </form>
    
    
    
    
    
    );
}

export default ProductEdit;