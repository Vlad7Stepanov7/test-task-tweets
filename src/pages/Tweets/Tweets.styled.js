import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const ButtonBack = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 30px;
  font-weight: 400;
  color: #fff;
  background-color: #5736A3;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #5CD3A8;
  }
`;