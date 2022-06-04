import { Container, AriaText } from './styles';
import { icons } from './data';

function Icon(props) {
  const icon = icons[props.icon];
  const styles = { fontSize: `${props.size}px` }

  return (
    <Container icon={icon.code} style={styles}>
      <AriaText>{icon.description}</AriaText>
    </Container>
  )
}

export default Icon;
