import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import josef from '../images/Josef small.jpg';
import chris from '../images/Christoffer small.jpg';
import bella from '../images/Isabella small.jpg';
import ludde from '../images/Ludvig small.jpg'
import hand from '../images/hand.svg'

class Members extends React.Component { 
  render() {
    return( 
      <Row className="justify-content-center bg-spots-dark bg-fixed members py-5">
        <Col className="col-md-10 col-12 text-center">
          <Row className="justify-content-center">
            <Col className="col-md-3 col-6 order-md-1 order-2">
              <img className="hand-l" src={hand}/>
            </Col>
            <Col className="my-auto col-md-6 col-12 order-md-2 order-1">
              <h1 className="text-light text-center ml-md-0 ml-3">MEMBERS</h1>
            </Col>
            <Col className="col-md-3 col-6 order-3">
              <img className="hand-r" src={hand}/>
            </Col>
          </Row>
          <Row className="text-left py-4">
           <Col className="col-md-6 col-12 p-md-5 p-0">
            <img alt="A portrait of Josef" src={josef}/>
            <div className="p-3">
              <h4>
                Josef Svensson as The Sultan 
              </h4>
              <p className="text-light">
                Lead vocals and Guitar. Writes most of the lyrics.
                Founded Revenge Prevails in 2008
              </p>
            </div>
           </Col>
           <Col className="col-md-6 col-12 p-md-5 p-0">
            <img alt="A portrait of Christoffer" src={chris}/>
            <div className="p-3">
              <h4>
                Christoffer Helleren as Bilge-blasting Impender
              </h4>
              <p className="text-light">
                Drums and percussion. Joined March 2011
              </p>
            </div>
           </Col>
         </Row>
         <Row className="text-left">
           <Col className="col-md-6 col-12 p-md-5 p-0">
            <img alt="A portrait of Isabella" src={bella}/>
            <div className="p-3">
              <h4>
                Isabella Ramare as Herself
              </h4>
              <p className="text-light">
                Bass and backing vocals. Also does album covers, artwork and videos. 
                Joined November 2011 
              </p>
            </div>
           </Col>
           <Col className="col-md-6 col-12 p-md-5 p-0">
            <img alt="A portrait of Ludvig" src={ludde}/>
            <div className="p-3">
              <h4>
                Ludvig Björk as Hlodyr
              </h4>
              <p className="text-light">
              Guitars and backing vocals. Joined 2013
              </p>
            </div>
           </Col>
         </Row>
        </Col>
      </Row>
    );
  }
}

export default Members;