"use client";

import React, { FC } from "react";
import scss from "./AddTodoSection.module.scss";
import { usePostTodoMutation } from "@/redux/api/todo";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUploadMutation } from "@/redux/api/upload";

const AddTodoSection: FC = () => {
  const { reset, handleSubmit, register } = useForm<ITodo>();
  const [postTodoMutation] = usePostTodoMutation();
  const [uploadMutation] = useUploadMutation();

  const createTodo: SubmitHandler<ITodo> = async (data) => {
    const formData = new FormData();
    formData.append("file", data?.file![0]);
    const { data: file } = await uploadMutation(formData);
    let newData: ITodo = {
      title: data.title,
      image: file?.url,
    };
    try {
      await postTodoMutation(newData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={scss.AddTodoSection}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(createTodo)}>
            <h1>TODO LIST</h1>
            <input
              type="file"
              {...register("file", { required: true })}
              required
            />
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTodoSection;
