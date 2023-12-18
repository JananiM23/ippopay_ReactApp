import { Document } from "mongoose";

interface IUser extends Document {
    empid: string;
    employeename: string;
    emailid: string;
    contactno: string;
    gender: string;
    role: string;
}

export default IUser;