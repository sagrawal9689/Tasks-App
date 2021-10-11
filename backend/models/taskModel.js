import mongoose from 'mongoose'


const taskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
  }
)

const Task = mongoose.model('Product', taskSchema)

export default Task
