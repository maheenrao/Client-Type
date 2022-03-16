import React, {useRef} from 'react'
import "./TodoForm.css"
 

const TodoForm : React.FC<{ onAddTodo : (items: string, title: string) => void }> = (props) => {

    const enteredInut = useRef <HTMLInputElement>(null)
    
const handleForm = (event: React.FormEvent) => {
    event.preventDefault();
const addItem = enteredInut.current!.value
const addTitle = enteredInut.current!.value;
props.onAddTodo(addItem, addTitle)

}

  return (
    <form onSubmit={handleForm} className="form">
      <label>Title</label>
      <input type="text" id="text" ref={enteredInut} placeholder="...Type" />
      <label>Items</label>
     
      <input type="text" id="text" ref={enteredInut} placeholder="...Type" />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm