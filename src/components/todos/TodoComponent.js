const TodoComponent = ({item}) => {
    return (
        <div>
            <h3>{item.id} - {item.title}</h3>
        </div>
    );
}

export {TodoComponent}