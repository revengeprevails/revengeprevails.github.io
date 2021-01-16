import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import coverphoto from '../images/bandbild 1 2020 bw.jpg' 
import Biography from '../components/biography';
import Members from '../components/members';

class About extends React.Component { 
  render() {
    return( 
      <Container fluid className="justify-content-center">
        <Row className="">
          <Col className="my-5 py-5">
            <img id="coverphoto" src={coverphoto} className="coverphoto coverphoto-about"/>       
            <p className="about-text text-center">REVENGE<br/>PREVAILS</p>          
          </Col>
        </Row>
        <Biography/>
        <Members/>
      </Container>
    );
  }
}

export default About;