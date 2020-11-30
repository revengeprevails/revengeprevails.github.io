import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

class About extends React.Component { 
  render() {
    return( 
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;