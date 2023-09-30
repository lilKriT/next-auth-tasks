const TaskCard = ({ task }: { task: ITask }) => {
  return (
    <div className="text-lg font-normal border border-secondary/30 px-4 py-2 rounded-lg hover:bg-secondary/10 duration-150 ease-in-out">
      <h2>{task.title}</h2>
      {/* Buttons */}
      <div></div>
    </div>
  );
};

export default TaskCard;
