/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Form.css';

const RegistrationApp = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [notification, setNotification] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    success: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setNotification((prevNotification) => ({
      ...prevNotification,
      [name]: '',
    }));
  };

  const handleFormSubmit = () => {
    const newNotification = {};
    if (userDetails.firstName === '') {
      newNotification.firstName = 'Please enter your first name!';
    }
    if (userDetails.lastName === '') {
      newNotification.lastName = 'Please enter your last name!';
    }
    if (userDetails.email === '') {
      newNotification.email = 'Please enter your email!';
    }
    if (userDetails.phoneNumber === '') {
      newNotification.phoneNumber = 'Please enter your phone number!';
    } else if (!/^\d{10}$/.test(userDetails.phoneNumber)) {
      newNotification.phoneNumber = 'Invalid phone number.';
    }
    if (Object.keys(newNotification).length > 0) {
      setNotification(newNotification);
      setNotification((prevNotification) => ({ ...prevNotification, success: '' }));
    } else {
      setNotification({ success: 'Registration successful!' });
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        {notification.success && <p className="success-msg">{notification.success}</p>}
        <form>
          <div className="input-wrapper">
            <input type="text" name="firstName" placeholder="First Name" value={userDetails.firstName} onChange={handleInputChange} />
            {notification.firstName && <p className="error-msg">{notification.firstName}</p>}<br />
            <input type="text" name="lastName" placeholder="Last Name" value={userDetails.lastName} onChange={handleInputChange} />
            {notification.lastName && <p className="error-msg">{notification.lastName}</p>}<br />
            <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleInputChange} />
            {notification.email && <p className="error-msg">{notification.email}</p>}<br />
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={userDetails.phoneNumber} onChange={handleInputChange} />
            {notification.phoneNumber && <p className="error-msg">{notification.phoneNumber}</p>}
          </div><br />
          <button type="button" className="submit-btn" onClick={handleFormSubmit}> Register </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationApp;
