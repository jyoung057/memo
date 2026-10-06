import * as React from 'react';
import styled from 'styled-components';
import { TitleText } from '../Text';
import SmallButton from '../Button/smallButton';

import { ReactComponent as PostDeleteIcon } from './assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeTodo } from './assets/check_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeImageIcon } from './assets/add_photo_alternate_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

import { Block } from '../Block';
import SearchInput from '../Input/Searchinput';

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  flex-shrink: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 680px) {
  margin-left: -200px;

`;

const RightMenu = styled(Menu)`
  flex: 1;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolbar() {
  return (
    <Box>
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>Memo</TitleText>
        <SmallButton onClick={() => {}} Icon={() => <PostDeleteIcon />} />
      </LeftMenu>

      <RightMenu>
        <SmallButton onClick={() => {}} Icon={() => <PostAddIcon />} />
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeBoldIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeSizeIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeTodo />} />
        </div>

        <SmallButton onClick={() => {}} Icon={() => <MakeImageIcon />} />
        <SearchInput />
      </RightMenu>
    </Box>
  );
}
