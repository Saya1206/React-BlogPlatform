import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been successfully sent.`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="main">
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow border-0">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    aria-label="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message"
                    aria-label="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
