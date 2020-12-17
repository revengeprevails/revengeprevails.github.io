import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import Gig from '../components/gig';
import Footer from '../components/footer';
import RotatingSnakes from '../components/rotatingSnakes';

class Gigs extends React.Component { 

  constructor() {
    super();
    this.state = {
      previousGigs: [],
      comingGigs: []
    };
  }

  componentDidMount() {  
    const gigsJSON = require('../gigs.json')
    //console.log(gigsJSON.gigs)
    //var reversedGigs = gigsJSON.gigs.reverse();
    
    var previousGigs = [];
    var comingGigs = [];

    gigsJSON.gigs.forEach(element => {

      var gigDate = new Date(element.date);
      var todaysDate = new Date();
      if(gigDate > todaysDate ) {
        comingGigs.push(element)
      }
      else { previousGigs.push(element) }
    });
    
    previousGigs.reverse();

    this.setState({previousGigs: previousGigs})
    this.setState({comingGigs: comingGigs})
  }

  render() {
    return( 
      <Container fluid className="justify-content-center gigs bg-dark">   
        <RotatingSnakes/>    
        <Gig title="Upcoming gigs" gigs={this.state.comingGigs}/>
        <Gig title="Previous gigs" gigs={this.state.previousGigs}/>
        <Footer/>
      </Container>
    );
  }
}

export default Gigs;