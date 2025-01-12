import React from 'react'
import { useForm } from "react-hook-form"
import { useState,useEffect } from 'react';
const App = () => {
  const [contacts, setContacts] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()


  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);


const onsubmit = (data)=>{

  const updatedContacts = [...contacts, data];

  localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  setContacts(updatedContacts);



reset()
}

console.log("this data is new", contacts)
  return (
    <div>

      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
     
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
          {...register('file', { required: 'File upload is required' })}
        />
        {errors.file && <p>{errors.file.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>

 {/* Display all submitted contacts */}
 {contacts.length > 0 && (
        <div>
          <h2>Submitted Contacts</h2>
          {contacts.map((contact, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>File:</strong> {contact.file ? contact.file.name : 'No file uploaded'}</p>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default App
