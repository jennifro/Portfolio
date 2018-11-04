// contact.js

import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: !this.state.isModalOpen
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return (
      <div className="contact-page">

        <a className="nav-link" onClick={this.toggleModal}>Contact</a>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


/* <div className="contact-page">
  <ul className="nav justify-content-center" id="contact">
    <li className="nav-item"><a className="nav-link" href="/mailto:jen.dxon@gmail.com">email</a></li>
    <li className="nav-item"><a className="nav-link" href="/https://github.com/jennifro">github.com/jennifro</a></li>
  </ul>
</div> */