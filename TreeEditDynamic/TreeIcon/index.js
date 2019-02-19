/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 *
 * @authors  xt (xiting@fengmap.com)
 * @date     2019/1/6 16:09
 * @describe 显示编辑、删除、添加的TreeNode
 */
'use strict';
import React from 'react';
import { Icon } from 'antd';

export default ({ title, editNode, addNode, delNode }) => {
  return (
    <React.Fragment>
      <span>{title}</span>{' '}
      <Icon type="edit" style={{ marginLeft: '10px' }} onClick={(e) => {
        e.stopPropagation();
        editNode();
      }}/>
      <Icon type="minus-circle" style={{ marginLeft: '10px' }} onClick={(e) => {
        e.stopPropagation();
        delNode();
      }}/>
      <Icon type="plus-circle" style={{ marginLeft: '10px' }} onClick={(e) => {
        e.stopPropagation();
        addNode();
      }}/>
    </React.Fragment>
  );
}
