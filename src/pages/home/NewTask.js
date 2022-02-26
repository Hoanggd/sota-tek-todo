import React from "react";
import styled from "styled-components";
import { useCreatTask } from "../../utils/localStorage";
import TaskForm from "./components/TaskForm";

function NewTask({ className }) {
  const createTask = useCreatTask();

  return (
    <div className={className}>
      <h2>New Task</h2>
      <TaskForm isReset onSubmit={(v) => createTask.mutate(v)} />
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
