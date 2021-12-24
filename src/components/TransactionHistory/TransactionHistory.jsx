import PropTypes from 'prop-types';
import { TransactionsTableHead } from 'components/TransactionTableHead/TransactionTableHead';
import { TransactionsTableBody } from 'components/TransactionTableBody/TransactionTableBody';
import transactions from './transactions.json';

export const Transactions = () => {
  return (
    <>
      <table className="transaction-history">
        <TransactionsTableHead />
        <TransactionsTableBody items={transactions} />
      </table>
    </>
  );
};

Transactions.propTypes = {
  items: PropTypes.array,
};
