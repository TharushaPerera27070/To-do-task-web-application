import NotificationsIcon from "@mui/icons-material/Notifications";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TaskCard from "../ui/TaskCard";

function TaskGrid({ tasks, onDone }) {
  return (
    <div className="flex-1 bg-slate-50/50 p-6 lg:p-10 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-primary">My Tasks</h2>
            <p className="text-slate-400 text-sm mt-1">
              {tasks.length === 0
                ? "Relax! Your schedule is clear."
                : `You have ${tasks.length} pending items.`}
            </p>
          </div>
          {tasks.length > 0 && (
            <span className="bg-white border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold text-secondary shadow-sm">
              <NotificationsIcon /> {tasks.length} To-Do
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onDone={onDone} />
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <DoneAllIcon className="text-slate-400" fontSize="large" />
            </div>
            <h3 className="text-lg font-bold text-primary">All caught up!</h3>
            <p className="text-slate-500 max-w-xs mx-auto mt-1">
              You have no pending tasks. Enjoy your free time or add a new task
              to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskGrid;
