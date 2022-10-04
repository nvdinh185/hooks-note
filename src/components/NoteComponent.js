import { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props);
    }

    onClickToEdit(props) {
        this.props.onCallEditNote(props);
    }

    onClickToDel(id) {
        this.props.onDelNote(id);
    }


    render() {
        const bg = this.props.category == "Must do" ? "bg-danger" : this.props.category == "Could do" ? "bg-warning" : "bg-primary";
        const classCss = `container border wrapper float ${bg}`;
        return (
            <div className={classCss}>
                <h4>{this.props.category}</h4>
                <p>{this.props.content}</p>
                <p>{this.props.time}</p>
                <button className='btn-outline-light btn-success text-dark' onClick={() => this.onClickToEdit(this.props)}>Edit</button>
                <button className='btn-outline-light btn-secondary text-dark' onClick={() => this.onClickToDel(this.props.id)}>Del</button>
            </div>
        )
    }
}

export default Note