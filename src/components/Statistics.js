import PropTypes from 'prop-types';

export const Statistics = ({
  state: { good, neutral, bad },
  total,
  procents,
  title,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {procents}%</p>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
