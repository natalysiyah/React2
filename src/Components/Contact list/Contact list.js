import React, { Fragment } from "react";
import "./Contact list.css";
import ContactItem from "./ContactItem/ContactItem";
import Search from "../Search/Search";

const ContactList = ({ ContactList, onStarPress, onDelete,onEditContact }) => {
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
        onEditContact={() =>onEditContact(item.id)}
      />
    );
  });

  return (
    <Fragment>
      <Search></Search>
      {contactItem}
    </Fragment>
  );
};

export default ContactList;
