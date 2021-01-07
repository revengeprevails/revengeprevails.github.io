import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

class Gig extends React.Component { 
  render() {
    const { gigs } = this.props;
    return( 
      <Row className="justify-content-center text-center">
        <Col className="col-lg-8 col-md-10 col-12 my-md-5 my-3">
          <h2 className="my-3">{this.props.title}</h2>
          <table className="">
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>City</th>
              <th>Event</th>
              <th>Organizer</th>
            </tr>
            {
              gigs.map(item => {
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.location}</td>
                    <td>{item.city}</td>
                    <td>{item.event}</td>
                    <td>{item.organizer}</td>
                  </tr>
                )
              })
            }
          </table>
        </Col>
      </Row>
    );
  }
}

export default Gig;