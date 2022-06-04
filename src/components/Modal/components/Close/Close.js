import { Button, Container, ButtonWrapper, Wrapper, CornerBorder } from './styles';

function Close() {
  return (
    <Container>
      <Wrapper>
        <CornerBorder>
          <div />
        </CornerBorder>
        <ButtonWrapper>
          <Button>
            x
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Close;
