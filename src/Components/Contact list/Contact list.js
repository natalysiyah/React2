import React, { Fragment } from "react";
import "./Contact list.css";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ ContactList, onStarPress, onDelete }) => {
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
        favorite={item.favorite}
        onStarPress={() => onStarPress(item.id)}
        onDelete={() => onDelete(item.id)}
      />
    );
  });

  return <Fragment>{contactItem}</Fragment>;
};

export default ContactList;
