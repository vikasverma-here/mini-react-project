import React, { useState } from "react";
import EditContactForm from "./EditContactForm";

function ContactList({ contacts, setContacts }) {
  const [formData, setFormData] = useState(null); 
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleEdit = (contact) => {
    setFormData(contact); 
  };

  const handleSave = (updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setFormData(null); 
  };

  return (
    <div>
      {contacts.length === 0 ? (
        <h2>No Contact Info Available</h2>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>Name:</strong> {contact.name} <br />
              <strong>Phone:</strong> {contact.phone} <br />
              <strong>Email:</strong> {contact.email}
              <br />
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
              <button onClick={() => handleEdit(contact)}>Edit</button>
            </li>
          ))}
        </ul>
      )}

      {formData && (
        <EditContactForm
          formData={formData}
          setFormData={setFormData}
          handleSave={handleSave}
        />
      )}
    </div>
  );
}

export default ContactList;
