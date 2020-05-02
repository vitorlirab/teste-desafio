import { Schema, model } from 'mongoose';

const LoginSchema = new Schema(
  {
    username: String,
  },
  {
    timestamps: true,
  }
);

export default model('Login', LoginSchema);
