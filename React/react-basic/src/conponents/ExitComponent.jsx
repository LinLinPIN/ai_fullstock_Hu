import React from 'react'

export default function ExitComponent() {
    const list = [
        { id: 1, name: 'react' },
        { id: 2, name: 'vue' }
    ]
    const onDel = (e) => {
        console.log(e);
    }
    return (
        <div>
            <p>这是一个额外的组件</p>
            <ul>
                {
                    list.map(item => (
                        <li key="ietm.id">
                            <span>{item.name}</span>
                            <button onClick={() => onDel(item.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
