import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/authMiddleware.js";

//Middleware to protect route
router.use('/changeuserpassword',checkUserAuth)
router.use('/logged-user',checkUserAuth)


//Public Routes
router.post('/register',UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/send-password-reset-email',UserController.sendPasswordReset)
router.post('/user-password-reset/:id/:token',UserController.userPasswordReset)

//Protected Routes
router.post('/changeuserpassword',UserController.changeUserPassword)
router.get('/logged-user',UserController.loggedUser)


export default router