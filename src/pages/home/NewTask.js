import React from "react";
import styled from "styled-components";
import TaskForm from "./components/TaskForm";

function NewTask({ className }) {
  return (
    <div className={className}>
      <h2>New Task</h2>
      <TaskForm />
    </div>
  );
}

export default styled(NewTask)`
  padding: 40px;
`;
