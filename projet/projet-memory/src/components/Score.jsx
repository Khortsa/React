import React from 'react';
import WinPlayer from './WinPlayer';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if(this.props.score1 < 8){
    return (
        <div className='scoreCard'>
          <h1>Score</h1>
          <h2>{50 - this.props.turn}</h2>
        </div>
    );
    }else{
      return (
        <div className='scoreCard'>
          <h1>Score</h1>
          <h2>{50 - this.props.turn}</h2>
          <WinPlayer />
        </div>
    );
    }
  }
}

export default Score;