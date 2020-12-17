import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import coverphoto from '../images/bandbild 1 2020 bw.jpg' 
import Biography from '../components/biography';
import Footer from '../components/footer';
import Members from '../components/members';

class About extends React.Component { 
  render() {
    return( 
      <Container fluid className="justify-content-center">
        <Row className="vh-100 lots-of-bottom-margin">
          <Col className="">
            <img src={coverphoto} className="coverphoto coverphoto-about translate"/>
            <p className="about-text text-center ml-3">REVENGE<br/>PREVAILS</p>
          </Col>
        </Row>
        <Biography/>
        <Members/>
        <Footer/>
      </Container>
    );
  }
}

export default About;