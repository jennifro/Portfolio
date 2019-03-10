import React, { Component } from 'react';

import Contact from './contact';
import './home.css'


const MainTitle = () => <h1 className="main-title">Jennifer Dixon</h1>;

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

    return (
      <div>
        <button onClick={this.toggleModal}>{this.props.modalBtnLabel}</button>
        <div>
          {this.props.modal}
        </div>
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
              <a className="nav-link" href="/projects">Projects</a>
            </li>
    	      <li className="nav-item" id="2">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item" id="3" >
              <ModalToggle modal={Contact} modalBtnLabel="Contact" />
            </li>
        	</ul>
        </nav>



      </div>
    )
  }
};


export default HomePage;

