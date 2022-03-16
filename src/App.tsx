import React, { useState, useEffect, } from "react";

import Todos from "./Todos";
import Todo from "./Todo";
import { getTodos, addTodo, deleteTodo } from "./API";

import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const identifier = setTimeout(() => {
      const fetchTodos = (): void => {
        getTodos()
          .then(({ data: { data = [] } }: Todo[] | any) => setTodos(data))
          .catch((err: Error) => console.log(err));
      };
      fetchTodos();
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, []);


  const addhandler = (todoText: any   ) => {
    addTodo(todoText)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const removeHandler = (todoId: string) => {
     deleteTodo(todoId)
       .then(({ status, data }) => {
         if (status !== 200) {
           throw new Error("Error! Todo not deleted");
         }
         setTodos(data.todos);
       })
       .catch((err) => console.log(err));
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <TodoForm onAddTodo={addhandler} />
      <Todos items={todos} title={todos} onRemoveTodo={removeHandler} />
    </div>
  );
}

export default App;
