import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


class Contact extends React.Component { 
  render() {
    return( 
      <Container className="">
        <Row className="justify-content-center vh-100 pb-5">
          <Col className="my-auto">
            <h2 className="py-2">Do you wish to make contact?</h2>
            <h3>email to: <a className="my-link" target="_blank" href="mailto: revengeprevails@gmail.com">revengeprevails@gmail.com</a></h3>
            <h3>or message us: <a className="my-link" target="_blank" href="https://www.facebook.com/revengeprevails">facebook.com/revengeprevails</a></h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Contact;