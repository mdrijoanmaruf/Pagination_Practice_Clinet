import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  // if cart data is in database, you have to use async await
  const storedCart = getShoppingCart();
  const storedCartIdes = Object.keys(storedCart);
  console.log(storedCartIdes);

  const loadedProducts = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(storedCartIdes),
  });
  const products = await loadedProducts.json();
  console.log(loadedProducts);

  const savedCart = products;

//   for (const id in storedCart) {
//     const addedProduct = products.find((pd) => pd._id === id);
//     if (addedProduct) {
//       const quantity = storedCart[id];
//       addedProduct.quantity = quantity;
//       savedCart.push(addedProduct);
//     }
//   }

  // if you need to send two things
  // return [products, savedCart]
  // another options
  // return { products, cart: savedCart }

  return savedCart;
};

export default cartProductsLoader;
