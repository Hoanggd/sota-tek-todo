import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import Input, { Label } from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";
import { Priorities, Priority } from "../../../constants/priority";

function TaskForm({ className }) {
  return (
    <div className={className}>
      <div className="form-field">
        <Input style={{ borderRadius: "4px" }} placeholder="Add new task..." />
        <div>
          <Label>Description</Label>
          <Textarea></Textarea>
        </div>
        <div className="date-priority">
          <div>
            <Label>Due Date</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Priority</Label>
            <Select defaultValue={Priority.Normal}>
              {Priorities.map((item) => (
                <option key={item} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <Button>Add</Button>
    </div>
  );
}

export default styled(TaskForm)`
  .form-field > * + * {
    margin-top: 30px;
  }

  .form-field {
    margin-bottom: 40px;
  }

  option {
    text-transform: capitalize;
  }

  .date-priority {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px
  }
`;
