import React, { Component } from 'react';

import './page.css';
import Contact from './componets/contact';
import Fotter from './componets/fotter';
import Main from './componets/main';
import Nav from './componets/navitagation';

class Page extends Component {
  render() {
    return (
      <div className="Container">
        <Nav></Nav>
        <Main></Main>
        <Contact></Contact>
        <Fotter></Fotter>
      </div>
    );
  }
}

export default Page;
