const Note = (props) => {

    const onClickToEdit = (props) => {
        props.onCallEditNote(props);
    }

    const onClickToDel = (id) => {
        props.onDelNote(id);
    }

    const bg = props.category === "Must do" ? "bg-danger" : props.category === "Could do" ? "bg-warning" : "bg-primary";
    const classCss = `container border wrapper float ${bg}`;
    return (
        <div className={classCss}>
            <h4>{props.category}</h4>
            <p>{props.content}</p>
            <p>{props.time}</p>
            <button className='btn-outline-light btn-success text-dark' onClick={() => onClickToEdit(props)}>Edit</button>
            <button className='btn-outline-light btn-secondary text-dark' onClick={() => onClickToDel(props.id)}>Del</button>
        </div>
    )
}

export default Note