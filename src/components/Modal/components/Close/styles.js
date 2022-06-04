import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: -13px;
  right: -13px;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: #070a13;
    display: block;
    top: 40px;
    left: 27px;
    width: 3px;
    height: 5px;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #070a13;
    display: block;
    top: 10px;
    left: -4px;
    width: 5px;
    height: 3px;
  }
`;

export const ButtonWrapper = styled.div`
  background-color: ${props => props.theme.colors.beige};
  position: relative;
  padding: 3px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 3px #070a13, 0 0 0 4px ${props => props.theme.colors.beige};

  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(182,175,150,0) 98%);
    right: 0;
    top: 0;
  }
`;

export const Button = styled.button`
  color: red;
  background-color: #1e282c;
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: relative;
`;

export const CornerBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 14px;
  left: -13px;
  overflow: hidden;

  div {
    width: 65%;
    height: 64%;
    display: block;
    background-color: ${props => props.theme.colors.beige};
    border-radius: 50%;
    position: relative;
    left: 50%;
    bottom: 16%;
    box-shadow: 0 0 0 12px ${props => props.theme.colors.beige};
  }
`;
