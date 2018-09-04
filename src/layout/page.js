import React, { Component } from 'react';

import './page.css';
import {Nav, Video, Article, Contact, Fotter} from './CMP'

class Page extends Component {
  render() {
    return (
      <div className="Container">
        <Contact />
      </div>
    );
  }
}

export default Page;
