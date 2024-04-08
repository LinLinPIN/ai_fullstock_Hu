// import React, { Component } from 'react'

// export default class CChild extends Component {

//     render() {
//         return (
//             <div>CChild---{this.props.msg}</div>
//         )
//     }
// }

function CChild(props) {
    return (
        <div>
            <h4>子组件</h4>
            <p>{props.msg}</p>
            <button onClick={props.cb}>修改</button>
        </div>
    )
}

export default CChild