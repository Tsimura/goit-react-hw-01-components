import PropTypes from 'prop-types';

export const TransactionsTableBodyItem = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

TransactionsTableBodyItem.protoType = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
