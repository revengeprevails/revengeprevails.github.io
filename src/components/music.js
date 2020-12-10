import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import Footer from './footer';
import Album from './album';

import habitats from '../images/habitats.png' 
import fhc from '../images/false hope cruelty.png' 
import dts from '../images/dark trembling solace.png' 
import bvi from '../images/black void injection.png' 

class Music extends React.Component { 
  
  constructor() {
    super();
    this.state = {
      releases: []
    };
  }

  componentDidMount() {
    let requestURL = 'https://raw.githubusercontent.com/revengeprevails/revengeprevails.github.io/master/src/music.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      const json = request.response;
      var allReleases = json['releases'];
      this.setState({releases: allReleases})

    }.bind(this);
  }

  render() {
    return( 
      <Container fluid className="justify-content-center">
        <Album releases={this.state.releases}/>
        <Footer/>
      </Container>
    );
  }
}

export default Music;