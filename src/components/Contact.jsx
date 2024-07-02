import React, { useState } from 'react';

// Contact component
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); // State for form data
  const [errors, setErrors] = useState({}); // State for form validation errors

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name field cannot be empty';
    if (!formData.email) newErrors.email = 'Email field cannot be empty';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message) newErrors.message = 'Message field cannot be empty';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted', formData);
      // nothing happens because I did not implement the email API yet
    } else {
      setErrors(formErrors); // Set validation errors if any
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
