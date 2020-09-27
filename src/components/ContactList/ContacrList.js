import React from "react";
import PropTypes from "prop-types";
import style from "./ContactList.module.css";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, removeContact }) => (
  <ul className={style.list}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        id={id}
        name={name}
        number={number}
        removeContact={removeContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
