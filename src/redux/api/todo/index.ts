import { api as index } from "..";

let endpoint = "/1d15443827465254b1c843b7271a00ec/exam";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<TODO.getTodosResponse, TODO.getTodosRequest>({
      query: () => ({
        url: endpoint,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: build.mutation<TODO.postTodoResponse, TODO.postTodoRequest>({
      query: (data) => ({
        url: endpoint,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: build.mutation<TODO.deleteTodoResponse, TODO.deleteTodoRequest>(
      {
        query: (_id) => ({
          url: `${endpoint}/${_id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["todo"],
      }
    ),

    updateTodo: build.mutation<TODO.updateTodoResponse, TODO.updateTodoRequest>(
      {
        query: ({ _id, data }) => ({
          url: `${endpoint}/${_id}`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["todo"],
      }
    ),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = api;
