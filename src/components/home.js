import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';

import Contact from './contact';
import ProjectContainer from './projects';
import About from './about';

import './home.css'


const MainTitle = () => <p className="main-title">Jennifer Dixon</p>;

const IntroBlurb = () => (
  <h5 className="intro-blurb">
    Full Stack Software Engineer
  </h5>
);

// const Modal = ({handleClose, show, children}) => {
//   const ShowOrHideClsName = show ? "modal display-block" : "modal display-none"
//
//   return (
//     <div className={ShowOrHideClsName} >
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>Close</button>
//       </section>
//     </div>
//   )
// };

class ModalToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
  }

  render() {

    const ModalContent = this.props.modalContent;

    return (
      <div>
        <Button onClick={this.toggleModal}
          variant="outline-secondary" className="modal-btn" >
          {this.props.modalBtnLabel}
        </Button>
        <Modal show={this.state.isModalOpen} onHide={this.toggleModal} >
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
            <li className="nav-item justify-content-center" id="proj">
              <ModalToggle
                modalContent={ProjectContainer}
                modalBtnLabel="Projects"
                modalTitle="Apps & Projects by Jennifer"
              />
            </li>
    	      <li className="nav-item" id="abt">
              <ModalToggle
                modalContent={About}
                modalBtnLabel="About"
                modalTitle="About Jennifer"
              />
            </li>
            <li className="nav-item" id="cont">
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

