const express = require("express");
const { body, validationResult } = require('express-validator');

const createUserValidations = [  body('email').isEmail(),  body('password').isLength({ min: 6 })];

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getValidatedUser
  } = require("../controllers/user.controller");

  const {
    userValidationRules,
    validate
  } = require("../validators/user.validator");
  
  const router = express.Router();
  //const getProductValidation = [  sanitizeParam('id').escape().trim(),];
  
  router.get("/users", getUsers);
  
  router.get("/users/:id", getUser);
  
router.post('/users', createUserValidations, createUser);
  //router.post("/users", createUser);
  
  router.patch("/users/:id", updateUser);
  
  router.delete("/users/:id", deleteUser);
  
  /*
    Validated route(s)
  */
  //  router.get("/validusers/:id", getProductValidation, getValidatedUser);
  router.get("/validusers/:id", getValidatedUser);
  
  
  module.exports = router;