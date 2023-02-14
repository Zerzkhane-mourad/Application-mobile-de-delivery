import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    role: string
}