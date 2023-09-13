import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
