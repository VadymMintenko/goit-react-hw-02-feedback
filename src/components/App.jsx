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
    render: false,
  };

  changeStatistic = evt => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    this.state.render = true;
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
    return (
      <Container>
        <Section title="Pleace leave feedback">
          <FeedBack onClick={this.changeStatistic} />
          {!this.state.render && (
            <Notification message={'There is no feedback'} />
          )}
          {this.state.render && (
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
