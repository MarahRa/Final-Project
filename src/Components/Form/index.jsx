import React from "react";
import { useState } from "react";
import InputField from "../InputField";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.confirm("your message was successfully sent");
    setName("");
    setEmail("");
    setMessage("");
  };
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  return (
    <div className="form-container">
      <form className="Form" onSubmit={handleSubmit} action="" method="post">
        <h2>Contact us</h2>
        <InputField
          label="Name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
          type="text"
        />
        <InputField
          label="Email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          type="email"
          required
        />
        <InputField
          label="Message"
          id="message"
          isTextArea={true}
          placeholder="Type your message here"
          value={message}
          onChange={onChangeMessage}
          type="message"
          required
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
