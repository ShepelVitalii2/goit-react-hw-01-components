import Friends from './Friends';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

function FriendsItem({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.friendItem} key={friend.id}>
          <Friends
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendsItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default FriendsItem;
