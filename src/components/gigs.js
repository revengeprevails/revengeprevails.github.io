import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

class Gigs extends React.Component { 
  render() {
    return( 
      <Container>
        <Row>
          <Col>
            <h1>Gigs</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Gigs;