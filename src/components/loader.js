import React from 'react'
import { Spinner } from 'react-bootstrap';
import '../App.css';

const Loader = () => (
  <div id='loader' className="">
   <Spinner animation="border" variant="red">
      <span className="sr-only">Loading...</span>
   </Spinner>
  </div>
)

export default Loader