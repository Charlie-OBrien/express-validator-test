const { body } = require('express-validator');



const createUserValidations = [  body('email').isEmail(),  body('password').isLength({ min: 6 })];


module.exports = {
    createUserValidations
}