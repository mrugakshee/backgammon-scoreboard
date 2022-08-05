import React, { Component } from 'react';
import axios from 'axios';
import WinButtons from './WinButtons';

class Scoreboard extends Component {
  state = {
    scoreboard: [],
  };

  componentDidMount() {
    this.getScore();
  }

  getScore = () => {
    axios
      .get('/api/scorekeeper')
      .then((res) => {
        if (res.data) {
          this.setState({
            scoreboard: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { scoreboard } = this.state;
    console.log("this is Scoreboard", scoreboard)
    return (
      <div>
        <h1>Backgammon Scoreboard</h1>
        <h2>Who won?</h2>
        <WinButtons getScore={this.getScore} scoreboard={scoreboard} />
      </div>
    );
  }

}

export default Scoreboard;