import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import ListeStations from "./Component/ListeStations";
import CardStation from "./Component/CardStation";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <ListeStations/>
          </Col>
          <Col md={8}>
            <CardStation/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
