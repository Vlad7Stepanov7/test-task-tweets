import styled from "styled-components";

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 26px;
  margin-left: 92px;
  text-align: center;
  
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;

  color: #373737;
  background-color: ${p => p.isFollowing ? "#5CD3A8" : "#EBD8FF"} ;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;