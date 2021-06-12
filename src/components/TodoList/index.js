import * as styles from './TodoList.module.css'

import Todo from "components/Todo";

const TodoList = ({ todos}) => {
    return (
        <>
            <h2 className={styles.todo_list_title}>Current Todo</h2>
            <ul className={styles.todo_list}>
                {todos.map(todo => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList
