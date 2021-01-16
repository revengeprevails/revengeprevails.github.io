import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import josef from '../images/Josef small.jpg';
import chris from '../images/Christoffer small.jpg';
import bella from '../images/Isabella small.jpg';
import ludde from '../images/Ludvig small.jpg'
import hand from '../images/hand.svg'
import Member from './member'; 

class Members extends React.Component { 
  render() {
    return( 
      <div className="justify-content-center bg-spots-dark bg-fixed members px-lg-5 px-1 py-5">
        <Row className="mx-5 justify-content-between py-5">
          <Col className="col-12 text-center">         
            <h1 className="text-light members-text">MEMBERS</h1>            
          </Col>
          <Col className="col-xl-3 col-lg-4 col-6">
            <img className="hand-l" src={hand}/>
          </Col>
          <Col className="col-xl-3 col-lg-4 col-6">
            <img className="hand-r" src={hand}/>
          </Col>
        </Row>
        <Row className="text-left py-4 mx-5">
          <Member 
            name="Josef Svensson as The Sultan" 
            role="Lead vocals and Guitar. Writes most of the lyrics. Founded Revenge Prevails in 2008"
            imgSrc="https://github.com/revengeprevails/revengeprevails.github.io/blob/master/src/images/Josef%20small.jpg?raw=true"
            imgAlt="A portrait of Josef"
          />
          <Member 
            name="Christoffer Helleren as The Bilge-blasting impender"
            role="Drums and precussion. Joined March 2011"
            imgSrc="https://github.com/revengeprevails/revengeprevails.github.io/blob/master/src/images/Christoffer%20small.jpg?raw=true"
            imgAlt="A portrait of Christoffer"
          />            
          <Member 
            name="Isabella Ramare as Herself"
            role="Bass and backing vocals. Also does album covers, artwork and videos. Joined November 2011 "
            imgSrc="https://github.com/revengeprevails/revengeprevails.github.io/blob/master/src/images/Isabella%20small.jpg?raw=true"
            imgAlt="A portrait of Isabella"
          />
          <Member 
            name="Ludvig Björk as Hlodyr"
            role="Guitars and backing vocals. Joined 2013"
            imgSrc="https://github.com/revengeprevails/revengeprevails.github.io/blob/master/src/images/Ludvig%20small.jpg?raw=true"
            imgAlt="A portrait of Ludvig"
          />
        </Row>
      </div>
    );
  }
}

export default Members;