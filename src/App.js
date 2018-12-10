import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle={"primary"}>Test</Button>
      </div>
    );
  }
}

export default App;
