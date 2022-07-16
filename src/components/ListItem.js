import {
    Avatar,
    Badge,
    Checkbox,
    Rating,
    Table
} from "react-daisyui";

const ListItem = ({
    item,
    update
}) => {
    const ratingOptions = [...Array(5).keys()].map(x => x+1);

    const changeRating = (rating) => {
        update({...item, rating: rating});
    }

    console.log("updated", {...item})

    return (
        <Table.Row hover>
            <Checkbox />

            <div className="flex items-center space-x-3 truncate">
                <Avatar
                    letters={item.title[0] + item.title[1]}
                    shape="circle"
                    size="sm" />
                <div className="font-bold">{item.title}</div>
            </div>

            <div>
                {item.description ?? "-"}
                <br />
                {item.tag.map(
                    (tag) => (
                        <Badge color="ghost" key={tag} size="sm">
                            {tag}
                        </Badge>
                    )
                )}
            </div>

            <div>
                <Rating>
                    {ratingOptions.map(
                        (option) => (
                            option === item.rating
                            ? <Rating.Item
                                checked
                                className="mask mask-star-2 bg-orange-400"
                                key={option}
                                name="rating-2"
                                onClick={() => changeRating(option)}
                                readOnly />
                            : <Rating.Item
                                className="mask mask-star-2 bg-orange-400"
                                key={option}
                                name="rating-3"
                                onClick={() => changeRating(option)}
                                readOnly />
                        )
                    )}
                </Rating>
            </div>

            <Checkbox value={item.completed} />
        </Table.Row>
    );
}

export default ListItem;