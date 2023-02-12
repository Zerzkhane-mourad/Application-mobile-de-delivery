import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  role: string
}

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
