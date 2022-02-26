import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../../components/Button";
import Input, { ErrorMessage, Label } from "../../../components/Input";
import Select from "../../../components/Select";
import Textarea from "../../../components/Textarea";
import { Priorities, Priority } from "../../../constants/priority";
import dayjs from "dayjs";

function TaskForm({ className, onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  console.log("🚀 ~ TaskForm ~ errors", errors);

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <Input
          {...register("title")}
          style={{ borderRadius: "4px" }}
          placeholder="Add new task..."
          required
        />
        <div>
          <Label>Description</Label>
          <Textarea {...register("description")}></Textarea>
        </div>
        <div className="date-priority">
          <div>
            <Label>Due Date</Label>
            <Input
              defaultValue={dayjs().format("YYYY-MM-DD")}
              {...register("dueDate", {
                validate: (value) =>
                  dayjs(value).isSameOrAfter(dayjs().startOf("d")) || "Due Date is not valid",
              })}
              type="date"
            />
            {errors.dueDate && <ErrorMessage>{errors.dueDate.message}</ErrorMessage>}
          </div>
          <div>
            <Label>Priority</Label>
            <Select {...register("priority")} defaultValue={Priority.Normal}>
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
    </form>
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
    gap: 30px;
  }
`;
