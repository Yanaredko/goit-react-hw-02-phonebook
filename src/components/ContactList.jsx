import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDeleteContact={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
}


export default ContactList;
