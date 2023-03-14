import Product from "../views/Product";
function ProductList() {
    const product = [
      {
        id: 1,
        title: "Monsterhunter World ",
        description:
          "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand.Hunt alone or in co- op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
        price: 300,
        createdAt: "2023-03-14T11:54:38.000z",
        updatedAt: "2023-03-14T11:54:38.000z",
      },
      {
        id: 2,
        title: "World of warcraft ",
        description: "pk game for noobs and no lifes",
        price: 350,
        createdAt: "2023-03-14T11:54:38.000z",
        updatedAt: "2023-03-14T11:54:38.000z",
      },

      {
        id: 3,
        title: "Goat simulator ",
        description: "Play  as a goat and wreak havoc on people. NUFF SAID",
        price: 30000000,
        createdAt: "2023-03-14T11:54:38.000z",
        updatedAt: "2023-03-14T11:54:38.000z",
      },
    ];

    return (
      <ul>
        {product &&
          product.map((product) => {
            return(
            <li> 
                <product product={product} />
               </li>
              
            );
            })}
      </ul>
    );
}

export default ProductList;