import Todo from 'models/Todo'

import connectDB from 'utils/connectDB'
connectDB

const handleUpdateRequest = async (req,res) => {
    const { _id } = req.query
    console.log('req ', req.body)
    try {
        const todo = await Todo.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true})
        res.status(204).json({})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: `Error removing task`})
    }
}

const handleDeleteRequest = async (req,res) => {
    const { _id } = req.query
    try{
        const todo = await Todo.findOneAndDelete({_id})
        res.status(204).json({})
    } catch (error){
        console.error(error)
        res.status(500).json({ error: `Error removing task`})
    }
}
export default async (req,res) => {
    switch (req.method) {
        case 'DELETE':
            await handleDeleteRequest(req, res)
            break
        case 'PUT':
            await handleUpdateRequest(req, res)
            break
        default:
            res.status(405).json({ error: `Method ${req.method} not allowed`})
    }
}