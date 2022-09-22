import { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        console.log(123);
    }


    render() {
        const bg = this.props.category == "Must do" ? "bg-danger" : this.props.category == "Could do" ? "bg-warning" : "bg-primary";
        const classCss = `container border wrapper ${bg}`;
        return (
            <div className={classCss}>
                <h4>{this.props.category}</h4>
                <p>{this.props.content}</p>
                <p>{this.props.time}</p>
                <button className='btn-outline-light btn-success text-dark' onClick={() => this.onClick()}>Edit</button>
                <button className='btn-outline-light btn-secondary text-dark' onClick={() => this.onClick()}>Del</button>
            </div>
        )
    }
}

export default Card