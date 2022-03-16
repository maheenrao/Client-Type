import axios, { AxiosResponse } from "axios";

interface Todo {
  id: string;
  title: string;
  items: string;
}

type ApiDataType = {
  message: string;
  status: string;
  todos: Todo[];
  todo?: Todo;
};
  

const baseUrl: string = "http://localhost:3000";
const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos",
      {
        headers: {
          Authorization: authorization,
        },
      }
    );

    return todos;
  } catch (error) {
    throw new Error("Whoops");
  }
};


export const addTodo = async (
  data: Todo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo = {
      title: data.title,
      items: [...data.items.split(",")],
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/todos",
      todo,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return saveTodo;
  } catch (error) {
    throw new Error("error");
  }
};

export const updateTodo = async (
  todo: Todo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<Todo, "title"> = {
      title: todo.title,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/todos/${todo.id}`,
      todoUpdate,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return updatedTodo;
  } catch (error) {
    throw new Error("error");
  }
};

export const deleteTodo = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/todos/${id}`,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return deletedTodo;
  } catch (error) {
    throw new Error("error");
  }
};
