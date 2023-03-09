import { Button } from './FeedBack.styled';
import PropTypes from 'prop-types';
export const FeedBack = ({ onClick }) => {
  return (
    <div>
      <Button type="button" onClick={() => onClick('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onClick('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onClick('bad')}>
        Bad
      </Button>
    </div>
  );
};

FeedBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
