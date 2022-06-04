import Icon from '../../../../Icon/Icon';
import Modal from '../../../../Modal/Modal';
import { Button } from '../styles';

function AddFriend() {
  const toggleAddFriendModal = (show) => ()  => {
    
  }

  return (
    <Button onClick={toggleAddFriendModal(true)}>
      <Modal />
      <Icon icon='addFriend' />
    </Button>
  );
};

export default AddFriend;
