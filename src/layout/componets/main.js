import React, { Component } from 'react';
import '../page.css';
import {mainCont,guitar, piano, vocals, contact, pricelists} from '../db';

const Ome={
    def:{},
    mainc: 
    <div>
        <article>{mainCont[1]}</article>
        <article>{mainCont[2]}</article>
        <article>{mainCont[3]}</article>
        <article>{mainCont[4]}</article>
        <article>{mainCont[5]}</article>
    </div>,
    guitars:
    <div>
      <article>{guitar[1]}</article>
      <article>{guitar[2]}</article>
    </div>,
    pianos:
    <div>
      <article>{piano[1]}</article>
      <article>{piano[2]}</article>
    </div>,
    vocalss:
    <div>
      <article>{vocals[1]}</article>
      <article>{vocals[2]}</article>
    </div>,
    contact:
    <div className="con2">
    <article className="con">{contact[1]}</article>
    <article className="con">{contact[2]}</article>
    <article className="con">{contact[3]}</article>
    {/* <article className="con">{contact[4]}</article>
    <article className="con">{contact[5]}</article> */}
    </div>,
    pricelist:
    <div>
    <article>{pricelists[1]}</article>
    <article>{pricelists[2]}</article>
    <article>{pricelists[3]}</article>
    </div>,
    
}
const Main =(props) => {
    //   props = this.state.mainc;
        return (
        <div className="mainart">
          {props.val}
        </div>
      );
    
  }

  export {Main,Ome};