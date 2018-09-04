import React, { Component } from 'react';

import './page.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <button></button>
        <button></button>
        <button></button>
      </div>
    );
  }
}
class Video extends Component {
    render() {
      return (
        <div className="Video">
          <iframe></iframe>
        </div>
      );
    }
  }

  class Article extends Component {
    render() {
      return (
        <div className="Article">
          <article></article>
        </div>
      );
    }
  }

  class Contact extends Component {
    render() {
      return (
        <div className="Contact">
          <article></article>
        </div>
      );
    }
  }

  class Fotter extends Component {
    render() {
      return (
        <div className="Fotter">
          
        </div>
      );
    }
  }

export {Nav, Video, Article, Contact, Fotter};

