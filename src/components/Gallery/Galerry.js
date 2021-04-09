import React, { Component } from "react";
import s from "./Galerry.module.css";
import { v4 as genId } from "uuid";



class Gallery extends Component
{
    state = {
        queryValue: "",
        elem: null,
    };

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
    this.props.toggleModal();
    this.setState({ elem });
    }
    
    render() {
        const { gallery, toggleModal} = this.props;
        const { handleChange, handleSubmit, getElem } = this;
        const {  queryValue } = this.state;
        return (
        <>
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
                        <img src={el.src.tiny} alt={el.alt} className={s.ImageGalleryItem_image}/>
                    
                    <div className={s.imgHover}>
                    {/* <a href="#" onClick={toggleModal}> */}
                    <a
                     href="#" onClick={toggleModal}
                
                    >
                      Click Me!
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