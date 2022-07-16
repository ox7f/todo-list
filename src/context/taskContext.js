import {
    v4 as uuid
} from "uuid";
import {
    useState,
    createContext,
    useEffect
} from "react";

const TaskContext = createContext({});

const defaultTask = {
    id: uuid(),
    completed: false,
    description: "This is a description.",
    rating: 2,
    tag: ["example", "tag", "task"],
    title: "Example",
};

export const TaskProvider = ({
    children
}) => {
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);

    const updateTask = (newTask) => {
        let newTasks = tasks.map(task => {
            if (task.id === newTask.id)
                return newTask;
            return task;
        });

        setTasks(newTasks);
    }

    useEffect(() => {
        setTasks([defaultTask]);
    }, [])

    return (
        <TaskContext.Provider value={
            {
                task,
                setTask,
                tasks,
                setTasks,
                updateTask
            }
        }> {
            children
        } </TaskContext.Provider>
    );
};

export const TaskConsumer = TaskContext.Consumer;

export default TaskContext;