import React from 'react'
import TodoItem from "./TodoItem"
import Todo from './Todo';



const Todos: React.FC<{ items: Todo[]; title: Todo[]; onRemoveTodo : (id: string)=> void}> = (
  props
) => {
  return (
    <div>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          items={item.items}
          title={item.title}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
      
    </div>
  );
};

export default Todos