import React, { FC } from "react";
import AddTodoSection from "./HomeSections/AddTodoSection";
import TodoListSection from "./HomeSections/TodoListSection";

const HomePage: FC = () => {
  return (
    <>
      <AddTodoSection />
      <TodoListSection />
    </>
  );
};

export default HomePage;
