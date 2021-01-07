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
        <Row className="vh-100">
          <Col className="my-5">
            <img src={coverphoto} className="coverphoto coverphoto-about translate"/>
            <div>
              <p className="about-text text-center">REVENGE<br/>PREVAILS</p>  
            </div>
          </Col>
        </Row>
        <Biography/>
        <Members/>
      </Container>
    );
  }
}

export default About;