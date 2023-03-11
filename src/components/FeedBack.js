import { Button } from './FeedBack.styled';
import PropTypes from 'prop-types';
export const FeedBack = ({ onClick, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button key={option} type="button" onClick={() => onClick(option)}>
          {option}
        </Button>
      ))}
    </div>
  );
};

FeedBack.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
