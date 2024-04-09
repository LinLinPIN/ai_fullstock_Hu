import React, { Component, createRef } from 'react'

export default class Life extends Component {
    constructor() {
        super()
        console.log('Life 组件开始加载');
        this.name = 'tom'
        this.ref = createRef()
        this.state = { count: 1 }
    }
    handlerClick = () => {
        this.state.count++
        this.forceUpdate()
    }
    componentDidMount() {
        console.log('Life 组件挂载完成');
    }
    componentDidUpdate() {
        console.log('更新完成');
    }
    render() {
        console.log('Life 组件被渲染');
        return (
            <div>
                <h1>Life</h1>
                <h3 ref={this.ref}>{this.name}</h3>
                <h3 onClick={() => this.handlerClick()}>{this.state.count}</h3>
            </div>
        )
    }
}
