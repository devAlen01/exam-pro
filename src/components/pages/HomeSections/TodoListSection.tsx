"use client";

import React, { FC, FormEvent, useState } from "react";
import scss from "./TodoListSection.module.scss";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "@/redux/api/todo";

const TodoListSection: FC = () => {
  const { data } = useGetTodosQuery();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const [updateTodoMutation] = useUpdateTodoMutation();
  const [isEdit, setIsEdit] = useState<ITodo>({
    title: "",
    _id: 0,
    image: "",
  });

  const handleDelete = async (_id: number) => {
    try {
      await deleteTodoMutation(_id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    let editValue: ITodo = {
      title: isEdit.title,
      image: isEdit.image,
    };
    try {
      await updateTodoMutation({ _id: isEdit?._id!, data: editValue });
      setIsEdit({
        title: "",
        _id: 0,
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={scss.TodoListSection}>
      <div className="container">
        <div className={scss.content}>
          {isEdit._id ? (
            <form>
              <h1>TODO EDIT</h1>
              <input
                defaultValue={isEdit.image}
                type="text"
                onChange={(e) =>
                  setIsEdit({ ...isEdit, image: e.target.value })
                }
                required
              />
              <input
                defaultValue={isEdit.title}
                onChange={(e) =>
                  setIsEdit({ ...isEdit, title: e.target.value })
                }
                type="text"
                placeholder="Title"
                required
              />
              <button onClick={handleUpdate}>Save</button>
            </form>
          ) : (
            <div className={scss.itemCard}>
              {data?.map((item) => (
                <div className={scss.item} key={item._id}>
                  <div className={scss.image}>
                    <img
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={200}
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <div className={scss.action}>
                    <button onClick={() => handleDelete(item._id!)}>
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        setIsEdit({
                          title: item.title,
                          _id: item._id,
                          image: item.image,
                        });
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TodoListSection;
