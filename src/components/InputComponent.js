import { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { form: { category: '', content: '', time: '' } };
    }

    handleFormSubmit() {
        this.props.onInputNote(this.state.form);
    }


    render() {
        return (
            <div className='container border bg-secondary wrapper'>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                    }}
                >
                    <select
                        onChange={({ target }) => {
                            this.setState({ form: { ...this.state.form, category: target.value } });

                        }}
                    >
                        <option value="">-- Choose Group Note --</option>
                        <option value="Must do">Must do</option>
                        <option value="Could do">Could do</option>
                        <option value="Can do">Can do</option>
                    </select>
                    <br />
                    <textarea
                        rows="5"
                        cols="30"
                        onChange={({ target }) => {
                            this.setState({ form: { ...this.state.form, content: target.value } });
                        }}
                        placeholder="Enter your note"
                    >
                    </textarea>
                    <br />
                    <input
                        name="time"
                        type="date"
                        onChange={({ target }) => {
                            this.setState({ form: { ...this.state.form, time: target.value } });

                        }}
                    />
                    <button className="btn btn-primary" onClick={() => this.handleFormSubmit()}>Save</button>
                </form>
            </div>
        )
    }
}

export default Input