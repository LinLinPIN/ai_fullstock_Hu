import React, { useEffect, useState } from 'react';
import { List, Tag } from 'antd';

// 子组件
const TotoItem = (props) => {

  return (
    <div>
      <List
        bordered
        dataSource={props.data}
        renderItem={(item, index) => (
          <List.Item>
            {item}
            <Tag closeIcon onClose={(e) => {
              console.log(e);
              e.preventDefault(), props.del(index)
            }}>
              删除
            </Tag>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;