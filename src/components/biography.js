import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

class Biography extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        year: '22',
        text: 'An imposing challenge was now to be undertaken. The way forward from HABITATS was to write songs with as few boundaries as possible. A heap of songs were crafted, with three of them having a unique sense belonging together. Three songs that were meant to a trinity, with no other distractions. The band decided to give these three songs a format of their own and place them on an outlandish EP. Five live performances also took place during this year, along with the completion and recording of the EP. '       
    };
  }

  handleClick(year) {
    this.setState({year: year})
    var buttons = document.getElementsByClassName('biography-btn');

    for (let index = 0; index < buttons.length; index++) {
      buttons[index].className = 'biography-btn'
    }

    document.getElementById(year).className = 'biography-btn active-year';
    var text = ""

    switch (year) {
      case '22':
      text = 'An imposing challenge was now to be undertaken. The way forward from HABITATS was to write songs with as few boundaries as possible. A heap of songs were crafted, with three of them having a unique sense of belonging together. Three songs that were meant to a trinity, with no other distractions. The band decided to give these three songs a format of their own and place them on an outlandish EP. Five live performances also took place during this year, along with the completion and recording of the EP. '       
      break;
      case '21':
        text = 'Now basking in the glory of their magnum opus. HABITATS needed to be displayed to the world. They took to the stage on both new and familiar ground. Perhaps the most memorable show was one that took place inside of a WWI-bunker. However, HABITATS now stood looming, casting a great shadow. The difficulty of ever creating songs that would surpass this crowning achievement. '       
        break;
      case '20':
        text = 'The third full-length was completed in February and released later that year. Its name: HABITATS. This was their most mysterious and haunting release yet. You can feel and taste the deep, dark, woods where the album was composed. The album is their most extreme to date. Like the sea itself, calm and beautiful, but also brutal and without mercy. Listen at your own peril… Later the same year. Revenge Prevails decides to materialize a so called “live session” at their mysterious cabin. Having employed Erik Isidorsson, AKA Isiart, six out of the eight songs from HABITATS were captured, both on moving images as well as sound-wise.  It was named: “Cabin Fever Session” '       
        break;
      case '19':
       text = 'The band took their live show abroad for the first time. Including “Dark Mental Festival” in Denmark as well as Nukstock open air in Germany. During the time within the walls of the mysterious cabin, the band members finished composing their third full-length album. The recording began in November 2019 at Armageddon-Recordings, the studio owned and managed by the mighty Anders “Bloodlord” Backelin. '
       break;
       case '18':
        text = 'Revenge Prevails rampage like a fierce bull through the landscape of live performance as well as writing new material. At the end of the year, the band had to relocate from their precious Laboratory v.2 to a mysterious cabin within the deep, dark woods on the outskirts of their hometown Uddevalla. Its location is still unknown to everyone, but those closest to the band members… '
        break;
        case '17':
        text = 'The second full-length album of Revenge Prevails was released! The Revengers choose to call it "False Hope Cruelty" A fitting name after so many endeavours surrounding the album. The album was a monument, a monolith so formidable and vicious it shook the bedrock itself! Listen to it at your own risk! '
        break;
        case '16':
        text = 'The Laboratory v.2 stood complete and within those mystic walls the work for their next massive full-length album was created and recorded during many months and tiresome tribulations. '
        break;
        case '15':
        text = 'The four members began constructing a new rehearsal chamber combined with a studio. The Laboratory v.2 - a place to practice their dark art and to record forthcoming devilish musick. It stood complete in 2016 and within these mystic walls, the work for their next massive full-length album was ongoing. '
        break;
        case '14':
        text = 'It was time to provoke the world, so the four members entered their laboratory of death and recorded their first full-length album titled "Dark Trembling Solace" containing over an hour of menacing eerie hellish messages. The Album was released for mortal ears in 2015. '
        break;
        case '13':
        text = 'The demo was released, but something was still missing, the three members had visions of a fourth member somewhere in the world that needed to shred with them, and so they invoked Ludvig "Hlodyr" Björk one full moon night. He joined and with him and his earthquake summoning device, the band was complete. '
        break;
        case '12':
        text = 'The three members did their first live shows and also recorded their first demo titled "Black Void Injection" It was released in March 2013. '
        break;
        case '11':
        text = 'Josef summoned old acquaintance Chris "Bilge-Blasting Impender" Helleren from the crypts, to see if he was up to the task of blasting for Revenge Prevails. Chris accepted in March 2011 and the band was respawned to spread apocalyptic chanting across the mortal world. Later the same year Isabella Ramare joined the Revenge Prevails sect to demolish eardrums with her four stringed jackhammer. '
        break;
        case '10':
          text = 'Whilst searching high and low for new, suitable band members. Josef drew the drafts of an abundance of songs, which can be heard on several later releases. '
          break;
        case '09':
        text = 'Revenge Prevails performed their first live show with past members who decided to quit in 2010. '
        break;
        case '08':
        text = 'Josef "The Sultan" Svensson had an urge to create haunting, devastating soundtracks, thus he forged Revenge Prevails. '
        break;                                                                                  
      default:
          break;
    }
      
    this.setState({text: text});
  }

  render() {
    return( 
      <Row className="bg-spots-light justify-content-center text-center py-md-5 py-0 biography">
        <Col className="col-md-10 col-12 py-5">
          <h1>BIO&shy;GRAPHY</h1>
          <Row className="py-md-5 py-0 my-md-5 my-0 justify-content-center">
            <Col className="col-lg-2 col-md-4 col-12 hide-xs">
              <h2 className="biography-year">20<br/>{this.state.year}</h2>
            </Col>
            <Col className="col-lg-5 col-md-7 col-12 text-justify text-monospace ml-lg-2 p-lg-4 p-3 my-auto min-h">
              <p className="pink-bg-fluff">
                {this.state.text}
              </p>
            </Col>
          </Row>
          <Row className="py-md-5 py-0">
            <Col>
              <button className="biography-btn active-year" id="22" onClick={(e) => this.handleClick('22')}><h3>2022</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="21" onClick={(e) => this.handleClick('21')}><h3>2021</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="20" onClick={(e) => this.handleClick('20')}><h3>2020</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="19" onClick={(e) => this.handleClick('19')}><h3>2019</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="18" onClick={(e) => this.handleClick('18')}><h3>2018</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="17" onClick={(e) => this.handleClick('17')}><h3>2017</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="16" onClick={(e) => this.handleClick('16')}><h3>2016</h3></button>
            </Col>
            <Col>
            <button className="biography-btn" id="15" onClick={(e) => this.handleClick('15')}><h3>2015</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="14" onClick={(e) => this.handleClick('14')}><h3>2014</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="13" onClick={(e) => this.handleClick('13')}><h3>2013</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="12" onClick={(e) => this.handleClick('12')}><h3>2012</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="11" onClick={(e) => this.handleClick('11')}><h3>2011</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="10" onClick={(e) => this.handleClick('10')}><h3>2010</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="09" onClick={(e) => this.handleClick('09')}><h3>2009</h3></button>
            </Col>
            <Col>
              <button className="biography-btn" id="08" onClick={(e) => this.handleClick('08')}><h3>2008</h3></button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Biography;