import React from 'react';

class Score2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if ((this.props.turn % 2) !== 0) {
      return (
        <div className='scoreCard'>
          <h1><b>Player 1 turn</b></h1>
          <h3>Player 1: {this.props.score1}</h3>
          <h3>Player 2: {this.props.score2}</h3>
        </div>
      )
    } else {
      return (
        <div className='scoreCard'>
          <h1><b>Player 2 turn</b></h1>
          <h3>Player 1: {this.props.score1}</h3>
          <h3>Player 2: {this.props.score2}</h3>
        </div>
      )
    }
  }
}



export default Score2;