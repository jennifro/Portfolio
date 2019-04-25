import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';

import Contact from './contact';
import ProjectContainer from './projects';
import About from './about';

import './home.css'


const MainTitle = () => <p className="main-title">Jennifer Dixon</p>;

const IntroBlurb = () => (
  <h5 className="intro-blurb">
    I'm a full-stack software engineer from a non-traditional background.
  </h5>
);

const NavBar = () => (
  <nav id="nav-menu justify-content-center">
    <ul className="nav justify-content-center" id="nav-bar">
      <li className="nav-item justify-content-center" id="proj">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-item" id="abt">
        <a href="#about">About</a>
      </li>
      <li className="nav-item" id="cont">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
)

class HomePage extends Component {
  render() {
    return (
      <div className="home-div">

        <MainTitle />
        <IntroBlurb />
        <NavBar />
        <ProjectContainer />
        <About />
        <Contact />


      </div>
    )
  }
};


export default HomePage;


// class ModalToggle extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       isModalOpen: false
//     }
//
//     this.toggleModal = this.toggleModal.bind(this);
//   }
//
//   toggleModal() {
//     this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }))
//   }
//
//   render() {
//
//     const ModalContent = this.props.modalContent;
//
//     return (
//       <div>
//         <Button onClick={this.toggleModal}
//           variant="outline-secondary" className="modal-btn" >
//           {this.props.modalBtnLabel}
//         </Button>
//         <Modal show={this.state.isModalOpen} onHide={this.toggleModal} >
//           <Modal.Header closeButton >
//             <Modal.Title>{this.props.modalTitle}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <ModalContent />
//           </Modal.Body>
//         </Modal>
//       </div>
//     )
//   }
// }

