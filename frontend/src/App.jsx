import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarForm from "./components/SidebarForm";
import TaskGrid from "./components/TaskGrid";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);

  //fetch pending tasks
  const getTasks = async () => {
    try {
      const response = await fetch(`${apiUrl}/task`);
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  //add task
  const addTask = async (title, description) => {
    try {
      const newTask = { title, description };
      const response = await fetch(`${apiUrl}/task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      await getTasks();

      toast.success("Task added successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (err) {
      console.error(err.message);
      toast.error("Failed to add task");
    }
  };

  //mark done
  const completeTask = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/task/${id}`, {
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
