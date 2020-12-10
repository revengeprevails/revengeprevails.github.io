import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

class Music extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        imgsrc: props.imgsrc,
        title: props.title,
        info: props.info,
        type: props.type,
        tracklist: props.tracklist
    };
  }

  render() {
    return( 
      <Row className="vh-100 p-5 bg-spots-light">
        <Col className="my-auto">
          <p>{this.state.title}</p>
        </Col>
        <Col className="my-auto">
          <p>{this.state.description}</p>
        </Col>
        <Col className="my-auto">
          <img className="w-100 d-block" src={this.state.imgsrc}/>
        </Col>
      </Row>    
    );
  }
}

export default Music;