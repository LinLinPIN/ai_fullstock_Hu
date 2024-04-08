import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super()
        this.list = [
            { id: 1, name: 'react' },
            { id: 2, name: 'vue' }
        ]
    }
    onDel(e) {
        console.log(e);
    }
    render() {
        return (
            <div>
                <p>这是一个类组件</p>
                <ul>
                    {this.list.map(item => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={() => this.onDel(item.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
