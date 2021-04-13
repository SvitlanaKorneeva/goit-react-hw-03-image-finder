import React, { Component } from "react";

import "./App.css";

import { v4 as genId } from "uuid";

// import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
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
          this.setState((prev) => ({ gallery: [...prev.gallery, ...result] } ));
        })
        .catch((err) => { });
      this.fetchGallery();
    }
  }
  

  getQuery = (query) => {
    this.setState({query})
    
  }
  fetchGallery = () => {
  const { query, page } = this.state;
    getFetch(query, page)
        .then((result) => {
          console.log(result);
          this.setState((prevState) => ({ page: prevState.page + 1, }));
        })
    
  }


  render() {
    const { gallery, showModal } = this.state
    const { getQuery } = this;
  
      return (
        <div>
         
          <h1 className="title">Search images</h1>
          <Searchbar getQuery={getQuery}/>
          <Gallery gallery={gallery} getQuery={getQuery}/>
          <Button aria-label="Загрузить еще" onClick = {this.fetchGallery}>Load more</Button>
          
        </div>
    );
  }
}

  
export default App;
