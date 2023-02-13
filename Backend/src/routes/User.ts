import express from "express";
import { Request, Response  } from "express";
import UserAuthentication from '../controllers/Usercontroller';

const route : any = express.Router();    
route.post('/signup' , UserAuthentication.signUp);
route.get('/signin', UserAuthentication.login)







export default route