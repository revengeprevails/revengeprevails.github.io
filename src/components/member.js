import React from 'react'
import { Col } from 'react-bootstrap';

class Member extends React.Component { 
  render() {
    return(
      <Col className="col-xl-6 col-md-12 col-12 p-md-5 p-0">
        <img alt="A portrait of Josef" src={this.props.imgSrc}/>
        <div className="p-3">
          <h4>
            {this.props.name}
          </h4>
          <p className="text-light">
            {this.props.role}
          </p>
        </div>
      </Col>
    )
  }
}

export default Member