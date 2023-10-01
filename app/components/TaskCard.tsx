import {
  AiOutlineCheck,
  AiOutlineClose,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";

const TaskCard = ({ task }: { task: ITask }) => {
  return (
    <div className="text-lg font-normal border border-secondary/30 px-4 py-2 rounded-lg hover:bg-secondary/10 duration-150 ease-in-out flex justify-between items-center">
      <h2>{task.title}</h2>
      {/* Buttons */}
      <div className="flex gap-2">
        <button className="btn btn--success btn--small">
          <AiOutlineCheck />
        </button>
        <button className="btn btn--danger btn--small">
          <AiOutlineClose />
        </button>
        <button className="btn btn--secondary btn--small">
          <AiFillEdit />
        </button>
        <button className="btn btn--danger btn--small">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
