"use client";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

const url = process.env.NEXT_PUBLIC_URL;

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();

  const addTask = async (data: FieldValues) => {
    // console.log("Adding a task");
    // console.log("Form Data: ", data);
    // console.log("JSON: ", JSON.stringify(data));

    // Throttle for testing purposes
    const throttle = false;
    if (throttle) await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const res = await fetch(`${url}/api/tasks`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const json = await res.json();
      // console.log("Response: ", json);
      reset(); // what is the best place for this?
      router.refresh();
    } catch (error) {
      console.log("Catch: ", error);
    }
  };

  return (
    <form className="form flex gap-4 mt-8" onSubmit={handleSubmit(addTask)}>
      <div className="grow">
        <label className="formLabel flex items-center gap-4">
          Title:
          <input
            type="text"
            className="formInput grow"
            {...register("title", { required: "Task title is required!" })}
            placeholder="I want to..."
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500">{`${errors.title.message}`}</p>
          )}
        </label>
      </div>
      <button className="btn btn--primary" disabled={isSubmitting}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
