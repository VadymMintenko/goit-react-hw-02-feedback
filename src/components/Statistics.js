export const Statistics = ({
  state: { good, neutral, bad },
  total,
  procents,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {procents}%</p>
    </div>
  );
};
