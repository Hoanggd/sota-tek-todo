import React from "react";
import styled from "styled-components";
import TaskForm from "./components/TaskForm";

function NewTask({ className }) {
  return (
    <div className={className}>
      <h2>New Task</h2>
      <TaskForm onSubmit={(e) => console.log(e)} />
    </div>
  );
}

export default styled(NewTask)`
  padding: 40px;
  h2 {
    text-align: center;
    margin: 0 0 50px;
  }
`;
