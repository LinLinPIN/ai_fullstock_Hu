import React from "react";
import BrotherA from "./BrotherA";
import BrotherB from "./BrotherB";

import { Provider } from './privider'

class BApp extends React.Component {
    state = {
        message: 'hello'
    }
    fn = (newMsg) => {
        console.log(newMsg);
        this.setState({
            message: newMsg
        })
    }
    render() {
        return (
            <Provider value={this.state.message}>
                <div>
                    <h2>父组件</h2>
                    <BrotherA />
                    <BrotherB />
                </div>
            </Provider>

        )
    }
}



export default BApp;