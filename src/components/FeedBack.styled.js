import styled from 'styled-components';

export const Button = styled.button`
  background-color: gray;
  margin-right: 10px;
  color: wheat;
  border-radius: 5px;
  border: solid 1px black;
  &:hover {
    background-color: firebrick;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
