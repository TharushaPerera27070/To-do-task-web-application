import { Done as DoneIcon } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TaskCard({ task, onDone }) {
  return (
    <div className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200 flex flex-col justify-between">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-primary group-hover:text-blue-500 transition-colors line-clamp-1">
            {task.title}
          </h3>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
          {task.description || "No additional details provided."}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Pending
        </span>
        <button
          onClick={() => onDone(task.id)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[#4E95FF] cursor-pointer bg-white border-2 border-[#4E95FF] rounded-lg text-xs font-bold transition-all duration-200 hover:text-white hover:bg-[#4E95FF]"
        >
          <CheckCircleIcon />
          Done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
