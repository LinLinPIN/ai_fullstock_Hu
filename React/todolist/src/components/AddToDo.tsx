import React, { useState } from 'react';

interface AddToDoProps {
    addTodo: (text: string) => void
}

const AddToDo = ({ addTodo }: AddToDoProps) => {
    const [text, setText] = useState("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim() === '') {
            return
        }
        addTodo(text)
        setText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button>新建事项</button>
        </form>
    );
};

export default AddToDo;