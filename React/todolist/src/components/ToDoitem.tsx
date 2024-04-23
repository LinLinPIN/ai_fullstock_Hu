import React from 'react';
import { Todo } from '../types'

interface ToDoitemProps {
    todo: Todo,
    toogleTodo: (id: number) => void,
    deleteTodo: (id: number) => void
}
const ToDoitem = ({ todo, toogleTodo, deleteTodo }: ToDoitemProps) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toogleTodo(todo.id)}>切换</button>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
        </li>
    );
};

export default ToDoitem;