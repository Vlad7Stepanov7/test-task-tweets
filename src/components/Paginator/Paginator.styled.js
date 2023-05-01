import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const StyledPaginator = styled(ReactPaginate)`
  margin: 0 auto;
  /* width: fit-content; */
  max-width: 324px;
  height: 55px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 15px; */
  background: #5736A3;
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  @media screen and(min-width: 767px) {
    width: 324px;
  }
  & .arrowBtn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #E52FFF;
    transition: all 250ms linear;
    &:hover,
    &:focus {
      color: #252525;
    }
  }
  & .previousLink,
  & .nextLink {
    line-height: 0px;
    padding: 10px;
  }
  & .pageBtn {
    width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all 250ms linear;
    &:hover,
    &:focus {
      background-color: #252525;
      color: white;
    }
    &.selected {
      background-color: #000;
    }
  }
  & .pageLink {
    padding: 10px;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
  }
`;
