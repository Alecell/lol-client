import { Container } from './styles'
import ContentWrapper from './components/ContentWrapper/ContentWrapper';

function Modal(props) {
  return (
    <Container>
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </Container>
  )
}

export default Modal;
