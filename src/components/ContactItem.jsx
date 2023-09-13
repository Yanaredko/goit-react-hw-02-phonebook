import React from "react";

function ContactItem({ name, number }) {
  return (
    <li>
      {name}: {number}
    </li>
  );
}

export default ContactItem;
