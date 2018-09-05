import React, { Component } from 'react';

import './page.css';
// import '../../public/css/animation.css';
// import Contact from './componets/contact';
import Fotter from './componets/fotter';
import {Main, Ome} from './componets/main'

// import {mainCont,guitar, piano, vocals} from './db';

class Page extends Component {
    constructor(){
    super();
    this.state={
        def: Ome.mainc,
        home: Ome.mainc,
        gug: Ome.guitars,
        voc: Ome.vocalss,
        pian: Ome.pianos,
        con: Ome.contact,
    };
}
  
    render() {
    return (
      <div className="Container">
        <div className="nava">
         <button onClick={this.gohome.bind(this)}><i class="icon-home"></i>HOME</button>
         <button onClick={this.gogug.bind(this)}>Guitar</button>
         <button onClick={this.govoc.bind(this)}>Vocals</button>
         <button onClick={this.govpian.bind(this)}>Piano</button>
         <button onClick={this.gocon.bind(this)}><i class="icon-mail"></i>Contact</button>
        </div>
        <Main val = {this.state.def} />
        <Main val ={this.state.con} />
        <Fotter />
      </div>
    );
  }
  gohome(){
     this.setState(
         {def: this.state.home}
     )
  }
  gogug(){
    this.setState(
        {def: this.state.gug}
    )
 }
 govoc(){
    this.setState(
        {def: this.state.voc}
    )
 }
 govpian(){
    this.setState(
        {def: this.state.pian}
    )
 }
 gocon(){
    this.setState(
        {def: this.state.cont}
    )
 }
}




 

export default Page;
