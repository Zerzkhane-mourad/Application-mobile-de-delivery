import mongoose from 'mongoose';
import { UserDocument } from '../interface/userinterface';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role :{
    type: String,
    required: true
  }
});

export const User = mongoose.model<UserDocument>('User', userSchema);
