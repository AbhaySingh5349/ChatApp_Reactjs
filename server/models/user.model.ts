import { Schema, models, model, Document } from 'mongoose';

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// check if model already exists, else we creat new
const User = models.User || model('User', UserSchema);

export { User };
