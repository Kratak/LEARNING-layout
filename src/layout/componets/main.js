import React, { Component } from 'react';
import '../page.css';
import {default_home,guitar, piano, vocals, contact, pricelists} from '../db';

const MainContent={
    def:{},
    default_home: 
    <div>
        <article>{default_home[1]}</article>
        <article>{default_home[2]}</article>
        <article>{default_home[3]}</article>
        <article>{default_home[4]}</article>
        <article>{default_home[5]}</article>
    </div>,
    guitar:
    <div>
      <article className="article-corect">{guitar[0]}</article>
      <article>{guitar[1]}</article>
      <article>{guitar[2]}</article>
    </div>,
    piano:
    <div>
      <article className="article-corect">{piano[0]}</article>
      <article>{piano[1]}</article>
      <article>{piano[2]}</article>
    </div>,
    vocals:
    <div>
      <article className="article-corect">{vocals[0]}</article>
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
    <div className="table-pricelists">{pricelists[2]}</div>
    <div className="table-pricelists">{pricelists[3]}</div>
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

  export {Main,MainContent};