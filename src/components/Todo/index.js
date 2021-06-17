import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaEdit, FaTimes, FaTrashAlt } from 'react-icons/fa'
import { baseUrl } from "utils/baseUrl";

import * as styles from './Todo.module.css'

const Todo = ({ todo }) => {
    const router = useRouter()
    const [isEditing, setisEditing] = useState(false)
    const { task, completed } = todo
    const [updatedTask, setUpdatedTask] = useState(task)

    const url = `${baseUrl}/api/todos/${todo._id}`

    /**
     * HTTP Request to API
     */
    const updateRequest = async payload => {
        try{
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok){
                const { error } = await response.json()
                throw error
            }
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const deleteRequest = async () => {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
        })
        
        if (!response.ok) {
            const { error } = await response.json()
            throw error
            }
        router.push('/')
        } catch (error) {
          console.log(error)
        }
    }

    /**
     * Todo Fuctionality
     */
    const toggleEditingMode = () => setisEditing(!isEditing)

    const toggleCompletioin = () => updateRequest({ completed: !completed})

    const handleChange = e => setUpdatedTask(e.target.value)

    const handleUpdate = e => {
        e.preventDefault()
        updateRequest({ task: updatedTask})
        setisEditing(false)
    }

    const handleRemove = () => deleteRequest()
    
    /**
     *  components to render
     */
    const NotEditing = (
        <li className={styles.todo_task} onClick={toggleCompletioin}>
            {task}
        </li>
    )

    const Editing = (
        <form className={styles.todo_edit_form} onSubmit={handleUpdate}>
            <input 
                type='text'
                value={updatedTask}
                name='task'
                onChange={handleChange}
            />
            <button>Save</button>
        </form>
    )

    return(
        <div
            className={
                completed ? `${styles.todo} ${styles.completed} ` : `${styles.todo}`
            }
        >
            {isEditing ? Editing : NotEditing}

            <div className={styles.todo_buttons}>
                <button onClick={toggleEditingMode}>
                    { isEditing ? <FaTimes /> : <FaEdit/>}
                </button>
                <button onClick={handleRemove}>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default Todo
