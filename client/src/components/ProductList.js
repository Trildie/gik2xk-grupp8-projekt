
import ProductSmall from "./ProductSmall";
import{ getAllProducts } from '../models/productModel'
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(products => setProducts(products));
   }, []);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
