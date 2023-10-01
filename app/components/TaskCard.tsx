"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";

const url = process.env.NEXT_PUBLIC_URL;

const TaskCard = ({ task }: { task: ITask }) => {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskCompleted, setTaskCompleted] = useState(task.completed);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const editTask = async (taskEdit: Partial<ITask>) => {
    // console.log("Editing: ", taskEdit);
    try {
      const res = await fetch(`${url}/api/tasks/${task.id}`, {
        method: "PUT",
        body: JSON.stringify(taskEdit),
      });
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async () => {
    // console.log("Deleting");
    try {
      const res = await fetch(`${url}/api/tasks/${task.id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-lg font-normal border border-secondary/30 px-4 py-2 rounded-lg hover:bg-secondary/10 duration-150 ease-in-out flex justify-between items-center gap-4">
      {/* Title / Edit */}
      {!isEditing ? (
        <>
          <h2 className={`${taskCompleted && "line-through"}`}>{task.title}</h2>
        </>
      ) : (
        <>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="formInput formInput--slim grow"
            autoFocus
          />
        </>
      )}
      {/* Buttons */}
      <div className="flex gap-2 items-center">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="appearance-none w-6 h-6 rounded-sm border border-primary cursor-pointer checked:bg-primary duration-150 ease-in-out"
          checked={taskCompleted}
          onChange={(e) => {
            // console.log("Now I'm: ", e.target.checked);
            setTaskCompleted(e.target.checked);
            editTask({ completed: e.target.checked });
          }}
        />
        {!isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn--secondary btn--small"
            >
              <AiFillEdit />
            </button>
            <button onClick={deleteTask} className="btn btn--danger btn--small">
              <AiFillDelete />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => editTask({ title: taskTitle })}
              className="btn btn--success btn--small"
            >
              <AiOutlineCheck />
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setTaskTitle(task.title);
              }}
              className="btn btn--danger btn--small"
            >
              <AiOutlineClose />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
