import Head from "next/head"
import { FcTodoList } from "react-icons/fc"
import { baseUrl } from 'utils/baseUrl'

import NewTodo from "components/NewTodo"
import TodoList from "components/TodoList"

const Home = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="An app to maitain todos" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="todo">
        <h1>
          <FcTodoList />
          <span>time to work</span>
        </h1>
        
        <NewTodo />

        { todos.length > 0 ? (
          <TodoList todos={todos} />
        ) : (
          <h4>Hooray! You have no todo.</h4>
        )}  
      </main>
    </>
  )   
}

export default Home

export const getServerSideProps = async () => {
  const url = `${baseUrl}/api/todos`
  const response = await fetch(url)
  const data = await response.json()
  // console.log('Data ', data)
  const todos = data.todos
  return { props: { todos } }
}
