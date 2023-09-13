import React, { Component } from "react";
// import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm.jsx";
import ContactList from "./ContactList.jsx";
import Filter from "./Filter.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
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
        <ContactForm onAddContact={this.handleAddContact} />

        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default App;

