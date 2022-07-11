import { v4 as uuid } from "uuid";
import { useState, createContext, useEffect } from "react";

const TaskContext = createContext({});

const defaultTask = {
    id: uuid(),
    completed: false,
    description: "This is a my description.",
    rating: 5,
    title: "Example",
};

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks([defaultTask]);
    }, [])
  
    return (
        <TaskContext.Provider value={{ task, setTask, tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const TaskConsumer = TaskContext.Consumer;

export default TaskContext;
