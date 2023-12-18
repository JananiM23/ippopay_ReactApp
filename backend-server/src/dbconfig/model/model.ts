import { Schema, model } from "mongoose";
import IUser from "../interface/userInterface";

const userSchema = new Schema<IUser>(
    {
    empid: {
        type: String,
        required: true,
    },
    employeename: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
    },
    contactno: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
},
{
    timestamps: false,
}
);

const user = model<IUser>("user", userSchema);
export default user;