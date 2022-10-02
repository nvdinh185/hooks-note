import { useState, useEffect } from 'react';

const Input = (props) => {
    const [form, setForm] = useState(props.formData);
    const [feedbacks, setFeedbacks] = useState({});

    const handleFormSubmit = () => {
        const { category, content } = form;
        const errors = {};

        if (!category) {
            errors.category = "Please input category.";
        }

        if (!content) {
            errors.content = "Please input content."
        } else if (content.length < 3 || content.length > 12) {
            errors.content = "Please input content 3 ~ 12 characters."
        }

        setFeedbacks(errors);

        // Nếu có ngoại lệ thì thoát luôn
        if (Object.keys(errors).length) {
            return;
        }

        if (form.id) {
            props.onEditNote(form);
        } else {
            props.onAddNote(form);
        }

        callResetForm();
    }

    const callResetForm = () => {
        props.onResetForm();
    }

    useEffect(() => {
        setForm(props.formData);
    }, [props.formData])

    return (
        <div className='container border bg-light wrapper'>
            <form
                onSubmit={event => {
                    event.preventDefault();
                }}
            >
                <select
                    onChange={({ target }) => {
                        setForm({ ...form, category: target.value });
                    }}
                    className={`form-control ${feedbacks.category ? 'is-invalid' : ''}`}
                    value={form.category}
                >
                    <option value="">-- Choose Group Note --</option>
                    <option value="Must do">Must do</option>
                    <option value="Could do">Could do</option>
                    <option value="Can do">Can do</option>
                </select>
                {feedbacks.category && <div className="invalid-feedback">
                    {feedbacks.category}
                </div>}
                <br />
                <textarea
                    rows="5"
                    cols="30"
                    onChange={({ target }) => {
                        setForm({ ...form, content: target.value });
                    }}
                    placeholder="Enter your note"
                    value={form.content}
                    className={`form-control ${feedbacks.content ? 'is-invalid' : ''}`}
                >
                </textarea>
                {feedbacks.content && <div className="invalid-feedback">
                    {feedbacks.content}
                </div>}
                <br />
                <input
                    name="time"
                    type="date"
                    onChange={({ target }) => {
                        setForm({ ...form, time: target.value });
                    }}
                    value={form.time}
                />
                <button className="btn btn-primary" onClick={handleFormSubmit}>Save</button>
            </form>
        </div>
    )
}

export default Input