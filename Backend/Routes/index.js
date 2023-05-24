const express= require('express');
const router = express.Router();
const authController=require('../Controller/authController');
const blogController=require('../Controller/blogController');
const auth = require('../Middleware/auth');
const commentController=require('../Controller/commentController');

//USER
//Register
router.post('/register', authController.register);
//Login
router.post('/login', authController.login);
//Logout
router.post('/logout', auth , authController.logout);
//refresh
router.get('/refresh', authController.refresh);
//blog

//create
router.post('/blog', auth , blogController.create);

//get all
router.get('/blog/all', auth , blogController.getAll);

//get blog by id
router.get('/blog/:id', auth , blogController.getById);

//update
router.put('/blog/:id', auth , blogController.update);

//delete
router.delete('/blog/:id', auth , blogController.delete);

//comment
//create

router.post('/comment', auth , commentController.create);

//get

router.get('/comment/:id', auth , commentController.getById);

module.exports = router;