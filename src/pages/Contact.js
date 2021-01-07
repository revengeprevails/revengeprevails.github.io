import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import dodo from '../images/dront.svg';


class Contact extends React.Component { 
  render() {
    return( 
      <Container className="contact">
        <Row className="justify-content-center vh-100 pb-5">
          <Col className="my-auto col-md-6 col-12 contact-text">
            <h2 className="contact-text py-2">Do you wish to make contact?</h2>
            <p className="contact-text">email to: <a className="my-link" target="_blank" href="mailto: revengeprevails@gmail.com">revengeprevails@gmail.com</a></p>
            <p className="contact-text">or message us: <a className="my-link" target="_blank" href="https://www.facebook.com/revengeprevails">facebook.com/revengeprevails</a></p>
          </Col>
          <Col className="my-auto col-md-6 col-12">
            <img className="w-100 mb-5" src={dodo}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Contact;