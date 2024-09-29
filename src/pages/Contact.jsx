// Import React to use JSX
import React from "react";

// Define the Contact component, which displays a contact form
function Contact() {
  return (
    <div>
      {/* Heading for the Contact section */}
      <h1>Contact</h1>

      {/* Contact form */}
      <form>
        {/* Name input field */}
        <label>
          Name:
          <input type="text" required />
        </label>
        <br />

        {/* Email input field */}
        <label>
          Email:
          <input type="email" required />
        </label>
        <br />

        {/* Message textarea field */}
        <label>
          Message:
          <textarea required></textarea>
        </label>
        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Export the Contact component so it can be used in other parts of the app
export default Contact;
