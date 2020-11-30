import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import Footer from './footer';
import coverphoto from '../images/bandbild 3 2020 bw.png' 
import logo from '../images/rp logo.svg'
import habitats from '../images/habitats.png'

class Home extends React.Component { 
  render() {
    return( 
      <Container fluid className="justify-content-center">
        <Row className="vh-100">
          <Col className="cover">
            <img src={logo} className="rp-logo"/>
            <img src={coverphoto} className="coverphoto"/>
          </Col>
        </Row>
        <Row className="news py-5">
          <Col className="text-center">
            <h1>NEWS</h1>
            <Row className="justify-content-center py-5">
              <Col className="col-md-4 my-4">
              <iframe width="100%" height="400px" src="https://www.youtube.com/embed/RdAVcYF1DsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col className="col-md-3 text-justify my-5">
                <h2>CABIN FEVER SESSION MMXX</h2>
                <p>“Cabin fever refers to the distressing claustrophobic irritability or restlessness experienced when a person or group, is stuck at an isolated location or in confined quarters for an extended period of time.” </p>
              </Col>
            </Row>
            <Row className="justify-content-center py-5 mb-5">
              <Col className="col-md-4 my-4">
                <a href="#/music">
                  <img src={habitats} className="habitats"/>
                </a>
              </Col>
              <Col className="col-md-3 text-justify my-5">
                <h2>CABIN FEVER SESSION MMXX</h2>
                <p>“Cabin fever refers to the distressing claustrophobic irritability or restlessness experienced when a person or group, is stuck at an isolated location or in confined quarters for an extended period of time.” </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer/> 
      </Container>
    );
  }
}

export default Home;