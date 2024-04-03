import React, { useState } from "react";
import styled from "styled-components";
import { createPost } from "../firebase/database";

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const listenInputs = (e) => {
    let { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const onSubmithandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    try {
      if (inputs.message !== "") {
        await createPost(inputs);

        setError("form has been sumbitted");
        setInputs({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      } else {
        alert("inputs can not be blank");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoader(false);
  };

  return (
    <form action="" onSubmit={onSubmithandler}>
      <Div>
        <p className="message">{error}</p>
        <Input
          onChange={listenInputs}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={inputs.name}
        />
        <Input
          onChange={listenInputs}
          type="email"
          name="email"
          id="email"
          placeholder="john@xyz.com"
          value={inputs.email}
        />
        <Input
          onChange={listenInputs}
          type="text"
          name="phone"
          id="phone"
          maxLength={10}
          placeholder="contact number"
          value={inputs.phone}
        />
        <TextAreaInput
          onChange={listenInputs}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={inputs.message}
        ></TextAreaInput>

        <div className="text-center my-3">
          <button
            className={`btn btn-outline-warning px-5 ${
              loader && "btn btn-secondary"
            } `}
            type="submit"
            disabled={loader}
          >
            Send
          </button>
        </div>
      </Div>
    </form>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;

  .message {
    color: #1cad1c;
    font-size: 1.3rem;
    transition: 0.5s;
  }
`;
const Input = styled.input`
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  background: #24262a;
  outline: none;
  color: white;
  transition: 0.5s;

  &:focus {
    background: #0b1b36;
    padding: 1rem;
  }
`;
const TextAreaInput = styled.textarea`
  border-radius: 0.5rem;
  background: #24262a;
  resize: none;
  outline: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s;
  border: none;

  &:focus {
    background: #0b1b36;
    padding: 1rem;
  }
`;
export default ContactForm;
