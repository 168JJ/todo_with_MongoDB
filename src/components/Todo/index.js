import { useState } from 'react'
import { useRouter } from 'next/router'
import { Faedit, FaTimes, FaTrashAlt } from 'react-icons/fa'

import * as styles from './Todo.module.css'

const Todo = ({ todo }) => {
    const router = useRouter()
    const [isEditing, setisEditing] = useState(false)
    const { task, completed } = todo

    const toggleEditingMode = () => setisEditing(!isEditing)

    const toggleCompletioin = () => {
        console.log('Toggle');
    }

    const handleChange = () => {
        console.log("handle change");
    }

    const handleUpdate = () => {
        console.log("Handle Update");
    }

    const handleRemove = (params) => {
        console.log("remove task");
    }
    
    const NotEditing = (
        <li className={styles.todo_task} onClick={toggleCompletioin}>
            {task}
        </li>
    )

    const Editing = (
        <form className={styles.todo_edit_form} onSubmit={handleUpdate}>
            <input 
                type='text'
                // value={updatedTask}
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
                    { isEditing ? <FaTimes /> : <Faedit/>}
                </button>
                <button onClick={handleRemove}>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default Todo
