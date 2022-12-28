import React from 'react';
// import { Component } from 'react.componets';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = state => {
    const feedbackValues = Object.values(state);
    return feedbackValues.reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = state => {
    const feedbackValues = Object.values(state);
    const totalFeedback = feedbackValues.reduce((acc, el) => acc + el, 0);
    const feedbackGoodValues = state.good;
    return Math.round((feedbackGoodValues / totalFeedback) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.addGood}>
            Good
          </button>
          <button type="button" onClick={this.addNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.addBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>
            Good:<span> {this.state.good}</span>
          </li>
          <li>
            Neutral:<span> {this.state.neutral}</span>
          </li>
          <li>
            Bad:<span> {this.state.bad}</span>
          </li>
          <li>
            Total:<span> {this.countTotalFeedback(this.state)}</span>
          </li>
          <li>
            Positive feedback:
            <span> {this.countPositiveFeedbackPercentage(this.state)}</span>%
          </li>
        </ul>
      </div>
    );
  }
}
