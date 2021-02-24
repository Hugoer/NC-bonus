import PropTypes from 'prop-types';
import styles from './bonus.module.css';
export function Bonus({ bonus }) {
  return (
    <div className={styles.bonus}>
      <p>{bonus.from} - {bonus.to}: {bonus.amount}</p>
      <span>{bonus.text}</span>
    </div>
  );
}

Bonus.propTypes = {
  bonus: PropTypes.object,
};

export default Bonus;