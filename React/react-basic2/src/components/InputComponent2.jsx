import React, { Component, createRef } from 'react'

export default class InputComponent2 extends Component {
    msgRef = createRef() // 创建了一个存放DOM的容器
    state = {
        message: '床前明月光'
    }
    handle = (e) => {
        this.setState({
            message: e.target.value
        })
        console.log(this.state.message);
    }
    changeHandler = () => {
        console.log(this.msgRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.msgRef} onChange={this.handle} />
                <button onClick={this.changeHandler}>提交</button>
            </div>
        )
    }
}
