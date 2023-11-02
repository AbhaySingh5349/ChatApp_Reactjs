import { Schema, model, models, Document } from 'mongoose';

interface ChatInterface extends Document {
  chatName: string;
  isGroupChat: boolean;
  users: Schema.Types.ObjectId[];
  latestMessage: Schema.Types.ObjectId;
  groupAdmin: Schema.Types.ObjectId;
  createdAt: Date;
}

const ChatSchema = new Schema<ChatInterface>({
  chatName: { type: String, required: true, unique: true },
  isGroupChat: { type: Boolean, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  latestMessage: { type: Schema.Types.ObjectId, ref: 'Message' },
  groupAdmin: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

// check if model already exists, else we creat new
const Chat = models.Chat || model('Chat', ChatSchema);

export { Chat };
