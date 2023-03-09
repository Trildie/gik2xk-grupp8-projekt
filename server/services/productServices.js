const db = require("../models");
const validate = require("validate.js");

const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage,
} = require("../helpers/responseHelper");

module.exports = {
    getByTagName,
    getByProduct,
    getByUser,
    getById,
    getAll,
    addReview,
    create,
    update,
    destroy
};
