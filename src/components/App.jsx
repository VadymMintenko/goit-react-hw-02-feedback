import React from 'react';
import { FeedBack } from './FeedBack';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Container } from './Container.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStatistic = evt => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const procents = (this.state.good / this.countTotalFeedback()) * 100;

    return procents.toFixed();
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Pleace leave feedback">
          <FeedBack onClick={this.changeStatistic} />
          {totalFeedback === 0 && (
            <Notification message={'There is no feedback'} />
          )}
          {totalFeedback > 0 && (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              procents={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}
