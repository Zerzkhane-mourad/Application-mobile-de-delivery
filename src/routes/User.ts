import express from "express";
import { Request, Response  } from "express";
import * as userController from '../controllers/Usercontroller';

const route : any = express.Router();    
route.post('/signup' , userController.SignUp);
route.get('/signin', userController.Login)







export default route