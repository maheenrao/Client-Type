
class Todo {
    id: string;
    items: string;
    title: string;

    constructor (todoText: string){
        this.id = new Date().toISOString();
        this.items=todoText;
        this.title= todoText;

    }
    

}


export default Todo
type ApiDataType = {
  message: string;
  status: string;
  todos: Todo[];
  todo?: Todo;
};
  
