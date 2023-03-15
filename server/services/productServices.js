const db = require("../models");
const validate = require("validate.js");

const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

//Tar imot ett produkt ID och hämtar ut produkten med det ID:t
//lägg till hämta kommentar och betyg
async function getProductById(productId) {
  try {
    const product = await db.product.findOne({ where: { id: productId } });
    //return createResponseSuccess(_formatProduct(product));

    return createResponseSuccess(product);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//Tar imot ett userID, väntar och hittar användaren med det ID.
//
/* async function getByUser(userId) {
  try {
    const user = await db.user.findOne({ where: { id: userId }});
    const allCarts= await user.getCarts({include: [
      db.cart
      ]});
    return createResponseSuccess(allCarts.map((cart)=> _formatCart(cart)));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
} */

//Hämtar cart och dess produkter via user id.
async function getByUser(userId) {
  try {
    const cart= await db.cart.findOne({
      where: {userId },
      include: [
        db.user,
        db.product
      ],
    });
    /* return createResponseSuccess(cart); */
    return createResponseSuccess(_formatCart(cart));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
//get user by id
async function getByUserID(userId) {
  try {
    const user = await db.user.findOne({ where: { id: userId }
        });
    return createResponseSuccess(user);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//För cart!  check
async function getById(id) {
  try {
    const cart = await db.cart.findOne({
      where: { id },
      include: [
        db.user,
        db.product
        
      ],
    });
    return createResponseSuccess(_formatCart(cart));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//Hämta alla produkter
//check
async function getAllProducts() {
  try {
    const allProducts = await db.product.findAll({
      include: [db.review, db.productImg],
    });
    return createResponseSuccess(
      allProducts.map((product) => _formatProduct(product))
    );
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
//get all users
async function getAllUsers() {
  try {
    const allUsers = await db.user.findAll();
    return createResponseSuccess(allUsers.map((user) => _formatUser(user)));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//Add review till produkt
async function addReview(id, review) {
  if (!id) {
    return createResponseError(422, "Id is obligatory");
  }
  try {
    review.productId = id;
    const newReview = await db.review.createReview(review);
    return createResponseSuccess(newReview);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function createReview(review) {
  const invalidData = validate(review, constraints); //fixa en constratins som är för reviews
  if (invalidData) {
    return createResponseError(422, invalidData);
  } else {
    try {
      const newReview = await db.review.createReview(review);
      await _addReviewToProduct(newReview);
      return createResponseSuccess(newReview);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
}


/* async function createProduct(product) {
  const invalidData = validate(product, constraints); 
  if (invalidData) {
    return createResponseError(422, invalidData);
  } else {
    try {
      const newProduct = await db.product.create(product);
      await _addProduct(newProduct);
      return createResponseSuccess(newProduct);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
} */

async function updateProduct(product, id) {
  const invalidData = validate(product, constraints);
  if (!id) {
    return createResponseError(422, "Id is obligatory.");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.product.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Found no product to update.");
    }
    //await _addTagToPost(existingProduct, post.tags);
    await db.product.update(product, { where: { id } }); //funkar inte dubbelkolla detta
    return createResponseMessage(200, "Product has been updated.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function updateReview(review, id) {
  const invalidData = validate(review, constraints);
  if (!id) {
    return createResponseError(422, "Id is obligatory.");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.review.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Found no review to update.");
    }
    //await _addTagToPost(existingProduct, post.tags);
    await db.review.update(review, { where: { id } }); //funkar inte dubbelkolla detta
    return createResponseMessage(200, "Review has been updated.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function updateCart(cart, id) {
  const invalidData = validate(cart, constraints);
  if (!id) {
    return createResponseError(422, "Id is obligatory.");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.cart.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Found no cart to update.");
    }
    //await _addTagToPost(existingProduct, post.tags);
    await db.cart.update(cart, { where: { id } }); //funkar inte dubbelkolla detta
    return createResponseMessage(200, "Cart has been updated.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroyProduct(id) {
  if (!id) {
    return createResponseError(422, "Id is obligatory.");
  }
  try {
    await db.product.destroy({ where: { id } });
    return createResponseMessage(200, "Product was deleted.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
async function destroyUser(id) {
  if (!id) {
    return createResponseError(422, "Id is obligatory.");
  }
  try {
    await db.user.destroy({ where: { id } });
    return createResponseMessage(200, "user was deleted.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroyReview(id) {
  if (!id) {
    return createResponseError(422, "Id is obligatory.");
  }
  try {
    await db.review.destroy({ where: { id } });
    return createResponseMessage(200, "Review was deleted.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

function _formatProduct(product) {
  const cleanProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };

  return cleanProduct;
}
function _formatCart(cart) {
  const cleanCart = {
    id: cart.id,
    units: cart.units,
    total_amount: cart.total_amount,
    createdAt: cart.createdAt,
    updatedAt: cart.updatedAt,
    user: {
      id: cart.user.id,
      email: cart.user.email,
      f_name: cart.user.f_name,
      l_name: cart.user.l_name,
      
    }, 
  };
  
  return cleanCart;
}

function _formatUser(user) {
  const cleanUser = {
    id: user.id,
    email: user.email,
    f_name: user.f_name,
    l_name: user.l_name,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
 
   
  };

  return cleanUser;
}

function _addProduct(product) {
  const NewProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
   
  };

  return NewProduct;
}
//uppdatera så dessa stämmer ;D gjort!
module.exports = {
  getProductById,
  getByUser,
  getById,
  getAllProducts,
  getAllUsers,
  addReview,
  createReview,
  updateProduct,
  updateReview,
  updateCart,
  destroyProduct,
  destroyUser,
  destroyReview,
  getByUserID,
};
