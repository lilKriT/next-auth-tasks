import TaskCard from "./TaskCard";

const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Your tasks:</h1>
      <h2>You have {tasks.length} tasks.</h2>
      <ul className="flex flex-col gap-2 mt-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
