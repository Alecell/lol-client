import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background: linear-gradient(180deg, rgba(155,255,0,0) 0%, rgba(9,9,121,0) 50%, ${props => props.theme.colors.beige} 100%);
  transition: .21s all ease-out;

  ${({ active }) => active && `
    opacity: 0.3;
  `}
`

export const Light = styled.div`
  width: 1px;
  height: 1px;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: opacity .21s ease;

  &::before {
    content: '';
    background: radial-gradient(circle,${props => props.theme.colors.lightBeige} -44%,rgba(0,0,0,0) 49%);
    height: 89px;
    width: 89px;
    display: block;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: '';
    display: block;
    transform: translateX(-50%);
    height: 3px;
    width: 6ch;
    position: absolute;
    bottom: 0px;
    background: radial-gradient(circle, rgba(182,175,150,1) 0%, rgba(182,175,150,1) 50%, rgba(182,175,150,0) 100%);
  }
`

export const Container = styled.li`
  padding: 0 21px;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    ${GradientBackground} {
      opacity: 0.3;
    }
  }

  &:hover ${Light} {
    opacity: 0.6;
  }
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${props => props.highlight ? props.theme.colors.lightBeige : props.theme.colors.beige};

  &:hover {
    color: ${props => props.theme.colors.lightBeige};
  }
`

export const Label = styled.span`
  color: inherit;
`
