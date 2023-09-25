import TaskCard from "./TaskCard";

const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div>
      <h2>You have {tasks.length} tasks.</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
