import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  background-color: #eee;
  border: 0;
  border-radius: 10px;
  padding: 0 0 0 10px;
  overflow: auto;
`;

export default function MemoEditor() {
  return <Box> </Box>;
}
