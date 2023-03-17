
import ProductSmall from "./ProductSmall";

function ProductList() {
  const products = [
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
    {
      id: 2,
      title: "World of warcraft ",
      description: "pk game for noobs and no lifes",
      price: 350,
      createdAt: "2023-03-14T11:54:38.000z",
      updatedAt: "2023-03-14T11:54:38.000z",
      productImg: {
        imgUrl: 'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta92532f65503fe38/625e11e2a8b3c644a288f3a4/WoW_Dragonflight_EN.png?width=320&format=webply&dpr=2&disable=upscale&quality=80'         
      }
    },

    {
      id: 3,
      title: "Goat simulator ",
      description: "Play  as a goat and wreak havoc on people. NUFF SAID",
      price: 30000000,
      createdAt: "2023-03-14T11:54:38.000z",
      updatedAt: "2023-03-14T11:54:38.000z",
      productImg: {
        imgUrl: 'https://image.api.playstation.com/cdn/EP4415/CUSA02779_00/05UDaF6g0ZyfhUZdSg5xgRRpuNBDep4Q.png'         
      }
    },
  ];

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
