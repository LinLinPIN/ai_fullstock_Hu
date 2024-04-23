import React from 'react';
import { Todo } from '@/types';
import ToDoitem from './ToDoitem';

interface ToDoListProps {
    todos: Array<Todo>;
    toogleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const ToDoList = ({ todos, toogleTodo, deleteTodo }: ToDoListProps) => {
    return (
        <ul>
            {todos.map(todo => {
                return <ToDoitem key={todo.id} todo={todo} toogleTodo={toogleTodo} deleteTodo={deleteTodo}></ToDoitem>
            })}
        </ul>
    );
};

export default ToDoList;