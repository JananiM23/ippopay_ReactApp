import user from "../dbconfig/model/model";
import { returnError } from "../middleware/ApiResponseHandler";
import httpStatusCode from "http-status-codes";

export default class userService {
    createUser = async (data: any) => {
        try {
            const userData: any = {
                empid: data.empid,
                employeename: data.employeename,
                emailid: data.emailid,
                contactno: data.contactno,
                gender: data.gender,
                role: data.role,
            };
            return await user.create(userData);
        }
        catch(error) {
            console.log(error);
            const status = httpStatusCode.BAD_REQUEST;
            const message = `Something went wrong!`;
            return returnError(status, message);
        }
    };

    getUser = async (data: any) =>{
        try {
            const userDetail = await user.findOne({
                username: data,
            });
            if(userDetail) {
                return true;
            }
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went Wrong!";
            return returnError(status, message);
        }
    };

    getAllUser = async () => {
        try {
            return await user.find();
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong!";
            return returnError(status, message);
        }
    };

    getUserId = async (data: any) => {
        try {
            const userId = await user.find({_id: data});
            if(userId) {
                return true;
            }
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong!";
            return returnError(status, message);
        }
    };
    
    deleteUser = async (id: any) => {
        try {
            const userId = id;
            return user.findByIdAndDelete(userId);
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong!";
            return returnError(status, message);
        }
    };

    updateUser = async (id: any, data: any) => {
        try {
            const updateUser = id;
            const updateDetail = data;
            return await user.findByIdAndUpdate(updateUser, updateDetail, { new: true });
        }
        catch(error) {
            const status = httpStatusCode.BAD_REQUEST;
            const message = "Something went wrong in update!";
            return returnError(status, message);
        }
    };
}