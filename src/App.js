import React, { Component } from 'react';
import './App.css';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tabs from './state/Tabs';
// import Accordion from './state-drills/Accordion';
import DemonymApp from './demonymapp/demonymApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DemonymApp />
      </div>
    );
  }
}

export default App;
