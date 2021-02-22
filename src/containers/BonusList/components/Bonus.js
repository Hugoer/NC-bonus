import PropTypes from 'prop-types';

export function Bonus({ bonus }) {
  return (
    <>
      <p>{bonus.from} - {bonus.to}: {bonus.amount}</p>
      <span>{bonus.text}</span>
    </>
  );
}

Bonus.propTypes = {
  bonus: PropTypes.object,
};

export default Bonus;