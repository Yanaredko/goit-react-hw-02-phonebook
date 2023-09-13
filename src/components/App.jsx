import React, { Component } from "react";
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = () => {
    if (this.state.name.trim() !== '' && this.state.number.trim() !== '') {
      const newContact = {
        name: this.state.name,
        number: this.state.number,
        id: nanoid()
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: "",
        number: "",
      }));
    }
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div style={{ marginLeft: '20px' }}>
        <h1>Phonebook</h1>
        <div style={{ border: '1px solid #ccc', padding: '8px' }}>
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

          <label htmlFor="number" style={{ display: 'block' }}>Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />

          <button onClick={this.addContact} style={{ marginLeft: '20px', display: 'block' }}>Add contact</button>
        </div>

        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>

        <div style={{ marginBottom: '8px', marginLeft: '20px' }}>
          <label htmlFor="filter" style={{ display: 'block' }}>Find contacts by name:</label>
          <input
            type="text"
            id="filter"
            name="filter"
            placeholder="Search by name"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </div>

        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

