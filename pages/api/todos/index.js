import Todo from 'models/Todo'

import connectDB from 'utils/connectDB'
connectDB()

/**
 * Get Todos in DB
 */
const handleGetRequest = async (req, res) => {
    const todos = await Todo.find()
    res.staturs(200),json({ todos })
}

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            await handleGetRequest(req, res)
            break
        default:
            res.status(405).json({ error: `Method ${reeq.method} not allowed `})
    } 
}
