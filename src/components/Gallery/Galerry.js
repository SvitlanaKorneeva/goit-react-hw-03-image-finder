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
  
    getElem = (elem) => {
    this.toggleModal();
    this.setState({ elem });
    }
    
    render() {
        const { gallery} = this.props;
        const {handleChange, handleSubmit, getElem } = this;
        const {  queryValue,showModal,elem } = this.state;
        return (
            <>
        
          {showModal && <Modal onClose = {this.toggleModal} source={elem.src.tiny}>
          </Modal>}
                    
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