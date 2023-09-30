const TaskCard = ({ task }: { task: ITask }) => {
  return (
    <div>
      <h2>{task.title}</h2>
    </div>
  );
};

export default TaskCard;
