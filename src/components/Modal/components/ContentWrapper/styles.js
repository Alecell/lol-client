import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: ${props => props.theme.colors.beige};
`;

export const VisualStyleTop = styled.div`
  position: absolute;
  left: 5%;
  right: -4px;
  top: -4px;
  height: 50px;
  border: 1px solid currentColor;
  color: inherit;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #070a13;
`;

export const VisualStyleBottom = styled.div`
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: -4px;
  height: 50px;
  border: 1px solid currentColor;
  color: inherit;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #070a13;
`;

export const Main = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  color: inherit;
  background-color: ${props => props.theme.colors.blue};
  border: 2px solid currentColor;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
