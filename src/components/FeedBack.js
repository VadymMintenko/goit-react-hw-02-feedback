import { Button } from './FeedBack.styled';

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
