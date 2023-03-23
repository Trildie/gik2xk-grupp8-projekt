import {Box, Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { getCartById } from '../models/cartModel'

function Cart() {
   
    const cartTest = {
        id: 1,
        units: 4,
        total_amount: 0,
        createdAt: "2023-03-22T12:50:22.000Z",
        updatedAt: "2023-03-22T12:50:22.000Z",
        user: {
            id: 1,
            email: "tokvi@du.se",
            f_name: "Thomas",
            l_name: "Kvist"
        },
        products: [{
            id: 1,
            title: "monster Hunter World ",
            description: "sahudhasfhaf afgasfsaf",
            price: 300,
            productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc9DMETl9AlCTuR4di8yrLzek7Vi9o98SwA&usqp=CAU",
            createdAt: "2023-03-22T12:02:24.000Z",
            updatedAt: "2023-03-22T12:02:24.000Z",
        },
/*         {
            id: 2,
            title: "Space hunter",
            description: "sahudhasfhaf afgasfsaf",
            price: 300,
            productImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc9DMETl9AlCTuR4di8yrLzek7Vi9o98SwA&usqp=CAU",
            createdAt: "2023-03-22T12:02:24.000Z",
            updatedAt: "2023-03-22T12:02:24.000Z",
        }, */
    ]
    }
   
    const [cart, setCart] = useState({});
    useEffect(() => {
        getCartById(1).then((cart) => setCart(cart));
    }, [1]);
    
    

    return ( 

        <>
            
            <Box border={5} >
                <ul>          
                    
                    {cart.products &&
                        cart.products.map((product) => {
                            cart.total_amount += product.price
                            
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