import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  padding: 8px 15px;
  border-bottom: ${({ selected }) => (selected ? '1px solid #000' : 'none')};
  margin: 5px 0;
  user-select: none;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#ffe48b' : '#fff')};
`;

const MemoTitle = styled.div`
  font-size: 1rm;
  font-weight: 700;
  color: #2c2c2c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const MemoContent = styled.div`
  font-size: 0.8rm;
  color: #8b8b8b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export default function MemoItem({
  id,
  preview,
  createdAt,
  selected,
}: {
  id: string;
  preview: string;
  createdAt: string;
  selected: boolean;
}) {
  return (
    <Box selected={selected}>
      <MemoTitle>{preview}</MemoTitle>
      <MemoContent>{new Date(createdAt).toLocaleDateString('ko')}</MemoContent>
      <MemoContent>{preview}</MemoContent>
    </Box>
  );
}
