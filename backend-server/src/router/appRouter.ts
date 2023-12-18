import { Router } from "express";
import Controller from "../controller/appController";

const router = Router();
const controller = new Controller();

router.get("/appResponse", controller.welcome);

export default router;