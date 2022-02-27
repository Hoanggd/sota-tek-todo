import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useRemoveManyTask, useTasks } from "../../utils/localStorage";
import TaskFormModal from "./components/TaskFormModal";
import TodoItem from "./components/TodoItem";

function TodoList({ className }) {
  const [search, setSearch] = useState("");
  const tasks = useTasks(search).data;
  const [selectedTasks, setSelectedTasks] = useState([]);
  const removeManyTask = useRemoveManyTask();

  const handleSelectedTasks = (v) => {
    let newSelectedTasks;
    if (v.checked) {
      newSelectedTasks = [...selectedTasks, v.id];
    } else {
      newSelectedTasks = selectedTasks.filter((item) => item !== v.id);
    }
    setSelectedTasks(newSelectedTasks);
  };

  const handleBulkRemove = () => {
    removeManyTask.mutate(selectedTasks);
    setSelectedTasks([])
  };

  return (
    <div className={className}>
      <div className="list-wrapper">
        <div className="list-header">
          <h2>To do List</h2>
          <TaskFormModal />
        </div>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search ..."
        />
        <div className="list">
          {tasks &&
            tasks.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onChange={handleSelectedTasks}
              />
            ))}
        </div>
      </div>
      <div className="bulk-actions">
        <span>Bulk Action: {selectedTasks.length}</span>
        <Button onClick={handleBulkRemove} className="bg-red">
          Remove
        </Button>
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
    padding: 16px;
    border-top: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: min-content;
    }
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
