import styled from 'styled-components';

export const Container = styled.i`
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: inherit;

  &::before {
    content: ${props => `"${props.icon}"`};
  }
`;

export const AriaText = styled.span`
  clip: rect(0 0 0 0); 
  height: 1px; 
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0; 
  overflow: hidden;
  position: absolute;
`;
