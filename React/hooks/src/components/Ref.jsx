import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Ref = props => {
    const h2ref = useRef(null)
    useEffect(() => {
        console.log(h2ref);
    }, [h2ref])
    const handle = () => {
        h2ref.current.innerHTML = '你好'
    }
    return (
        <div>
            <h2 ref={h2ref}>Ref</h2>
            <button onClick={handle}>改变</button>
        </div>
    );
};
Ref.propTypes = {

};

export default Ref;