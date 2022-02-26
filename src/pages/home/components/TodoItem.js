import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import TaskForm from "./TaskForm";

function TodoItem({ className, todo }) {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const toggleDetail = () => setIsShowDetail(!isShowDetail);

  return (
    <div className={className}>
      <div className="item">
        <div className="title">
          <Checkbox />
          <span>{todo.title}</span>
        </div>
        <div className="button-group">
          <Button className="bg-teal" onClick={toggleDetail}>
            Detail
          </Button>
          <Button className="bg-red">Remove</Button>
        </div>
      </div>
      {isShowDetail && (
        <div className="detail">
          <TaskForm />
        </div>
      )}
    </div>
  );
}

export default styled(TodoItem)`
  .item {
    border: 1px solid;
    padding: 12px;
    display: grid;
    grid-template-columns: 5fr 3fr;
    align-items: center;
  }

  .detail {
    border: 1px solid;
    border-top: none;
    padding: 20px 20px 30px;
  }

  .title {
    display: flex;
    align-items: center;

    > input {
      margin-right: 10px;
    }
  }

  .button-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media screen and (min-width: 640px) {
    .item {
      padding: 16px;
    }
    .button-group {
      gap: 20px;
    }
  }
`;
