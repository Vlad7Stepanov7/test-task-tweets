import styled from "styled-components";
import picture from "../../images/picture.png";
import vector from "../../images/vector.svg";

export const Container = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 214px;
    width: 100%;
    height: 8px;
    background-color: #EBD8FF;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 306px;
  height: 168px;
  background-image: url(${picture});
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  background-image: url(${vector});
  background-repeat: no-repeat;
`;

export const WrapperForAvatar = styled.div`
position: relative;
  display: inline-block;
  margin-top: 176px;
  margin-left: 150px;
  width: 80px;
  height: 80px;
 
  
  
`;
export const Elipse = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  border: 8px solid #EBD8FF;
  border-radius: 50%;
  background-color: #5736A3;
  background-image: url(${p => p.avatar});
  background-repeat: no-repeat;
  background-size: contain;
`;