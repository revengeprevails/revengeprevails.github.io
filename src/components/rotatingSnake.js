import React from 'react';
import '../App.css';
import redsnake from '../images/whole snake red.svg'
import graysnake from '../images/whole snake gray.svg'

class RotatingSnakes extends React.Component { 

  componentDidMount(){
      window.onscroll = function () {
        let snakeLeft = document.getElementById("snakeLeft");
        let snakeRight = document.getElementById("snakeRight");
        snakeLeft.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
        snakeRight.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
    };
  }

  render() {
    return( 
      <div>
        <img id="snakeLeft" className="rotating-snake snake-left m-5 " src={redsnake}/> 
        <img id="snakeRight" className="rotating-snake snake-right m-5 " src={graysnake}/> 
      </div>
    );
  }
}

export default RotatingSnakes;