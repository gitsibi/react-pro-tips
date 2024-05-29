/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Form.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });
  const [messages, setMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
    success: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [name]: '',
    }));
  };
  const handleSubmit = () => {
    const newMessages = {};
    if (formData.firstName === '') {
      newMessages.firstName = 'Please enter your first name!';
    }
    if (formData.lastName === '') {
      newMessages.lastName = 'Please enter your last name!';
    }
    if (formData.email === '') {
      newMessages.email = 'Please enter your email!';
    }
    if (formData.contacts === '') {
      newMessages.contacts = 'Please enter your phone number!';
    } else if (!/^\d{10}$/.test(formData.contacts)) {
      newMessages.contacts = 'Invalid phone number. It should be exactly 10 digits!';
    }
    if (Object.keys(newMessages).length > 0) {
      setMessages(newMessages);
      setMessages((prevMessages) => ({ ...prevMessages, success: '' }));
    } else {
      setMessages({ success: 'Registration successful!' });
    }
  };
  return (
  <div className="container">
    <div className="box">
      {messages.success && <p className="success-message">{messages.success}</p>}
      <form>
        <div className="input-container">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
            {messages.firstName && <p className="error">{messages.firstName}</p>}<br />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
            {messages.lastName && <p className="error">{messages.lastName}</p>}<br />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            {messages.email && <p className="error">{messages.email}</p>}<br />
            <input type="text" name="contacts" placeholder="Phone Number" value={formData.contacts} onChange={handleChange}/>
            {messages.contacts && <p className="error">{messages.contacts}</p>}
          </div><br />
        <button type="button" className="btn" onClick={handleSubmit}> Register </button>
      </form>
    </div>
  </div>
  );
};

export default App;