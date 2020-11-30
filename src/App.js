import React, { Fragment } from 'react';
import MyNavbar from './components/mynavbar'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router' 
import Home from './components/home';
import About from './components/about'
import Contact from './components/contact';
import Gigs from './components/gigs';
import Music from './components/music';

const HeaderWithRouter = withRouter(MyNavbar);

function App() {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (    
     <Router basename="/">
       <Fragment>
          <HeaderWithRouter />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/music" component={ Music } />
          <Route path="/gigs" component={ Gigs } />
          <Route path="/contact" component={ Contact } />
        </Fragment>
     </Router>  
  );
}

export default App;
