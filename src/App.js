import Profile from './components/Profile/Profile';
import profile from './components/Profile/user.json';
import StatisticItem from './components/Statistics/StatisticItem';
import statistic from './components/Statistics/statistic.json';
import FriendsList from './components/FriendList/FriendsItem';
import friends from './components/FriendList/friends.json';
import transaction from './components/TransactionHistory/transaction.json';
import TransactionItems from './components/TransactionHistory/TransactionItems';

import Section from './components/Section';

export default function App() {
  const { name, tag, location, avatar, stats } = profile;

  return (
    <Section>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <StatisticItem title="Upload stats" stats={statistic} />
      <FriendsList friends={friends} />
      <TransactionItems items={transaction} />
    </Section>
  );
}
