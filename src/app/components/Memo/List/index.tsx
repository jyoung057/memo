import * as React from 'react';
import styled from 'styled-components';
import MemoItem from '../item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  flex-shrink: 0;
  padding: 0 10px;
  border-right: 1px solid #e9e9e9;

  @media (max-width: 680px) {
  margin-left: -200px;
  transition: margin 0.2s;
  &:hover {
    margin-left: 0;
  }
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem
        id="1"
        preview="나의 메모입니다."
        createdAt={new Date().toISOString()}
        selected={true}
      />
      <MemoItem
        id="2"
        preview="나의 메모입니다."
        createdAt={new Date().toISOString()}
        selected={false}
      />
      <MemoItem
        id="3"
        preview="나의 메모입니다."
        createdAt={new Date().toISOString()}
        selected={false}
      />
    </List>
  );
}
