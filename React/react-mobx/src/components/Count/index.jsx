import React from 'react';
import counter from '../../store/counterStore';
import { observer } from 'mobx-react-lite';

const Count = () => {
    return (
        <div>
            <button onClick={() => { counter.addCount(), counter.addList() }}>{counter.count}</button>
            <ul>
                {
                    counter.newList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div >
    );
};

export default observer(Count);// observer 实时监听Count组件