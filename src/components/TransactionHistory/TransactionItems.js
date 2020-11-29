import Transaction from './Transaction';
import s from './Transaction.module.css';

function TransactionItem({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>
      <tbody>{items.map(Transaction)}</tbody>
    </table>
  );
}

export default TransactionItem;
