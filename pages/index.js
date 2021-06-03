import Head from "next/head";

import { FcTodoList } from "react-icons/fc";
import NewTodo from "components/NewTodo";
import TodoList from "components/TodoList";

const Home = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="An app to maitain todos" />
      </Head>

      <main className="todo">
        <h1>
          <FcTodoList />
          <span>time to work</span>
        </h1>
        <NewTodo />
        <TodoList />
      </main>
    </>
  );
};

export default Home;
