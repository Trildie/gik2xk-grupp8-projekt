const db = require("../models");
const validate = require("validate.js");

const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage,
} = require("../helpers/responseHelper");


async function getProductById(productId){
    try{
        const product = await db.product.findOne({where: {id: productId}});
        return createResponseSuccess(product);
    } catch(error){
        return createResponseError(error.status, error.message);
    }
}



async function getByUser(userId) {
    try {
        const user = await db.user.findOne({ where: { id: userId } });
        const allCarts = await user.getPosts({ include: [db.user, db.product] });
        return createResponseSuccess(allCarts.map((cart) => _formatCart(cart)));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}


async function getById(id) {
    try {
        const cart = await db.findOne({
            where: { id },
            include: [
                db.user,
                db.product, {
                    model: db.review,
                    include: [db.user]
                }
            ]
        });
        return createResponseSuccess(_formatCart(cart)); 
        
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function getAllProducts() {
    try { 
        const allProducts = await db.product.findAll({
            include: [db.review, db.productImg]
        });
        return createResponseSuccess(allProducts.map((product) => _formatProduct(product)));
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
} 

async function getAllUsers() {
  try {
      const allUsers = await db.user.findAll();
    return createResponseSuccess(allUsers.map((user) => _formatUser(user)));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}


async function addReview(id, review){
    if (!id) {
        return createResponseError(422, "Id är obligatoriskt");
      }
      try {
        review.productId = id;
        const newReview = await db.review.createReview(review);
        return createResponseSuccess(newReview);
      } catch (error) {
        return createResponseError(error.status, error.message);
      }
}

async function createReview(review){
    const invalidData = validate(review, constraints); //fixa en constratins som är för reviews
    if(invalidData){
        return createResponseError(422, invalidData);
    } else {
        try{
            const newReview = await db.review.createReview(review);
            await _addCommentToProduct(newReview, );
        } catch (error){
            return createResponseError(error.status, error.message);
        }
    }
}

async function createProduct(){
    
}


async function update(product, id) {
    const invalidData = validate(product, constraints);
    if (!id) {
      return createResponseError(422, "Id is obligatory.");
    }
    if (invalidData) {
      return createResponseError(422, invalidData);
    }
    try {
      const existingProduct = await db.product.findOne({where: {id}});
      if (!existingProduct) {
        return createResponseError(404, "Hittade ingen product att uppdatera.");
      }
      //await _addTagToPost(existingProduct, post.tags);
      await db.product.update(product, { where: { id } });   
      return createResponseMessage(200, "Producten har uppdaterats.");
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
      return createResponseMessage(200, "product was deleted.");
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

//uppdatera så dessa stämmer ;D
module.exports = {
  getProductById,
  getByUser,
  getById,
  getAllProducts,
  getAllUsers,
  addReview,
  create,
  update,
  destroyProduct,
  destroyUser
};
