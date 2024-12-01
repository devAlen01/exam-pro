namespace TODO {
  type getTodosResponse = ITodo[];
  type getTodosRequest = void;

  type postTodoResponse = {
    message: string;
  };
  type postTodoRequest = ITodo;

  type deleteTodoRequest = number;

  type deleteTodoResponse = {
    message: string;
  };

  type updateTodoResponse = void;
  type updateTodoRequest = {
    data: ITodo;
    _id: number;
  };
}
