import React from 'react';

class WinPlayer2 extends React.Component {
    constructor(props) {
        super(props)
      
    }
    render() {
        return (
            <>
            <p id='win'>{this.props.player}</p>
            <button onClick= {() => window.location.reload()}>Restart</button>
            </>
        )
    }
} 
export default WinPlayer2