import styled from 'styled-components';

export const Aside = styled.aside`
  padding: 5px 8px 0;
  background-color: ${props => props.theme.colors.blue};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.gray};
`

export const ActionsWrapper = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.beige};
  display: flex;
  gap: 13px;
`