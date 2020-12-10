import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import Footer from './footer';
import Album from './album';

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
      <Container fluid className="justify-content-center music">        
        <Album releases={this.state.releases}/>
        <Footer/>
      </Container>
    );
  }
}

export default Music;