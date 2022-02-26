import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import TaskForm from "./components/TaskForm";
import TaskFormModal from "./components/TaskFormModal";
import TodoItem from "./components/TodoItem";

const todos = [
  {
    id: 1,
    title: "Do home work",
    description: "abc xys",
    dueDate: "2022-02-01",
    priority: "normal",
  },
  {
    id: 2,
    title: "play games",
    description: "yaosu gank team",
    dueDate: "2022-02-01",
    priority: "high",
  },
];

function TodoList({ className }) {
  return (
    <div className={className}>
      <div className="list-wrapper">
        <div className="list-header">
          <h2>To do List</h2>
          <TaskFormModal />
        </div>
        <Input placeholder="Search ..." />
        <div className="list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
      <div className="bulk-actions">
        <span>Bulk Action:</span>
        <Button>Remove</Button>
      </div>
    </div>
  );
}

export default styled(TodoList)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  .list-wrapper {
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    > button {
      width: min-content;
    }
  }

  .list > * + * {
    margin-top: 20px;
  }

  .list {
    margin: 20px 0 60px;
  }

  .bulk-actions {
    margin-top: auto;
    background-color: #eee;
    height: 100px;
    border-top: 1px solid;
  }

  @media screen and (min-width: 640px) {
    .list-wrapper {
      padding: 40px;
    }
  }

  @media screen and (min-width: 1024px) {
    .list-header {
      display: block;
      margin: 0;
      button {
        display: none;
      }

      h2 {
        text-align: center;
        margin: 0 0 50px;
      }
    }
  }
`;
