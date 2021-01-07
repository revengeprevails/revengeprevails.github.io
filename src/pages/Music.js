import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import Footer from '../components/footer';
import Album from '../components/album';

class Music extends React.Component { 
  
  constructor() {
    super();
    this.state = {
      releases: []
    };
  }

  componentDidMount() {
    const releasesJSON = require('../music.json')
    console.log(releasesJSON.releases)
    this.setState({releases: releasesJSON.releases})
  }

  render() {
    return( 
      <Container fluid className="justify-content-center music">        
        <Album releases={this.state.releases}/>
      </Container>
    );
  }
}

export default Music;