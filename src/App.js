import styled from 'styled-components';

import Friends from './components/Friends/Friends';
import MenuItem from './components/MenuItem/MenuItem';

import './App.css';

const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  max-height: 720px;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 89px calc(100% - 89px);
`

const Header = styled.header`
  display: grid;
  grid-template-columns: 80% 20%;
  background-color: ${props => props.theme.colors.blue};
  border-bottom: 1px solid gold;
`

const StatusDeInvocador = styled.div`
  
`



const Main = styled.main`
  background-color: ${props => props.theme.colors.blue};
`

const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`

const MenuWrapper = styled.ul`
  display: flex;
`

function App() {
  return (
    <Container>
      <Header>
        <Nav>
          <MenuWrapper>
            <MenuItem label='início' to='/' />
            <MenuItem label='tft' to='/tft' />
            <MenuItem label='clash' to='/clash' />
          </MenuWrapper>
          <MenuWrapper>
            <MenuItem icon='perfil' to='/perfil' />
            <MenuItem icon='bag' to='/colecao' />
            <MenuItem icon='hammer' to='/espolio' />
            <MenuItem icon='coins' to='/loja' />
          </MenuWrapper>
        </Nav>
        <StatusDeInvocador>
          Status de Invocador
        </StatusDeInvocador>
      </Header>
      <Main>
        main
      </Main>
      <Friends />
    </Container>
  );
}

export default App;
