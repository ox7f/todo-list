import {
    Checkbox,
    Table
} from "react-daisyui";

import ListItem from "./ListItem";
import useTasks from "../hooks/useTasks";

const List = () => {
    const {
        tasks,
        updateTask
    } = useTasks();

    return (
        <div className="overflow-x-auto">
            <Table className="rounded-box w-full">
                <Table.Head>
                    <Checkbox />
                    <span>Title</span>
                    <span>Description</span>
                    <span>Rating</span>
                    <span>Completed</span>
                </Table.Head>

                <Table.Body>{
                    tasks?.map(
                        (task, index) => (
                            <ListItem item={task} key={index} update={updateTask} />
                        )
                    )
                }</Table.Body>

                <Table.Footer></Table.Footer>
            </Table>
        </div>
    );
}

export default List;