
import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  content: string;
  isDone: boolean;
}

const TodoSchema: Schema = new Schema({
    content: { type: String, required: true },
  isDone: { type: Boolean, default: false },
},
{timestamps:true}
);
// Define a virtual property 'id' based on '_id'
TodoSchema.virtual('id').get(function (this: ITodo) {
  return this._id.toHexString();
});
TodoSchema.set('toJSON', { virtuals: true });

const TodoModel = mongoose.model<ITodo>('Todo', TodoSchema);

export default TodoModel;
