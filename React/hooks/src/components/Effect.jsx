import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Effect = props => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Tom')
    const add = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return () => {// 会在组件卸载的时候触发
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>
            <button onClick={add}>+</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
            <span>{count}</span>
        </div>
    );
};

Effect.propTypes = {

};

export default Effect;