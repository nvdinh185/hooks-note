import { useState } from 'react';
import Note from './components/NoteComponent';
import Input from './components/InputComponent';
import './App.css';

const NOTE_DATA = [
    {
        id: 1,
        category: 'Must do',
        content: 'This is the first task I must do',
        time: '2022-05-26',
    },
    {
        id: 2,
        category: 'Could do',
        content: 'This is the first task I could do',
        time: '2022-05-21',
    },
    {
        id: 3,
        category: 'Can do',
        content: 'This is the first task I can do',
        time: '2022-04-26',
    },
    {
        id: 4,
        category: 'Could do',
        content: 'This is the first task I could do',
        time: '2021-05-26',
    }
]

const getCurrentDate = function () {
    const date = new Date();
    let mm = date.getMonth() + 1; // getMonth() is zero-based
    if (mm.toString().length < 2) {
        mm = '0' + mm;
    }
    let dd = date.getDate();
    if (dd.toString().length < 2) {
        dd = '0' + dd;
    }
    const yy = date.getFullYear();
    let currentDate = yy.toString() + '-' + mm.toString() + '-' + dd.toString();
    return currentDate;
}

const INITIAL_FORM = {
    category: '',
    content: '',
    time: getCurrentDate()
}

const App = () => {
    const [list, setList] = useState(NOTE_DATA);
    const [form, setForm] = useState(INITIAL_FORM);

    const handleAddNote = (form) => {
        const item = {
            id: list.length + 1,
            ...form
        };
        const nextList = [...list];
        nextList.push(item);
        setList(nextList);
        // console.log(nextList);
        // handleResetForm();
    }

    const callEditNote = (formEdit) => {
        setForm(formEdit);
    }

    const handleEditNote = (formEdit) => {
        const nextList = [...list];
        const index = list.findIndex(it => it.id === formEdit.id);
        nextList[index] = formEdit;
        setList(nextList);
        // handleResetForm();
    }

    const handleDelNote = (id) => {
        const item = list.find(it => it.id === id);
        if (window.confirm(`Delete note: ${item.content} ?`)) {
            const nextList = list.filter(it => it.id !== id);
            setList(nextList);
        }
    }

    const handleResetForm = () => {
        const resetForm = {
            category: '',
            content: '',
            time: getCurrentDate()
        }
        setForm(resetForm);
    }

    return (
        <>
            {list.map(it =>
                <Note
                    key={it.id}
                    id={it.id}
                    category={it.category}
                    content={it.content}
                    time={it.time}
                    onCallEditNote={(id) => callEditNote(id)}
                    onDelNote={(id) => handleDelNote(id)}
                />
            )}
            <Input formData={form} onAddNote={(formInput) => handleAddNote(formInput)} onEditNote={(formEdit) => handleEditNote(formEdit)} onResetForm={() => handleResetForm()} />
        </>
    )
}

export default App;