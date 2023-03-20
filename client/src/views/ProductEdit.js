import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

function ProductEdit() {

    const params = useParams();
    console.log(params);
    return ( 
        <form>
            <TextField name="title" label="title" fullWidth> </TextField>
            <TextField name="description" label="description" fullWidth multiline minRows={7}> </TextField>
            <TextField name="price" label="price" fullWidth> </TextField>
            <TextField name="imgUrl" label="imgUrl" fullWidth> </TextField>
            <Button variant="contained" color="primary">test</Button>
            <Button variant="contained" color="primary">Spara</Button>
        </form>
    
    
    
    
    
    );
}

export default ProductEdit;