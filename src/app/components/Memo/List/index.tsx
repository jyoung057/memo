import * as React from 'react';
import styled from 'styled-components';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  padding: 0 10px;
  border-right: 1px solid #e9e9e9;
`;

export default function MemoList() {
  return <List></List>;
}
