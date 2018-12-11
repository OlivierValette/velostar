import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Grid, Row, Col, Alert} from 'react-bootstrap';
import ListeStations from "./Component/ListeStations";
import CardStation from "./Component/CardStation";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { idStation: 0 }
  }

  render() {

    let card = null;
    if (this.state.idStation === 0) {
      card = <Alert bsStyle="info">Sélectionnez une station</Alert>;
    } else {
      card = <CardStation idStation={this.state.idStation}/>;
    }
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <ListeStations idSelected={id => this.setState( {idStation: id} )}/>
          </Col>
          <Col md={8}>
            {card}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
