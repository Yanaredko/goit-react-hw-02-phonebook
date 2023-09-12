import React, { Component } from "react";
import { nanoid } from 'nanoid'; 

class App extends Component {
  state = {
    contacts: [],
    name: ""
  };

  addContact = () => {
    if (this.state.name.trim() !== "") {
      const newContact = {
        name: this.state.name,
        id: nanoid()
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: ""
      }));
    }
  };

  handleNameChange = (event) => {
    this.setState({ name:event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <div>
         <div style={{ marginBottom: '8px' }}>
    <label htmlFor="name" style={{ display: 'block' }}>
      Name:
    </label>
    <input
      type="text"
      id="name"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={this.state.name}
      onChange={this.handleNameChange}
    />
  </div>
          <button onClick={this.addContact}>Add contact</button>
        </div>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}


export default App;