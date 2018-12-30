// contact.js

import React, { Component } from 'react';

export default class Contact extends Component {

  render() {
    return (
      <div className="contact-page">
        <ul className="nav justify-content-center" id="contact">
          <li className="nav-item">
            <a className="nav-link" href="/mailto:jen.dxon@gmail.com">email</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/https://github.com/jennifro">github.com/jennifro</a>
          </li>
        </ul>
      </div>
    )
  }
}
