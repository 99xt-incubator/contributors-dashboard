import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}> heading 1</Col>
          <Col xs={12}> heading 2</Col>
        </Row>
        <Row>
          <Col xs={12}> Top Contributors </Col>
        </Row>
        <Row>
          <Col md={6}>99xt list</Col>
          <Col md={6}> 99xt incubator list </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;