import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    state = {
        list: ['html', 'css'],
        message: ''
    }
    handler(e) {
        this.setState({
            message: e.target.value
        })
        console.log(this.message);
    }
    render() {
        return (
            <div>
                <header>
                    <input type="text" onChange={this.handler} />
                    <button>提交</button>
                </header>
                <section>
                    <TodoItem list={this.state.list} />
                </section>
            </div>
        )
    }
}
