import React, { Component } from 'react';

import './page.css';

import Fotter from './componets/fotter';
import {Main, Ome} from './componets/main';

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
        plist: Ome.pricelist,
    };
}
  
    render() {
    return (
      <div className="Container">
        <div className="nava">
         <button onClick={this.gohome.bind(this)}><i class="icon-home"></i>Home</button>
         <button onClick={this.gogug.bind(this)}>Guitar</button>
         <button onClick={this.govoc.bind(this)}>Vocals</button>
         <button onClick={this.govpian.bind(this)}>Piano</button>
         <button onClick={this.goplist.bind(this)}>Price List</button>
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
     document.title = 'Gintare Kairyte';
  }
  gogug(){
    this.setState(
        {def: this.state.gug}
    )
    document.title = 'Guitar lesson - Gintare Kairyte';
 }
 govoc(){
    this.setState(
        {def: this.state.voc}
    )
    document.title = 'Vocal lesson - Gintare Kairyte';
 }
 govpian(){
    this.setState(
        {def: this.state.pian}
    )
    document.title = 'Piano lesson - Gintare Kairyte';
 }
 gocon(){
    this.setState(
        {def: this.state.cont}
    )
    document.title = 'Contact - Gintare Kairyte';
 }
 goplist(){
    this.setState(
        {def: this.state.plist}
    )
    document.title = 'Price List - Gintare Kairyte';
 }
}




 

export default Page;
