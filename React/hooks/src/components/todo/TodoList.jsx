import React, { createRef, useState } from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';

// 父组件
const TodoList = () => {
  const [data, setData] = useState([]);
  const val = createRef(null)
  let msg = ''
  const handle = () => {
    msg = val.current.input.value
    setData([...data, msg])
  }
  const Del = (index) => {
    data.splice(index, 1)
    console.log(index);
    setData([...data])
  }
  return (
    <div style={{ width: '400px' }}>

      <header style={{ display: 'flex' }}>
        <Input ref={val} />
        <Button onClick={handle}>提交</Button>
      </header>

      <section>
        <TotoItem data={data} del={Del}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;