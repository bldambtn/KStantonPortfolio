// Import useState for form management
import React, { useState } from "react";

function Contact() {
  // State to track form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    // If there are any errors, prevent form submission
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Form submitted successfully
    alert("Form submitted successfully!");

    // Reset form data and errors after successful submission
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-form">
      <h1>Contact</h1>

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value.trim()) {
                setErrors({ ...errors, name: "Name is required" });
              } else {
                setErrors({ ...errors, name: "" });
              }
            }}
          />
        </div>
        {errors.name && <p className="error-message">{errors.name}</p>}

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value.trim()) {
                setErrors({ ...errors, email: "Email is required" });
              } else if (!emailRegex.test(e.target.value)) {
                setErrors({ ...errors, email: "Invalid email address" });
              } else {
                setErrors({ ...errors, email: "" });
              }
            }}
          />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value.trim()) {
                setErrors({ ...errors, message: "Message is required" });
              } else {
                setErrors({ ...errors, message: "" });
              }
            }}
          ></textarea>
        </div>
        {errors.message && <p className="error-message">{errors.message}</p>}

        {/* Submit button */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
