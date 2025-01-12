import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [image, setImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState('');  // To store image URL from Cloudinary
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  const onSubmit = async (data) => {
    if (image) {
      try {
        // Create FormData for Cloudinary
        const newData = new FormData();
        newData.append('file', image);
        newData.append('upload_preset', 'contactImage');
        newData.append('cloud_name', 'de2ak09qu');

        // Upload image to Cloudinary
        const response = await fetch('https://api.cloudinary.com/v1_1/de2ak09qu/image/upload', {
          method: 'POST',
          body: newData,
        });

        const result = await response.json();
        if (result.secure_url) {
          // Now, add image URL to the contact data
          const updatedContact = { ...data, imageUrl: result.secure_url };
          const updatedContacts = [...contacts, updatedContact];
          localStorage.setItem('contacts', JSON.stringify(updatedContacts));
          setContacts(updatedContacts);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    
    reset();
    setImage(null); 
  };


  const handleDelete = (index)=>{
  }
  const handleEdit = ()=>{

  }

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

        <button type="submit">Submit</button>
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
                  
                />
              )}
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <button onClick={()=>handleDelete(index)} >Delete</button>
              <button onClick={handleEdit} >Edit</button>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
