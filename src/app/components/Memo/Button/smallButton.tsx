import * as React from 'react';
import styled from 'styled-components';

const RoudBox = styled.button`
  width: 36px;
  height: 36px;
  min-width: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  outline: 0;
  background-color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
  & svg {
    fill: #646464;
  }
`;

export default function SmallButton({
  className,
  value,
  onClick,
  Icon,
}: {
  className?: string;
  value?: string;
  onClick?: () => void;
  Icon?: () => JSX.Element;
}) {
  return (
    <RoudBox onClick={onClick} className={className} value={value}>
      {Icon && <Icon />}
    </RoudBox>
  );
}
