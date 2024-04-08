function HelloReact() {
    const handler = (e) => {
        console.log(e);
    }
    return <div>
        <p>这是一个函数组件</p>
        <button onClick={handler}>click me</button>
    </div>
}

import ExitComponent from "./conponents/ExitComponent";
import ClassComponent from "./conponents/ClassComponent";
import React from "react"
class HelloVue extends React.Component {
    render() {
        return <h3>这是一个类组件</h3>
    }
}

function App() {
    return (
        <div className="app">
            <HelloReact />
            <HelloVue />
            <hr />
            <ExitComponent />
            <ClassComponent />
        </div>
    )
}

export default App