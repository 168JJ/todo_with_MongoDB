import mongoose from 'mongoose'

const {String, Boolean} = mongoose.Schema.Types

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema)