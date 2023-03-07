const express = require("express");
//const { sanitizeParam } = require('express-validator');

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getValidatedProduct
} = require("../controllers/product.controller");

const router = express.Router();
//const getProductValidation = [  sanitizeParam('id').escape().trim(),];

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", createProduct);

router.patch("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

/*
  Validated route(s)
*/
//  router.get("/validproducts/:id", getProductValidation, getValidatedProduct);
router.get("/validproducts/:id", getValidatedProduct);
module.exports = router;