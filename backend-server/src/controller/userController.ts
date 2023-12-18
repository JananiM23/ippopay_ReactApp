import { Request, Response } from "express";
import userService from "../service/userService";
import httpStatusCode, { StatusCodes } from "http-status-codes";
import { returnSuccess, returnError } from "../middleware/ApiResponseHandler";


const UserService = new userService();

export default class userController {
    createUser = async (req: Request, res: Response) => {
        try {
            const data = req.body;
            const userData = await UserService.createUser(data).then((data) => {
                const responseData = data;
                if(!responseData) {
                    return `Error`;
                } else {
                    return responseData;
                }
            });

            const status = httpStatusCode.OK;
            const messge = "User details created successfully";
            const resultData: any = userData;
            res.json(returnSuccess(status, messge, resultData));
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong";
            res.json(returnError(status, message));
        }
    };

    getAllUser = async (req: Request, res: Response) => {
        try {
            const data = await UserService.getAllUser().then((data) => {
                return data;
            });
            const status = httpStatusCode.OK;
            const message = "All user details listed";
            const responseData = data;
            res.json(returnSuccess(status, message, responseData));
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong!--Error while retrieve the data";
            res.json(returnError(status, message));
        }
    };

    updateUser = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const data = req.body;

            const checkUserId = await UserService.getUserId(userId).then((data) => {
                return data;
            });

            if(!checkUserId) {
                const status = httpStatusCode.FORBIDDEN;
                const message = "Invalid user";
                res.json(returnError(status, message));
            }
            else {
                const updateDetail = await UserService.updateUser(userId, data).then((data) => {
                    return data;
                });

                if (!updateDetail) {
                    const status = httpStatusCode.FORBIDDEN;
                    const message = "Error when updating record";
                    res.json(returnError(status, message));
                } 
                else {
                    const status = httpStatusCode.OK;
                    const message = "User details updated successfully";
                    const response = updateDetail;
                    res.json(returnSuccess(status, message, response));
                }
        }
    }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong!";
            res.json(returnError(status, message));
        }
    };

    deleteUser = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const checkUserId = await UserService.getUserId(userId).then((data) => {
                return data;
            });

            if (!checkUserId) {
                const status = httpStatusCode.FORBIDDEN;
                const message = "invalied user";
                res.json(returnError(status, message));
            }

            const userData = await UserService.deleteUser(userId).then((data) => {
                return data;
            });
            if(!userData) {
                const status = httpStatusCode.FORBIDDEN;
                const message = "Error comes in delete user data";
                res.json(returnError(status, message));
            }
            else {
                const status = httpStatusCode.OK;
                const message = "User details deleted";
                const responseData = {id: userId};
                res.json(returnSuccess(status, message));
            }
        }
        catch(error) {
            const status = httpStatusCode.INTERNAL_SERVER_ERROR;
            const message = "Server internal error";
            res.json(returnError(status, message));
        }
    }
}