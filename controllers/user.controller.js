const { validationResult, body } = require('express-validator');




/* 
  Model
*/
const User = require("../models/user.model");


const getUsers = async (request, response, next) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error);
   return next(error)
  }
};

//  Get single user by Id
const getUser = async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
    return next(error)
  }
};


// const createUser = async (request, response) => {
//   try {
    
//     const user = await User.create(request.body);
    
//     response.status(201).json(user);
//   } catch (error) {
//     response.status(500).json(error);
//   }
// };

const createUser = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
  
      const user = await User.create(req.body);
      
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const updateUser = async (request, response) => {
  try {
    const user = await User.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};


const deleteUser = async (request, response) => {
  try {
    const user = await User.findByIdAndDelete(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};


/* 
    express-validator controllers
*/
const getValidatedUser = async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findById(request.params.id);
    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};

const createValidUser = async (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.create(request.body);
    response.status(201).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};




module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getValidatedUser,
  createValidUser
};