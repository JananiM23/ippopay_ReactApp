import { Router } from "express";
import appRouter from "./appRouter";
import userRouter from "./userRoute";

const router = Router();
const defaultRoute = [
    {
    path: "/app",
    route: appRouter,
    },
    {
        path: "/user",
        route: userRouter,
    }
];

defaultRoute.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;


