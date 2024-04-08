import React, { Component } from 'react'

// 受控表单组件 input自己的value状态被react组件状态所控制
export default class InputComponent extends Component {
    state = {
        message: '床前明月光'
    }
    changeHandle = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.message} onChange={this.changeHandle} />
            </div>
        )
    }
}
