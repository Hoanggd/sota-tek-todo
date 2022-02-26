import React from "react";
import styled from "styled-components";
import NewTask from "./NewTask";
import TodoList from "./TodoList";

function Home({ className }) {
  return (
    <div className={className}>
      <div className="new-task">
        <NewTask />
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
}

export default styled(Home)`
  display: flex;
  border: 1px solid;
  margin: 0 auto;
  max-width: 1366px;
  height: 100vh;
  overflow-y: auto;

  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
  }

  .new-task {
    flex: 5;
    border-right: 1px solid;
    display: none;
  }

  .todo-list {
    flex: 7;
  }
`;
