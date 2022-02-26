import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { useCreatTask } from "../../../utils/localStorage";
import TaskForm from "./TaskForm";

function TaskFormModal({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const createTask = useCreatTask();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className={className}>
      <Button onClick={onOpen} className="bg-blue">
        New task
      </Button>
      <Modal onClose={onClose} title="Add new task" isOpen={isOpen}>
        <TaskForm
          isReset
          onSubmit={(v) => {
            createTask.mutate(v);
            onClose();
          }}
        />
      </Modal>
    </div>
  );
}

export default styled(TaskFormModal)`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
