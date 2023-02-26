import React from 'react';
import { FeedBack } from './FeedBack';
import { Section } from './Section';

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
    console.log(procents);
    return procents.toFixed();
  };

  render() {
    return (
      <div>
        <Section></Section>
        <FeedBack
          state={this.state}
          onClick={this.changeStatistic}
          total={this.countTotalFeedback()}
          procents={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
