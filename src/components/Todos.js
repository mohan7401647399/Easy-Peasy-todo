import { Fragment, useEffect } from "react";
import React from "react";
import TodoItem from "./TodoItem";
import {useStore, useStoreActions } from "easy-peasy";

const Todos = () => {
  const todos = useStore(state => state.todos);
  const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [])
  
  return (
    <>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
