// import React, { useState } from 'react';

// const AddContactForm = ({ contacts, setContacts }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleAddContact = (e) => {
//         e.preventDefault();

//         // Create a new contact object
//         const newContact = { id: Date.now(), name, email, phone };
//         setContacts([...contacts, newContact]);

//         // Clear the form fields
//         setName('');
//         setEmail('');
//         setPhone('');
//     };

//     return (
//         <form onSubmit={handleAddContact}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="text"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//             />
//             <button type="submit">Add Contact</button>
//         </form>
//     );
// };

// export default AddContactForm;



import React from 'react';
import { useForm } from "react-hook-form";

const AddContactForm = ({contact,setcontact}) => {
    const {
        register,   // For registering input fields
        handleSubmit, // For handling form submission
        watch,       // For watching input values
        formState: { errors }, // For managing validation errors
    } = useForm();

    const onSubmit = (data) => {
        // console.log('Form Data:', data);
        alert(`Form submitted successfully! Name: ${data.name}, Email: ${data.email},Number: ${data.number}`);
        setcontact(data)
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                        required: 'Phone number is required', // Required validation
                        pattern: {
                            value: /^[0-9]{10}$/, // Regex for 10-digit phone number
                            message: 'Phone number must be 10 digits',
                        },
                    })}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: 'Invalid email address',
                        },
                    })}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddContactForm;
