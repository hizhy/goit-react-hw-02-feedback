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
            good:<span> {this.state.good}</span>
          </li>
          <li>
            neutral:<span> {this.state.neutral}</span>
          </li>
          <li>
            bad:<span> {this.state.bad}</span>
          </li>
        </ul>
      </div>
    );
  }
}
