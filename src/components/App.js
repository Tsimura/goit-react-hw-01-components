import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import StatisticsSection from './StatisticsSection/StatisticsSection';
import FriendListItem from './FriendList/FriendList';
import Transactions from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /> */}

      <>
        <Statistics />
      </>
      {/* <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map(data => (
            <Statistics
              key={data.id}
              label={data.label}
              percentage={data.percentage}
            />
          ))}
        </ul>
      </section> */}

      {/* <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul> */}

      {/* <table className="transaction-history">
        <tbody>
          {transactions.map(transaction => (
            <Transactions
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          ))}
        </tbody>
      </table> */}
    </>
  );
}
