import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router' 
import MyNavbar from './components/mynavbar'
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Gigs from './pages/Gigs';
import Contact from './pages/Contact';

import Page from './pages/Page';
import NotFound from './pages/NotFound';
import Footer from './components/footer';

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
    <div className="content">
      <Router basename="/">
        <Fragment>
          <HeaderWithRouter />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/music" component={ Music } />
          <Route exact path="/gigs" component={ Gigs } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path='/page/:uid' component={Page} />
          {/* <Route component={NotFound} /> */}
        </Fragment>
      </Router>  
      <Footer />
    </div>    
  );
}

export default App;
