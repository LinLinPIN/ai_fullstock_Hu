'use client'
import ToDoFilter from "@/components/ToDoFilter";
import ToDoList from "@/components/ToDoList";
import AddToDo from "@/components/AddToDo";
import { useState } from "react";
import { Todo } from "@/types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState("all")
  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toogleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  const getFilteredTodos = () => {
    switch (filter) {
      case 'Completed':
        return todos.filter(todo => todo.completed)
      case 'Actived':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  }
  return (
    <div>
      <h1>TodoList</h1>
      <AddToDo addTodo={addTodo}></AddToDo>
      <ToDoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toogleTodo={toogleTodo}></ToDoList>
      <ToDoFilter setFilter={setFilter}></ToDoFilter>
    </div>

  );
}
