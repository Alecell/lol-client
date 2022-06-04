import { ActionsWrapper, Aside, Header, Title } from './styles';
import Icon from '../Icon/Icon';
import AddFriend from './components/HeaderActions/AddFriend/AddFriend';

function Friends() {
  return (
    <Aside>
      <Header>
        <Title>Social</Title>
        <ActionsWrapper>
          <AddFriend />
          <Icon icon='friendFolder' />
          <Icon icon='chatOptions' size={23} />
          <Icon icon='search' />
        </ActionsWrapper>
      </Header>
      {/* <FriendList></FriendList>
      <Footer></Footer> */}
    </Aside>
  )
}

export default Friends;
