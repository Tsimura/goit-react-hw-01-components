import PropTypes from 'prop-types';
import { TransactionsTableHead } from 'components/TransactionTableHead/TransactionTableHead';
import { TransactionsTableBody } from 'components/TransactionTableBody/TransactionTableBody';
import transactions from './transactions.json';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const Transactions = () => {
  return (
    <>
      <table className={css.transactionHistory}>
        <TransactionsTableHead />
        <TransactionsTableBody items={transactions} />
      </table>
    </>
  );
};

Transactions.propTypes = {
  items: PropTypes.array,
};
