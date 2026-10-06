import MemoToolbar from '../../components/Memo/Toolbar';
import * as React from 'react';
import styled from 'styled-components';
import MemoList from '../../components/Memo/List';
import MemoEditor from 'app/components/Memo/Editor';

const FlexRow = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
`;

export function HomePage() {
  return (
    <div>
      <MemoToolbar />
      <FlexRow>
        <MemoList />
        <MemoEditor />
      </FlexRow>
    </div>
  );
}
