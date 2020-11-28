import UserItem from './components/homeTask1/UserItem';
import user from './components/homeTask1/user.json';
import StatisticItem from './components/homeTask2/StatisticItem';
import statistic from './components/homeTask2/statistic.json';
import FriendsItem from './components/homeTask3/FriendsItem';
import friends from './components/homeTask3/friends.json';
import transaction from './components/homeTask4/transaction.json';
import TransactionItems from './components/homeTask4/TransactionItems';

import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Дз№1">
        <UserItem item={user} />
      </Section>
      <Section title="Дз№2">
        <StatisticItem stats={statistic} />
      </Section>
      <Section title="Дз№3">
        <FriendsItem friends={friends} />
      </Section>
      <Section title="Дз№4">
        <TransactionItems items={transaction} />
      </Section>
    </div>
  );
}
