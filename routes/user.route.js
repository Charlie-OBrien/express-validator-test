const express = require("express");


const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getValidatedUser
  } = require("../controllers/user.controller");

  const {
    createUserValidations,
  } = require("../validators/user.validator");
  
  const router = express.Router();
  
  router.get("/users", getUsers);
  
  router.get("/users/:id", getUser);
  
router.post('/users', createUserValidations, createUser);   //  WORKS

  //router.post("/users", createUser);
  
  router.patch("/users/:id", updateUser);
  
  router.delete("/users/:id", deleteUser);
  
  /*
    Validated route(s)
  */
  //  router.get("/validusers/:id", getProductValidation, getValidatedUser);
  router.get("/validusers/:id", getValidatedUser);
  
  
  module.exports = router;