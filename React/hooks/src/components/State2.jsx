import React, { useState } from 'react';
import PropTypes from 'prop-types';

const State2 = props => {
    const [n] = useState(2)
    const [count, setCount] = useState(() => {
        return props.num * n
    })
    return (
        <div>
            <button onClick={() => setCount(count + n)}>{count}</button>
        </div>
    );
};

State2.propTypes = {

};

export default State2;