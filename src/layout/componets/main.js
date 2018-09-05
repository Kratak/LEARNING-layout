import React, { Component } from 'react';

import '../page.css';

import '../db';
import { mainCont, guitar } from '../db';


  class Main extends Component {
    render() {
      return (
        <div className="mainart">
          <article>{mainCont[1]}</article>
          <article>{mainCont[2]}</article>
          <article>{mainCont[3]}</article>
          <article>{mainCont[4]}</article>
          <article>{mainCont[5]}</article>
        </div>
      );
    }
  }

export default Main;

