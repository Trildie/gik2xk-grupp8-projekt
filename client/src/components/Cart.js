import {Box } from "@mui/material";
import { useEffect, useState } from 'react';
import { getCartById } from '../models/cartModel'

function Cart() {
   

   
    const [cart, setCart] = useState({});
 
    useEffect(() => {
        getCartById(1).then((cart) => setCart(cart));
    }, []);
    
    cart.total_amount= 0;

    return ( 

        <>
            
            <Box border={5} borderColor="gray">
                <ul>          
                    
                    {cart.products &&
                        cart.products.map((product) => {
                            cart.total_amount += (product.price * product.units)
                            
                            return (
                            
                                <li key={`productId_${product.id}`}>
                                     <img
                                        heigh="100"
                                        width="100"
                                        src={product.productImg}
                                        alt="bild på spel"
                                    /> <br></br>
                                    Title: {product.title}  
                                    
                                    <br></br>
                             Units: {product.units}
                             <br></br>
                            Price: {product.price}kr
                            </li>
                        );
                        
                        })}
                </ul>
                Total Price: {cart.total_amount} $
            </Box>
       </>

        
     );
}

export default Cart;