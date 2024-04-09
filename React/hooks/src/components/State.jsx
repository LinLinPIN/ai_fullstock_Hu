import React, { useState } from 'react';
import PropTypes from 'prop-types';

const state = props => {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={add}>+</button>
            <span>{count}</span>
        </div>
    );
};

state.propTypes = {

};

export default state;