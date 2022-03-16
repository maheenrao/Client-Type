import React, { useState } from "react";
import { addTodo, deleteTodo } from "./API";
import Todo from "./Todo";

const Multiple: React.FC = () => {
  const [inputFields, setInputFields] = useState([{ items: "" }]);
  const handleFormChange = (
    index: any,
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    let data: any = [...inputFields];
    data[index][event.currentTarget.name] = event.currentTarget.value;
    setInputFields(data);
  };

  const addFields: React.MouseEventHandler<HTMLButtonElement> = (
    todoText: any
  ): void => {
    addTodo(todoText)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setInputFields(data.todos);
      })
      .catch((err) => console.log(err));
    const newTodo = new Todo(todoText);
    setInputFields((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
    let newfield = { items: "" };
    setInputFields([...inputFields, newfield]);
    console.log(newfield);
  };

  const submit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(inputFields);
  };

  const removeFields = (index: any, ) => {
    deleteTodo(index)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setInputFields(data.todos);
      })
      .catch((err) => console.log(err));
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  return (
    <form onSubmit={submit}>
      <ul>
        {inputFields?.map((input: any, index: any) => {
          return (
            <div key={index.id}>
              <input
                name="items"
                placeholder="Items"
                value={input.items}
                onChange={(event) => handleFormChange(index, event)}
              />
              <button className="button1" onClick={addFields}>
                Add More..
              </button>
              <button className="button1" onClick={removeFields}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </form>
  );
};

export default Multiple;
