import { useState } from 'react'
import { useRouter } from 'next/router'
import * as styles from './NewTodo.module.css'

import { baseUrl } from "utils/baseUrl";

const NewTodo = () => {
    const router = useRouter()
    const [newTodo, setNewTodo] = useState('')

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = async e => {
        // console.log('submit')
        e.preventDefault()
        try{
            const url = `${baseUrl}/api/todos`
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Contetn-Type': 'application/json',
                },
                body: JSON.stringify({task: newTodo}),
            })

            if (!response.ok) {
                const { error } = await response.json()
                throw error
            }

            setNewTodo('')
            router.push('/')
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <form className={styles.new_todo_form} onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input 
                type='text'
                placeholder='New Todo'
                id='task'
                name='task'
                value={newTodo}
                onChange={handleChange}     
            />

            <button disabled={Boolean(!newTodo.length)}>Add Todo</button>
        </form>
    )
}

export default NewTodo
