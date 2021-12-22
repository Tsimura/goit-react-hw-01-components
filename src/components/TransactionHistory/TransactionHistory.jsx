import PropTypes from 'prop-types';
import TransactionsTableHead from 'components/TransactionTableHead/TransactionTableHead';
import TransactionsTableBody from 'components/TransactionTableBody/TransactionTableBody';
import transactions from './transactions.json';

const Transactions = () => {
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
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Transactions;
