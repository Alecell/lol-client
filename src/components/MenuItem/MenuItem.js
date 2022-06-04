import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMouseHovered } from 'react-use';

import Icon from '../../components/Icon/Icon';

import { Container, GradientBackground, Label, Link, Light } from './styles';

function MenuItem(props) {
  const ref = useRef(null);

  const location = useLocation();
  const { elX } = useMouseHovered(ref, {whenHovered: true});
  
  const highlight = location.pathname === props.to;
  
  const renderContent = () => {
    let content = <Label>{props.label}</Label>;

    if (props.icon) {
      content = <Icon icon={props.icon} size={27} />;
    }

    return content;
  }; 

  return (
    <Container ref={ref}>
      <Link to={props.to} highlight={highlight}>
        <GradientBackground active={highlight} />
        {renderContent()}
        <Light style={{left: elX}} />
      </Link>
    </Container>
  )
}

export default MenuItem;
