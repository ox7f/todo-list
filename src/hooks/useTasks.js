import { useContext, useDebugValue } from "react";
import TaskContext from "../context/taskContext";

const useTasks = () => {
    const { task, tasks } = useContext(TaskContext);

    useDebugValue(task, (task) => task ? "task set" : "task unset");
    useDebugValue(tasks, (tasks) => tasks ? "tasks set" : "tasks unset");

    return useContext(TaskContext);
}

export default useTasks;
