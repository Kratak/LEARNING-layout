import React, { Component } from 'react';

import '../page.css';

import '../db';


  class Nav extends Component {
    render() {
      return (
        <div className="nava">
         <button>HOME</button>
         <button>Guitar</button>
         <button>Vocals</button>
         <button>Piano</button>
         <button>Contact</button>
        </div>
      );
    }
  }

export default Nav;

