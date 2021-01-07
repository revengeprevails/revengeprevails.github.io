import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import coverphoto from '../images/bandbild 3 2020 bw.jpg' 
import logo from '../images/rp logo.svg'
import FollowUs from '../components/followus'
import Loader from '../components/loader'

const Home = () => { 
  return( 
    <Container fluid className="justify-content-center">
      <Row className="vh-100">
        <Col className="cover">
          <img src={logo} className="rp-logo"/>
          <img 
            src={coverphoto} 
            id="coverphoto" 
            className="coverphoto"
          />
        </Col>
      </Row>
      <FollowUs/>
      <Row className="bg-spots-dark bg-fixed py-5 justify-content-center">
        <Col className="col-md-8 col-12 mt-5">
          <h1 className="text-light text-center mt-5 ">NEWS</h1>
          <Row className="justify-content-center my-5 p-md-5 p-sm-0 text-light">
            <Col className="col-md-6 col-12 p-3">
              <iframe title="Revenge Prevails Cabin Fever Session MMXX" width="100%" height="300em" src="https://www.youtube.com/embed/RdAVcYF1DsQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Col>
            <Col className="col-md-6 col-12 p-3">
              <h2 className="text-left">CABIN FEVER SESSION MMXX</h2>
              <p className="text-justify text-monospace">“Cabin fever refers to the distressing claustro&shy;phobic irrita&shy;bility or restless&shy;ness experi&shy;enced when a person or group, is stuck at an isolated location or in confined quarters for an extended period of time.” </p>
            </Col>
          </Row>
          <Row className="justify-content-center my-5 p-md-5 p-1 text-light">
            <Col className="col-md-6 col-12 p-3">
              <img alt="Habitats album cover" src="https://f4.bcbits.com/img/a0658377898_10.jpg" className="habitats"/>               
            </Col>
            <Col className="col-md-6 col-12 p-3">
              <h2 className="text-left">HABITATS FULL ALBUM 2020</h2>
              <p className="text-justify text-monospace">
                A beast, a beauty, bone-shilling and heart-warming.
                You can feel and taste the deep, dark, woods where this album was composed. 
                Their most extreme album to date. Like the sea itself, calm and beautiful, 
                but also brutal and without mercy. Listen at your own peril…
              </p>
            </Col>
          </Row>            
        </Col>
      </Row>    
    </Container>
  );
  
}

export default Home;