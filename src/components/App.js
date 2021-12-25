import PropTypes from 'prop-types';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Transactions } from './TransactionHistory/TransactionHistory';
import { FriendList } from './FriendList/FriendList';

import user from './Profile/user.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import 'components/App.css';

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics />

      <FriendList friends={friends} />

      <Transactions items={transactions} />
    </>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

Transactions.propTypes = {
  items: PropTypes.array.isRequired,
};
