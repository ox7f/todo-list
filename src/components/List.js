import ListItem from "./ListItem";
import useTasks from "../hooks/useTasks";

const List = () => {
    const {
        tasks
    } = useTasks();

    return (
        <div> {
            tasks?.map(
                (task) => <ListItem item={task} key={task.id} />
            )
        } </div>
    );
}

export default List;
