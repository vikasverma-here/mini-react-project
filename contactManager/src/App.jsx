import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [image, setImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the contact being edited

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  const onSubmit = async (data) => {
    let updatedContacts = [...contacts];

    if (editIndex !== null) {
      // Editing existing contact
      updatedContacts[editIndex] = { ...updatedContacts[editIndex], ...data };

      if (image) {
        try {
          const newData = new FormData();
          newData.append('file', image);
          newData.append('upload_preset', 'contactImage');
          newData.append('cloud_name', 'de2ak09qu');

          const response = await fetch(
            'https://api.cloudinary.com/v1_1/de2ak09qu/image/upload',
            {
              method: 'POST',
              body: newData,
            }
          );

          const result = await response.json();
          if (result.secure_url) {
            updatedContacts[editIndex].imageUrl = result.secure_url;
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    } else {
      // Adding a new contact
      if (image) {
        try {
          const newData = new FormData();
          newData.append('file', image);
          newData.append('upload_preset', 'contactImage');
          newData.append('cloud_name', 'de2ak09qu');

          const response = await fetch(
            'https://api.cloudinary.com/v1_1/de2ak09qu/image/upload',
            {
              method: 'POST',
              body: newData,
            }
          );

          const result = await response.json();
          if (result.secure_url) {
            data.imageUrl = result.secure_url;
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }

      updatedContacts.push(data);
    }

    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    reset();
    setImage(null);
    setEditIndex(null); // Reset edit index after submission
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleEdit = (index) => {
    const contact = contacts[index];
    setEditIndex(index); // Set the index of the contact being edited

    // Prefill form fields
    setValue('name', contact.name);
    setValue('email', contact.email);
    setValue('phone', contact.phone);
  };

  return (
    <div>
      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits',
              },
            })}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="file">Upload File:</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit">
          {editIndex !== null ? 'Update Contact' : 'Add Contact'}
        </button>
      </form>

      {/* Display all submitted contacts */}
      {contacts.length > 0 && (
        <div>
          <h2>Submitted Contacts</h2>
          {contacts.map((contact, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              {contact.imageUrl && (
                <img
                  src={contact.imageUrl}
                  alt="Contact"
                  style={{ width: '100px', height: '100px' }}
                />
              )}
              <p>
                <strong>Name:</strong> {contact.name}
              </p>
              <p>
                <strong>Email:</strong> {contact.email}
              </p>
              <p>
                <strong>Phone:</strong> {contact.phone}
              </p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
