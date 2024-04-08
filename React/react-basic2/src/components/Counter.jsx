import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }
    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.setCount}>计数器 --- {this.state.count}</button>
            </div>
        )
    }
}
