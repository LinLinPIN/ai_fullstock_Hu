import React, { Component } from 'react'
import PChild from './components/PChild'

export default class Papp extends Component {
    state = {
        msg: '父组件'
    }
    callBack = (newMsg) => {
        console.log('拿到子组件的数据:' + newMsg);
        this.setState({
            msg: newMsg
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <PChild cb={this.callBack} />
            </div>

        )
    }
}
