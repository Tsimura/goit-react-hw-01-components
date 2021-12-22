// import items from 'components/TransactionHistory/transactions.json';
const TransactionsTableBody = ({ items }) => {
  return (
    <>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TransactionsTableBody;
