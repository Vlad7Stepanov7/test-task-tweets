import styled from "styled-components";

export const List = styled.ul`
  width: 214px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;
  list-style: none;
  text-align: center;
`;

export const Item = styled.li`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #EBD8FF;
  
  
  &:not(:first-child) {
    margin-top: 16px;
  }
`;