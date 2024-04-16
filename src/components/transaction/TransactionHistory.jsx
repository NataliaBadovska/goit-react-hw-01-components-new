import PropTypes from 'prop-types';
import css from './transaction.module.css';

export const TransactionHistory = ({ items }) => {
 return (
    <table className={css.transactionHistory}>
  <thead className={css.tHead }>
    <tr >
      <th className={css.headerLine }>Type</th>
      <th className={css.headerLine }>Amount</th>
      <th className={css.headerLine }>Currency</th>
    </tr>
         </thead>
         
 
     <tbody  className={css.tBody}>
       {items.map(item =>
     <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
     </tr>)}
  </tbody> 
  
</table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}