import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  flex: 1;
  min-width: 0;
  height: calc(100vh - 60px);
  padding: 0 0 0 10px;
  overflow: auto;
  box-sizing: border-box;
  background-color: #eee;
  border: 0;
  border-radius: 10px;
`;

export default function MemoEditor() {
  return <Box> </Box>;
}
