export const FeedBack = ({
  state: { good, neutral, bad },
  onClick,
  total,
  procents,
}) => {
  return (
    <div>
      <h2>Pleace leave feedback</h2>
      <button type="button" onClick={() => onClick('good')}>
        Good
      </button>
      <button type="button" onClick={() => onClick('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onClick('bad')}>
        Bad
      </button>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {procents}%</p>
    </div>
  );
};
