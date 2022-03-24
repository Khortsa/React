import React from 'react';
import './App.css';
import Router from "./router/Router"


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Emo-Memo</h1>
        <div id="main">
          <Router />
        </div>
      </div>

    );
  }
}
export default App;
