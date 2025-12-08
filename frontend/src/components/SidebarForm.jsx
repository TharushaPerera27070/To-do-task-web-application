import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";

function SidebarForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full lg:w-[480px] bg-white flex flex-col justify-center p-8 lg:p-12 shadow-xl shadow-slate-200/50 z-20 relative">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <EditNoteIcon />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              TodoMate
            </h1>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Add your tasks below to stay organized and productive throughout the
            day.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details, deadlines, or context..."
              className="w-full px-4 py-3 h-32 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 resize-none focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 bg-secondary hover:bg-blue-600 hover:shadow-xl hover:shadow-primary active:bg-secondary/80 text-white font-semibold rounded-xl shadow-lg shadow-primary transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Create Task</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SidebarForm;
