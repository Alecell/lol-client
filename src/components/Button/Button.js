import { Container } from './styles';

function Button(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Button;
