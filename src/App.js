import React, { Component } from "react";

import "./App.css";

import { v4 as genId } from "uuid";

// import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import Gallery from "./components/Gallery/Galerry";
import getGalleryItems from "./services/pexelsApi";
const { getFetch } = getGalleryItems;


class App extends Component {
  state = {
    query: "moon",
    page: 1,
    gallery: [],
    // showModal : false
  }
  

   componentDidMount() {
    const { query, page } = this.state;
    getFetch(query, page)
      .then((result) => {
        console.log(result);
        this.setState({ gallery: [...result] });
      })
      .catch((err) => {});
  }

   componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query) {
      getFetch(query, page)
        .then((result) => {
          console.log(result);
          this.setState((prev) => ({ gallery: [...prev.gallery, ...result] }));
        })
        .catch((err) => {});
    }
  }
  
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));

  getQuery = (query) => {
    this.setState({query})
    
  }
  render() {
    const { gallery, showModal } = this.state
    const { getQuery } = this;
  
      return (
        <div>
          {/* <button type= "button" onClick={this.toggleModal}>Открыть модалку</button>
          {showModal && <Modal onClose = {this.toggleModal}>
          <h1>привет это контент модалки</h1>
          </Modal>} */}
          <Button aria-label="Загрузить еще">Load more</Button>
          <h1 className="title">Phonebook</h1>
          <Gallery gallery={gallery} getQuery={getQuery }/>
          
        </div>
    );
  }
}

  
export default App;
