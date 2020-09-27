import React, { Component } from "react";
import style from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  //   handleContact = (e) => {
  //     this.setState({ name: e.target.value });
  //   };

  //   handleNumber = (e) => {
  //     this.setState({ number: e.target.value });
  //   };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.label}>
          Number
          <input
            className={style.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
