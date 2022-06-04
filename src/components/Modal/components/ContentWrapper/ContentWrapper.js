import { Container, Content, VisualStyleTop, VisualStyleBottom, Main } from './styles';
import Close from '../Close/Close';
import ActionWrapper from '../ActionWrapper/ActionWrapper';

function ContentWrapper() {
  return (
    <Container>
      <VisualStyleTop />
      <VisualStyleBottom />
      <Close />
      <Main>
        <Content>

        </Content>
        <ActionWrapper />
      </Main>
    </Container>
  )
}

export default ContentWrapper;
