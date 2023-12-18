import { Request, Response } from "express";

export default class appController {
    welcome = async (req: Request, res: Response) => {
        try {
            res.send("Welcome to the controller");
            console.log("Your request done");
        }
        catch(error) {
            res.send(error);
            console.log("Something went wrong!");
        }
    }
}