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
  render() {
    return( 
      <Container fluid className="justify-content-center">
        <Album imgsrc={habitats} title="Habitats" info="En bra skiva" type="" tracklist=""/>
        <Album imgsrc={fhc} title="False Hope Cruelty" info="Också en bra skiva" type="" tracklist=""/>
        <Album imgsrc={dts} title="Dark Trembling Solace" info="En annan bra skiva" type="" tracklist=""/>
        <Album imgsrc={bvi} title="Black Void Injection" info="En bra skiva" type="" tracklist=""/>
        <Footer/>
      </Container>
    );
  }
}

export default Music;