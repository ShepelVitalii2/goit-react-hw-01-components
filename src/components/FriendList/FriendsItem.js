import FriendsListItem from './Friends';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendsList;
