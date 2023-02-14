import express from "express";
import UserAuthentication from '../controllers/Usercontroller';
import errorHandling from "../middlewares/errorHandling";

const route : any = express.Router();    

route.post('/signup' , UserAuthentication.signUp);
route.get('/signin', UserAuthentication.login)
route.use( errorHandling )


export default route