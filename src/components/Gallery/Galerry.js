import React, { Component } from "react";
import s from "./Galerry.module.css";
import { v4 as genId } from "uuid";
import Modal from "../Modal/Modal"

class Gallery extends Component
{
    state = {
        queryValue: "",
        elem: null,
        showModal : false
    };
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    
    }
handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ queryValue: e.target.value })
    }

handleSubmit = (e) => {
    e.preventDefault();
    const { getQuery } = this.props;
    getQuery(this.state.queryValue)
    this.state.queryValue = "";
}
    
    getElem = (elem) => {
    this.toggleModal();
    this.setState({ elem });
    }
    
    render() {
        const { gallery} = this.props;
        const {toggleModal, handleChange, handleSubmit, getElem } = this;
        const {  queryValue,showModal,elem } = this.state;
        return (
            <>
                 <button type= "button" onClick={this.toggleModal}>Открыть модалку</button>
          {showModal && <Modal onClose = {this.toggleModal} source={elem.src.tiny}>
          </Modal>}
                <div> <header className={s.Searchbar}>
                    
     <form className={s.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={s.SearchForm_button}>
    <span className={s.SearchForm_button_label}>Search</span>
    </button>

    <input
    className={s.SearchForm_input}
      type="text"
    //   autocomplete="off"
    autofocus
    placeholder="Search images and photos"
        name="query"
        onChange={handleChange}
        value={queryValue}
    />
  </form>
            </header></div>
   
            
    <ul className={s.ImageGallery}>
                {gallery.map((el) => (
                    <li key key={genId()} className={s.ImageGalleryItem}>  
                    <div >
                    <a
                     href="#" onClick={() => {
                        getElem(el);
                      }}
                    >
                      <img src={el.src.tiny} alt={el.alt} className={s.ImageGalleryItem_image}/>
                    </a>
                  </div>
                        
                    </li>
   
))}
</ul>

        </>
    )
    }
}

export default Gallery