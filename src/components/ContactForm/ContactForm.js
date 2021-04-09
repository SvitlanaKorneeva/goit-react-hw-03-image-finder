import React, { Component } from "react";
import s from "./ContactForm.module.css";
import { v4 as genId } from "uuid";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });

  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)

    // const { name, number } = this.state;
    // const newContact = {genId, name, number}
    // this.setState(prevState => ({
    //   contacts: [newContact, ...prevState.contacts]
    // }))

    // this.setState({ name: '', number: '' });
    
    const { name, number } = this.state;
    this.props.onAddContact({name, number})
    this.setState({ name: '', number: '' });
    
    // // this.props.onAddContact(this.state.number)
    // this.props.onAddContact({ ...this.state });
    // this.setState({ name: "", number: "" });

  }
//   handleNameChange = event => {
//     // console.log(event.currentTarget.value)
//     this.setState({name: event.currentTarget.value})
//   }
  
//   handleNumberChange = event => {
//     // console.log(event.currentTarget.value)
//     this.setState({number: event.currentTarget.value})
// }
  render() {
    return (
      <>
      {/* <h2>PhoneBook</h2> */}

      <div className={s.wrapper}>
         <form className={s.contactsForm} onSubmit ={this.handleSubmit}>
              <label htmlFor="">
                Name
                <input
                  onChange ={this.handleChange}
                  type="text"
                  placeholder="name"
                  name="name"
                  value = {this.state.name}
                />
            </label>
            
            <label htmlFor="">
                Number
                <input
                  onChange ={this.handleChange}
                  type="text"
                  placeholder="number"
                name="number"
                value = {this.state.number}
                />
              </label>
        <button type="submit" className={s.btn} >Add contact</button>
            </form>
        </div>
        {/* <h2 className={s.title}>Contacts</h2> */}
        {/* <ul>
          {contacts.map(({ genId, name, number }) => (
            <li key={genId}>
              <p>{name} : {number} </p>
            </li>
          ))}
        </ul> */}
</>
    )
  }

}
export default ContactForm;