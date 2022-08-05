import React, { Component } from 'react';
import axios from 'axios';

class WinButtons extends Component {

  gamePlayed = (id) => {
    axios
      .put('/api/scorekeeper', { id })
      .then((res) => {
        if (res.data) {
          this.props.getScore();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { scoreboard } = this.props;
    console.log("This is sb", scoreboard)
    return (
      <div>
        {scoreboard.length > 0 &&
          <div style={{
            display: "inline-flex",
            width: "100%",
            "justify-content": "space-evenly"
          }}>
            <div style={{ width: "66%" }}>
              <button onClick={() => this.gamePlayed(scoreboard[0]._id)}> {scoreboard[0].player} </button>
              <p>{scoreboard[0].gamesWon}</p>
            </div>
            <div style={{ width: "66%" }}>
              <button onClick={() => this.gamePlayed(scoreboard[1]._id)}> {scoreboard[1].player} </button>
              <p>{scoreboard[1].gamesWon}</p>
            </div>
          </div>
        }
      </div>
    );
  }

}

export default WinButtons;