import React from 'react';

import { Tag } from 'antd';

import { StatusTagProps } from './interfaces';

function StatusTag({ state }: StatusTagProps) {
  switch (state) {
    case 'PENDING':
      return <Tag color="blue">PENDING</Tag>;
    case 'APPROVED':
      return <Tag color="green">APPROVED</Tag>;
    case 'REJECTED':
      return <Tag color="orange">REJECTED</Tag>;
    case 'REMOVED':
      return <Tag color="orange">REMOVED</Tag>;
    default:
      return null;
  }
}

export default StatusTag;
