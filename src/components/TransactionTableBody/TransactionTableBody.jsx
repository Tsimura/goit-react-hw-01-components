import PropTypes from 'prop-types';
import { TransactionsTableBodyItem } from 'components/TransactionTableBodyItem/TransactionTableBodyItem';

export const TransactionsTableBody = ({ items }) => {
  return (
    <>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionsTableBodyItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </>
  );
};

TransactionsTableBody.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
