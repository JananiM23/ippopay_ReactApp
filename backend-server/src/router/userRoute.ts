import { Router } from "express";
import userController from "../controller/userController";

const UserController = new userController();
const route = Router();

route.post("/create", UserController.createUser);
route.put("/update/:id", UserController.updateUser);
route.get("/all", UserController.getAllUser);
route.delete("/delete/:id", UserController.deleteUser);

export default route;