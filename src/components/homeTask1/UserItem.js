import User from './User';
import user from '../homeTask1/user.json';

function UserItem() {
  return (
    <ul>
      {user.map(item => (
        <li key={item.avatar}>
          <User
            name={item.name}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            followers={item.stats.followers}
            views={item.stats.views}
            likes={item.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

export default UserItem;
