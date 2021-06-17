import Todo from 'models/Todo'

import connectDB from 'utils/connectDB'
connectDB()

/**
 * Get Todos in DB
 */
const handleGetRequest = async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json({ todos })
}
/** 
 * Add new Todo into DB  
*/

const handlePostRequest = async (req, res) => {
    const { task } = req.body
    try{
        const newTodo = await new Todo({ task }).save()
        res.status(201).json(newTodo)
    } catch (error) {
        console.log("ERROR", error)
        res.status(500).json({error})
    }
}

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            await handleGetRequest(req, res)
            break
        case 'POST':
            await handlePostRequest(req, res)
            break
        default:
            res.status(405).json({ error: `Method ${req.method} not allowed` })
    } 
}
