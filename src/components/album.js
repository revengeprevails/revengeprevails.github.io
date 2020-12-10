import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

class Album extends React.Component { 
  render() {
    const { releases } = this.props;
    return( 
      <div>
        {
          releases.map(item => {
            return (
              <Row className="lots-of-top-margin">
                <Col>
                  <h2>{item.title} ({item.releaseDate})</h2>
                  <p>{item.info}</p>
                </Col>
                <Col>
                  {item.tracks.map(track => {
                   return(<p>{track}</p>)
                  })}
                </Col>
                <Col>
                  
                </Col>
              </Row>
            )
          })
        }
      </div>
    );
  }
}

export default Album;