import css from 'components/TransactionTableHead/TransactionTableHead.module.css';
export const TransactionsTableHead = () => {
  return (
    <>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
    </>
  );
};
