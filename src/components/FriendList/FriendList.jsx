import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import friends from './friends.json';

const FriendList = () => {
  console.log(friends);
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
