import express from "express";
//import { homelist, homeid } from "../controllers/homeController";
import userController from "../controllers/homeController";

const route = express.Router();

route.get('/home', userController.getAllUser)
route.get('/home/:id', userController.getUser)
route.post('/home/adduser', userController.addUser)
route.post('/home/deleteUser/:id', userController.deleteUser)
route.post('/home/updateUser/:id', userController.updateUser)

export default route;