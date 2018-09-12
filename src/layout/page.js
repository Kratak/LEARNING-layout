import React, { Component } from 'react';

import './page.css';

import Fotter from './componets/fotter';
import {Main, MainContent} from './componets/main';

class Page extends Component {
    constructor(){
    super();
    this.state={
        default_home: MainContent.default_home,
        home: MainContent.default_home,
        guitar: MainContent.guitar,
        vocals: MainContent.vocals,
        piano: MainContent.piano,
        contact: MainContent.contact,
        pricelist: MainContent.pricelist,
    };
}
  
    render() {
    return (
      <div className="Container">
        <image className="top-picture"></image>
        <div className="nava">
        <div className="music-key" ></div>
         <button onClick={this.gohome.bind(this)}><i class="icon-home"></i>Home</button>
         <button onClick={this.goGuitar.bind(this)}>Guitar</button>
         <button onClick={this.goVocal.bind(this)}>Vocals</button>
         <button onClick={this.goPiano.bind(this)}>Piano</button>
         <button onClick={this.goPriceList.bind(this)}>Price List</button>
         <button onClick={this.goContact.bind(this)}><i class="icon-mail"></i>Contact</button>
        </div>
        <Main val = {this.state.default_home} />
        <Main val ={this.state.contact} />
        <Fotter />
      </div>
    );
  }
  gohome(){
     this.setState(
         {default_home: this.state.home}
     )
     document.title = 'Gintare Kairyte';
  }
  goGuitar(){
    this.setState(
        {default_home: this.state.guitar}
    )
    document.title = 'Guitar lesson - Gintare Kairyte';
 }
 goVocal(){
    this.setState(
        {default_home: this.state.vocals}
    )
    document.title = 'Vocal lesson - Gintare Kairyte';
 }
 goPiano(){
    this.setState(
        {default_home: this.state.piano}
    )
    document.title = 'Piano lesson - Gintare Kairyte';
 }
 goContact(){
    this.setState(
        {default_home: this.state.contacts}
    )
    document.title = 'Contact - Gintare Kairyte';
 }
 goPriceList(){
    this.setState(
        {default_home: this.state.pricelist}
    )
    document.title = 'Price List - Gintare Kairyte';
 }
}




 

export default Page;
