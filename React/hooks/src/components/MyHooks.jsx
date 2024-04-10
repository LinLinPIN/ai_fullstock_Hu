import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useScroll } from '../_hooks/useScroll';
import { useLocal } from '../_hooks/useLocal';

const MyHooks = props => {
    const [pageY] = useScroll(0)
    const [count, setCount] = useLocal('count', 0)
    return (
        <div style={{ height: '200vh', marginTop: '50vh', textAlign: 'center' }}>
            当前页面的滚动距离为：{pageY}
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div >
    );
};

MyHooks.propTypes = {

};

export default MyHooks;