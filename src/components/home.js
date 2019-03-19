import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import Contact from './contact';
import About from './about.js';
import ProjectContainer from './projects.js';
import './home.css'


const MainTitle = () => <h1 className="main-title">Jennifer Dixon</h1>;

const IntroBlurb = () => (
  <h5 className="intro-blurb">
    Full Stack Software Engineer
  </h5>
);


class ModalToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  handleModalClose() {
    this.setState({ isModalOpen: false });
  }

  render() {

    const ModalContent = this.props.modalContent

    return (
      <div>
        <Button onClick={this.toggleModal}>{this.props.modalBtnLabel}</Button>
        <Modal show={this.state.isModalOpen} onHide={this.handleModalClose} >
          <Modal.Header closeButton >
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ModalContent />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}


class HomePage extends Component {
  render() {
    return (
      <div className="home-div">

        <MainTitle />
        <IntroBlurb />

        <nav id="nav-menu justify-content-center">
          <ul className="nav justify-content-center" id="nav-bar">
            <li className="nav-item" id="1">
              <ModalToggle
                modalContent={ProjectContainer}
                modalBtnLabel="Projects"
                modalTitle="Apps & Projects by Jennifer"
              />
            </li>
    	      <li className="nav-item" id="2">
              <ModalToggle
                modalContent={About}
                modalBtnLabel="About"
                modalTitle="About Jennifer"
              />
            </li>
            <li className="nav-item" id="3">
              <ModalToggle
                modalContent={Contact}
                modalBtnLabel="Contact"
                modalTitle="Contact Jennifer"
              />
            </li>
        	</ul>
        </nav>

      </div>
    )
  }
};


export default HomePage;

