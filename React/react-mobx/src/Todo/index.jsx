import React, { createRef, useEffect, useState, useRef } from 'react';
import './index.css'
import { useStore, observer } from '../store'

const Todo = () => {
    const store = useStore().todoStore
    const val = useRef(null)
    const handle = (e) => {
        if (e.keyCode === 13) {
            store.addItem(val.current.value)
        }
    }
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    autoFocus
                    autoComplete="off"
                    placeholder="What needs to be done?"
                    onKeyDown={(e) => handle(e)}
                    ref={val}
                />
            </header>

            <section className="main">
                {/* 全选 */}
                <input
                    id="toggle-all"
                    className="toggle-all"
                    type="checkbox"
                    onClick={() => store.checkAll()}
                />
                <label htmlFor="toggle-all"></label>

                <ul className="todo-list">
                    {store.list.map((item, index) => (
                        <li className={item.isDone ? 'todo completed' : 'todo'} key={item.id}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={item.isDone} onChange={() => store.checkItem(item.id)} />
                                <label >{item.name}</label>
                                <button className="destroy" onClick={() => store.delItem(index)}></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default observer(Todo);