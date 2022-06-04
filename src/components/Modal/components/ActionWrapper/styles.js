import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: -2px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  box-shadow: 2px 0px 0px 0px #020914, -2px 0px 0px 0px #020914;
  background-color: #020914;
  position: relative;

  &::before {
    content: '';
    height: 8px;
    width: 2px;
    background: ${props => props.theme.colors.beige};
    display: block;
    position: absolute;
    bottom: 0;
    left: -4px;
    border-top-left-radius: 5px;
  }

  &::after {
    content: '';
    height: 8px;
    width: 2px;
    background: ${props => props.theme.colors.beige};
    display: block;
    position: absolute;
    bottom: 0;
    right: -4px;
    border-top-right-radius: 5px;
  }
`;
