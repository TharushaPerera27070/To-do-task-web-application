import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarForm from "./components/SidebarForm";
import TaskGrid from "./components/TaskGrid";

function App() {
  const [tasks, setTasks] = useState([]);

  // 1. Fetch Pending Tasks
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/task");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // 2. Add Task
  const addTask = async (title, description) => {
    try {
      const newTask = { title, description };
      const response = await fetch("http://localhost:5000/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();

      setTasks([...tasks, data]);
      toast.success("Task added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err) {
      console.error(err.message);
      toast.error("Failed to add task");
    }
  };

  // 3. Mark Done
  const completeTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/task/${id}`, {
        method: "PUT",
      });

      if (response.ok) {
        const task = tasks.find((t) => t.id === id);
        setTasks(tasks.filter((task) => task.id !== id));
        if (task) {
          toast.success(`${task.title} is completed!`, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row font-poppins text-primary selection:bg-indigo-100 selection:text-secondary">
        <SidebarForm onAdd={addTask} />
        <TaskGrid tasks={tasks} onDone={completeTask} />
      </div>
    </>
  );
}

export default App;
