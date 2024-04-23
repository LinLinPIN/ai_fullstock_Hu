import React from 'react';

const ToDoFilter = ({ setFilter }: any) => {
    const handle = (e) => {
        if (e.target.localName === "button") {
            setFilter(e.target.innerText)
        }
        console.log(e)
    }
    return (
        <div onClick={(e) => handle(e)}>
            <button>All</button>
            <button>Actived</button>
            <button>Completed</button>
        </div>
    );
};

export default ToDoFilter;