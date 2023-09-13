import React from "react";

const contactItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  gap: "10px",
};

function ContactItem({ name, number, onDeleteContact }) {
  return (
    <li style={contactItemStyle}>
      <span>
        {name}: {number}
      </span>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
}

export default ContactItem;

