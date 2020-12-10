import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../App.css';
import Footer from './footer';
import coverphoto from '../images/bandbild 3 2020 bw.jpg' 
import logo from '../images/rp logo.svg'
import habitats from '../images/habitats.png'

class Home extends React.Component { 
  render() {
    return( 
      <Container fluid className="justify-content-center">
        <Row className="vh-100">
          <Col className="cover">
            <img src={logo} className="rp-logo"/>
            <img src={coverphoto} id="coverphoto" className="coverphoto"/>
          </Col>
        </Row>
        <Row className="follow-us justify-content-center bg-light text-monospace text-center font-weight-bold p-5">
          <Col>
            <h3 className="">Follow us for more news and shredding!</h3>
            <a href="https://www.facebook.com/revengeprevails" target="_blank" rel="noopener noreferrer">
            <svg className="icon follow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.72 59.38"><defs></defs><title>facebook icon</title><g id="Lager_2" data-name="Lager 2"><g id="Lager_1-2" data-name="Lager 1"><g id="facebook_icon" data-name="facebook icon"><path class="cls-1" d="M0,32.27v-5a9.18,9.18,0,0,0,.23-1A29.87,29.87,0,1,1,34.71,59.31c-.71.11-1.24.22-1.24-.87.05-7.08,0-14.16,0-21.24,0-.82.26-1.08,1.06-1.06,1.72,0,3.45,0,5.18,0,.57,0,1,0,1.12-.78.26-2.24.53-4.47.85-6.7.11-.83-.25-.94-.95-.93-2.08,0-4.16,0-6.24,0-.46,0-1,.15-1-.66,0-1.9-.05-3.81.12-5.7s1.24-2.87,3.24-2.95c1.46-.06,2.92,0,4.38,0,.52,0,.87-.09.86-.71q0-3.12,0-6.24c0-.51-.29-.66-.76-.68a52.6,52.6,0,0,0-6.76-.22c-5.64.41-9.3,4.1-9.61,9.74-.12,2.07-.11,4.16-.05,6.24,0,1-.3,1.28-1.28,1.23-1.63-.08-3.27,0-4.91,0-.77,0-1.11.15-1.09,1,.06,2.13.05,4.25,0,6.37,0,.84.3,1.07,1.09,1,1.59,0,3.19.06,4.77,0,1.1-.06,1.42.29,1.41,1.4-.05,6.77-.06,13.54,0,20.31,0,1.33-.41,1.48-1.5,1.19C11.89,56,4.35,48.94,1,37.46.5,35.75.44,34,0,32.27Z"/></g></g></g></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCey8-JEeYoDxtuZ7y6PV80g" target="_blank" rel="noopener noreferrer">
              <svg className="icon follow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.5 59.54"><defs></defs><title>youtube icon</title><g id="Lager_2" data-name="Lager 2"><g id="Lager_1-2" data-name="Lager 1"><path class="cls-1" d="M28.61,0h2.32c.27,0,.53.09.8.12,1.34.18,2.7.26,4,.53A28.31,28.31,0,0,1,49.36,7.43c8.41,7.69,11.63,17.23,9.51,28.4A28.08,28.08,0,0,1,47.75,53.45a28.89,28.89,0,0,1-24.09,5.42A28.8,28.8,0,0,1,6.13,47.8,28.7,28.7,0,0,1,.35,34C.21,33,.11,32,0,31.05V28.49c0-.26.09-.53.12-.8.18-1.3.26-2.62.53-3.9A29.4,29.4,0,0,1,12.93,5.29,28.75,28.75,0,0,1,25.68.34C26.66.21,27.63.11,28.61,0ZM29.9,41.26v-.07c2.38,0,4.77,0,7.15,0,1.68,0,3.36-.08,5-.25,2.28-.24,2.75-.75,3.25-2.73a5,5,0,0,0,.15-.86c.12-2.92.33-5.84.32-8.75,0-2.36-.22-4.71-.46-7.06a2.7,2.7,0,0,0-2-2.66,7.53,7.53,0,0,0-1.48-.26c-2.7-.13-5.41-.29-8.11-.32-3.49,0-7,0-10.46.07-1.37,0-2.75.06-4.12.14-.84.05-1.68.19-2.52.32a2.23,2.23,0,0,0-1.94,1.76,16.63,16.63,0,0,0-.54,3c-.13,2.55-.23,5.11-.2,7.66,0,2.2.19,4.41.43,6.6s1.12,3,3.24,3.14,4,.27,6,.32S27.83,41.26,29.9,41.26Z"/><path class="cls-1" d="M35.55,29.78l-9.4,4.9v-9.8Z"/></g></g></svg>
            </a>
            <a href="https://www.instagram.com/revengeprevails/" target="_blank" rel="noopener noreferrer">
              <svg className="icon follow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.55 60.58"><defs></defs><title>instagram icon</title><g id="Lager_2" data-name="Lager 2"><g id="Lager_1-2" data-name="Lager 1"><g id="instagram_icon" data-name="instagram icon"><path class="cls-1" d="M30.28,0A30.29,30.29,0,1,1,0,30.28,30.29,30.29,0,0,1,30.28,0Zm-.05,48.56c1.78,0,3.56,0,5.34,0a23.28,23.28,0,0,0,4.86-.39,9.43,9.43,0,0,0,7.66-7.52,22.75,22.75,0,0,0,.43-5.14c0-3.5,0-7,0-10.49a23.85,23.85,0,0,0-.38-4.92,9.43,9.43,0,0,0-7.07-7.58A18.81,18.81,0,0,0,36.34,12c-4.07-.09-8.14-.08-12.21,0a20.52,20.52,0,0,0-4.14.39,9.41,9.41,0,0,0-7.44,6.88A17.65,17.65,0,0,0,12,24q-.13,6.23,0,12.44a19.45,19.45,0,0,0,.38,4,9.43,9.43,0,0,0,7.48,7.6,23.42,23.42,0,0,0,5.08.44C26.69,48.58,28.46,48.56,30.23,48.56Z"/><path class="cls-1" d="M15.21,30.27c0-2.56,0-5.11.11-7.66a10.29,10.29,0,0,1,.52-2.91,6.12,6.12,0,0,1,4.67-4.09,16.29,16.29,0,0,1,3.19-.33c2.69-.11,5.39-.06,8.08-.07,2,0,4.08,0,6.11.12a9.45,9.45,0,0,1,3.48.75,6.13,6.13,0,0,1,3.52,4.48,16.71,16.71,0,0,1,.33,3.3q.15,6.39,0,12.78a15.06,15.06,0,0,1-.4,3.6A6.22,6.22,0,0,1,39.65,45a16.43,16.43,0,0,1-2.89.26q-6.53.16-13,0a14.36,14.36,0,0,1-3.52-.41,6.16,6.16,0,0,1-4.65-5.1,31,31,0,0,1-.34-5.44C15.19,33,15.21,31.61,15.21,30.27Zm15-9.41a9.4,9.4,0,1,0,9.4,9.45A9.4,9.4,0,0,0,30.24,20.86ZM40,22.68a2.19,2.19,0,1,0-2.23-2.14A2.19,2.19,0,0,0,40,22.68Z"/><path class="cls-1" d="M24.11,30.25a6.13,6.13,0,1,1,6.11,6.13A6.14,6.14,0,0,1,24.11,30.25Z"/></g></g></g></svg>
            </a>
            <a href="https://revengeprevails.bandcamp.com/" target="_blank" rel="noopener noreferrer">
              <svg className="icon follow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.94 59"><defs></defs><title>bandcamp icon</title><g id="Lager_2" data-name="Lager 2"><g id="Lager_1-2" data-name="Lager 1"><path class="cls-1" d="M58.92,29a28.25,28.25,0,0,1-8.75,21.62,28.72,28.72,0,0,1-23.56,8.3A28.16,28.16,0,0,1,8.88,50.61,28.73,28.73,0,0,1,.12,26.79a28.34,28.34,0,0,1,9.41-19A29.08,29.08,0,0,1,32.21.1,27.69,27.69,0,0,1,43.53,3.51a28.86,28.86,0,0,1,10.53,9.62C57.3,18.08,59.15,23.47,58.92,29ZM10.07,33.89A7.46,7.46,0,0,1,10,32.57c-.09-.64.16-.83.81-.82,4.18,0,8.37,0,12.55,0a1.13,1.13,0,0,0,1.17-.64q3.07-5.47,6.19-10.93c.4-.7.39-.72-.4-.72H18.25c-2.08,0-2,0-3.08,1.82-2,3.48-3.85,7-6,10.42a.7.7,0,0,0-.1.44q0,2.69,0,5.37c0,.17-.06.4.19.43s.56.16.66-.13.26-.21.45-.09a2,2,0,0,0,1.91.2c1.17-.41,1.47-2.47.87-3.58S11.4,33.06,10.07,33.89Zm21.41-8.31v5.1c0,1.17,0,1.15,1.19,1.14.41,0,.57-.12.5-.53,0-.17-.09-.4.13-.47s.25.14.36.25a4,4,0,0,0,5.64-.24,6.07,6.07,0,0,0,.29-6.44,3.86,3.86,0,0,0-5.89-.66c-.09.09-.13.26-.3.2s-.11-.22-.11-.35V20.76c0-1.4,0-1.39-1.4-1.35-.36,0-.43.11-.42.47C31.49,21.78,31.48,23.68,31.48,25.58Zm14.34,6.5a3.72,3.72,0,0,0,3.85-2.51c.37-1,.37-1-.7-1-.58,0-.91.08-1.11.71A1.91,1.91,0,0,1,46,30.62a2.13,2.13,0,0,1-2.1-1,4.43,4.43,0,0,1-.1-4.24A2.19,2.19,0,0,1,46,24.08a1.85,1.85,0,0,1,1.9,1.11.83.83,0,0,0,1,.61,5,5,0,0,1,.67,0c.37,0,.52,0,.36-.5A3.49,3.49,0,0,0,47,22.78,4.5,4.5,0,0,0,42.59,24a5.19,5.19,0,0,0-1.13,3.69A4.16,4.16,0,0,0,45.82,32.08Zm-7.63,3.29c0,.47,0,.94,0,1.4s-.15.59-.53.59-.56-.18-.55-.57c0-.72,0-1.44,0-2.15a1.09,1.09,0,0,0-.79-1.12,2.9,2.9,0,0,0-2,0,1.17,1.17,0,0,0-.73.56c-.09.19-.24.44-.12.62s.46,0,.69.06.16-.12.22-.21a1.1,1.1,0,0,1,1.23-.46.62.62,0,0,1,.61.67c0,.4-.31.5-.63.55s-.88.11-1.32.2a1.21,1.21,0,0,0-1,1.34c0,.87.8,1.37,1.85,1.22.6-.08,1.2-.7,1.79,0,0,0,.13,0,.2,0,.49,0,1-.05,1.46-.06.32,0,.43-.15.43-.46,0-.69,0-1.38,0-2.08a1.5,1.5,0,0,1,.47-1.13.78.78,0,0,1,1-.21.82.82,0,0,1,.47.87c-.05.82,0,1.65,0,2.48,0,.37.14.52.52.49s.47-.22.46-.58c0-.73,0-1.47,0-2.21a1,1,0,0,1,.16-.7.9.9,0,0,1,1-.4c.54.16.66.65.69,1.11,0,.73,0,1.47,0,2.21,0,.25-.1.56.35.57s.46-.23.45-.56c0-1,0-1.92,0-2.88a1.13,1.13,0,0,0-1-1.17,1.59,1.59,0,0,0-1.55.41c-.15.16-.25.27-.48.06a1.49,1.49,0,0,0-2.15-.12c-.16.11-.32.32-.43,0s-.36-.2-.56-.17-.15.29-.16.45C38.18,34.43,38.19,34.9,38.19,35.37ZM19.74,34.06c0-.44-.16-.64-.57-.58s-.3.43-.3.68c0,.84,0,1.7,0,2.54,0,.4-.05.67-.51.67s-.52-.31-.51-.69c0-.71,0-1.43,0-2.14a.92.92,0,0,0-.25-.67,2.48,2.48,0,0,0-3.17.09c-.18.23-.47.57-.13.8a.58.58,0,0,0,.85-.23,1,1,0,0,1,1-.46c.43,0,.83.18.87.65s-.42.52-.76.59-.83.11-1.24.21a1.12,1.12,0,0,0-1,1.14c0,1,.73,1.6,1.85,1.39.57-.11,1.15-.6,1.72,0,0,0,.13,0,.2,0L19.43,38c.32,0,.41-.17.4-.47,0-.76,0-1.52,0-2.28a1.07,1.07,0,0,1,1.08-1.18c.6,0,.88.39.9,1.17s0,1.52,0,2.28c0,.36.15.47.48.47s.48-.09.47-.42a24.21,24.21,0,0,0-.07-3.07,1.25,1.25,0,0,0-.83-1A1.83,1.83,0,0,0,19.74,34.06Zm8.11.85c0-.89,0-1.78,0-2.68,0-.37-.14-.5-.52-.5s-.46.15-.44.48,0,.8,0,1.21,0,.6-.45.27a1.72,1.72,0,0,0-1.71-.23c-1,.38-1.46,1.33-1.3,2.71a2,2,0,0,0,3.12,1.55c.16-.09.27-.25.38.07s.46.2.69.17.21-.31.21-.5Zm18.56,2.55c1.12.67,1.6.77,2.24.49a2.55,2.55,0,0,0,1.15-3,1.92,1.92,0,0,0-3.08-1.17c-.13.09-.25.22-.35,0s-.45-.25-.68-.2-.18.37-.18.57c0,1.7,0,3.39,0,5.09,0,.37.09.51.48.52s.45-.17.44-.49C46.4,38.66,46.41,38.11,46.41,37.46ZM29.5,35.93c0-.81.1-1.46.83-1.75s1.12,0,1.49.61a.6.6,0,0,0,.8.1c.27-.16,0-.4-.06-.59a1.29,1.29,0,0,0-.68-.7,2.22,2.22,0,0,0-2.51.22,2.53,2.53,0,0,0-.67,2.81,2,2,0,0,0,1.87,1.46,1.92,1.92,0,0,0,2-1.22c.07-.17.33-.43,0-.55s-.57-.17-.77.16c-.07.11-.12.24-.19.35a1,1,0,0,1-1.83,0A1.4,1.4,0,0,1,29.5,35.93Z"/><path class="cls-1" d="M10,35.72a4.15,4.15,0,0,1,.15-.83,1.17,1.17,0,0,1,2.14-.22,2,2,0,0,1,.18,1.74,1.21,1.21,0,0,1-1.22.94A1.31,1.31,0,0,1,10,36.26,3,3,0,0,1,10,35.72Z"/><path class="cls-1" d="M38.48,27.34a3.79,3.79,0,0,1-.36,1.89,2.33,2.33,0,0,1-2.7,1.34,2.66,2.66,0,0,1-2.13-2.22,4.51,4.51,0,0,1,.21-2.62,2.52,2.52,0,0,1,2.36-1.67,2.6,2.6,0,0,1,2.32,1.66A3.5,3.5,0,0,1,38.48,27.34Z"/><path class="cls-1" d="M36.18,36.24a.83.83,0,0,1-.57,1,1.19,1.19,0,0,1-1.27-.11.62.62,0,0,1,.18-1A4.48,4.48,0,0,1,36,35.79C36.36,35.74,36.12,36.12,36.18,36.24Z"/><path class="cls-1" d="M15.87,37.34c-.47,0-.87-.07-.95-.53s.25-.72.69-.81c.17,0,.37-.13.52-.07s.68-.53.84.08a1.06,1.06,0,0,1-.77,1.29A1.68,1.68,0,0,1,15.87,37.34Z"/><path class="cls-1" d="M26.93,35.7a1.83,1.83,0,0,1-.29,1,1.08,1.08,0,0,1-1.05.58,1.13,1.13,0,0,1-1.05-.71A2.26,2.26,0,0,1,24.49,35a1.22,1.22,0,0,1,1.35-.94A1.55,1.55,0,0,1,26.93,35.7Z"/><path class="cls-1" d="M46.42,35.6a1.56,1.56,0,0,1,.13-.75,1.14,1.14,0,0,1,1.05-.77,1.18,1.18,0,0,1,1.17.72,2.05,2.05,0,0,1,.17,1.36,1.28,1.28,0,0,1-1.35,1.2A1.41,1.41,0,0,1,46.42,36C46.41,35.87,46.42,35.78,46.42,35.6Z"/></g></g></svg>
            </a>
          </Col>
        </Row>
        <Row className="bg-spots-dark bg-fixed py-5 justify-content-center">
          <Col className="col-md-8 col-12 lots-of-top-margin">
            <h1 className="text-light text-center mt-5 ">NEWS</h1>
            <Row className="justify-content-center my-5 p-md-5 p-sm-0 text-light">
              <Col className="col-md-6 col-12">
                <iframe title="Revenge Prevails Cabin Fever Session MMXX" width="100%" height="300em" src="https://www.youtube.com/embed/RdAVcYF1DsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col className="col-md-6 col-12 p-3">
                <h2 className="text-left">CABIN FEVER SESSION MMXX</h2>
                <p className="text-justify text-monospace">“Cabin fever refers to the distressing claustro&shy;phobic irrita&shy;bility or restless&shy;ness experi&shy;enced when a person or group, is stuck at an isolated location or in confined quarters for an extended period of time.” </p>
              </Col>
            </Row>
            <Row className="justify-content-center my-5 p-md-5 p-1 text-light">
              <Col className="col-md-6 col-12">
                <img alt="Habitats album cover" src={habitats} className="habitats"/>               
              </Col>
              <Col className="col-md-6 col-12 p-3">
                <h2 className="text-left">HABITATS FULL ALBUM 2020</h2>
                <p className="text-justify text-monospace">“Cabin fever refers to the distressing claustro&shy;phobic irrita&shy;bility or restless&shy;ness experi&shy;enced when a person or group, is stuck at an isolated location or in confined quarters for an extended period of time.” </p>
              </Col>
            </Row>            
          </Col>
        </Row>
        <Footer/> 
      </Container>
    );
  }
}

export default Home;