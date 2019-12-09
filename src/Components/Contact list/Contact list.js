import React, { Fragment } from "react";
import "./Contact list.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList }) => {
  const contactItem = ContactList.map(item => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        description={item.description}
        avatar={item.avatar}
        facebook={item.facebook}
        twitter={item.twitter}
        gender={item.gender}
      />
    );
  });

  return <Fragment>{contactItem}</Fragment>;
};

export default ContactList;
