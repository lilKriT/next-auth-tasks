"use client";
import { FieldValues, useForm } from "react-hook-form";

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTask = async (data: FieldValues) => {
    console.log("Adding a task");
    console.log("Form Data: ", data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(addTask)}>
      <label className="formLabel">
        Title:
        <input
          type="text"
          className="formInput"
          {...register("title", { required: "Task title is required!" })}
        />
        {errors.title && (
          <p className="text-red-500">{`${errors.title.message}`}</p>
        )}
        <button className="btn btn--primary">Add Task</button>
      </label>
    </form>
  );
};

export default TaskForm;
