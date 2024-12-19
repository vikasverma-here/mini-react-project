import React from "react";

function EditContactForm({ formData, setFormData, handleSave }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Edit Contact</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={() => handleSave(formData)}>Save</button>
      <button onClick={() => setFormData(null)}>Cancel</button>
    </div>
  );
}

export default EditContactForm;
