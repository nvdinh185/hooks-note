import { useState } from 'react';
import Card from './components/CardComponent';
import Input from './components/InputComponent';
import './App.css';

const NOTE_DATA = [
    {
        id: 1,
        category: 'Must do',
        content: 'This is the first task I must do',
        time: '9/16/2022',
    },
    {
        id: 2,
        category: 'Could do',
        content: 'This is the first task I could do',
        time: '9/16/2022',
    },
    {
        id: 3,
        category: 'Can do',
        content: 'This is the first task I can do',
        time: '9/16/2022',
    },
    {
        id: 4,
        category: 'Could do',
        content: 'This is the first task I could do',
        time: '9/16/2022',
    }
]

const App = () => {
    const [list, setList] = useState(NOTE_DATA);

    const handleAddNote = (form) => {
        const item = {
            id: list.length + 1,
            ...form
        };
        const nextList = [...list];
        nextList.push(item);
        setList(nextList);
        // console.log(nextList);
    }

    return (
        <>
            {list.map(it =>
                <Card
                    key={it.id}
                    category={it.category}
                    content={it.content}
                    time={it.time}
                />
            )}
            <Input onInputNote={(formInput) => handleAddNote(formInput)} />
        </>
    )
}

export default App;