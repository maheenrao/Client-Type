import React from 'react'
import Multiple from "./Multiple"
import "./TodosItem.css"



const TodoItem: React.FC<{items: string; title: string;  onRemoveTodo :() => void}> = (props) => {
  return (
    <div className="form">
      <li onClick={props.onRemoveTodo} className="item">
        Title: {props.title} :{props.items}
      </li>
      <Multiple />
      {/* <button>Update</button> */}

      <button onClick={props.onRemoveTodo}>delete </button>
    </div>
  );
}

export default TodoItem 