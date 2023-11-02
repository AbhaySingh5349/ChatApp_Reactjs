import { Schema, model, models, Document } from 'mongoose';

interface MessageInterface extends Document {
  chat: Schema.Types.ObjectId;
  sender: Schema.Types.ObjectId;
  receiver: Schema.Types.ObjectId;
  createdAt: Date;
}

const MessageSchema = new Schema<MessageInterface>(
  {
    chat: { type: Schema.Types.ObjectId },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// check if model already exists, else we creat new
const Message = models.Message || model('Message', MessageSchema);

export { Message };
