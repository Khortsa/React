import React from 'react';

class WinPlayer extends React.Component {
    constructor(props) {
        super(props)
      
    }
    render() {
        return (
            <>
            <button onClick= {() => window.location.reload()}>Restart</button>
            </>
        )
    }
} 
export default WinPlayer