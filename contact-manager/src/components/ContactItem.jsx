// import React from 'react';

// const ContactItem = ({ contact, contacts, setContacts }) => {
//     // Delete a contact
//     const handleDelete = () => {
//         const updatedContacts = contacts.filter((c) => c.id !== contact.id);
//         setContacts(updatedContacts);
//     };

//     // Edit a contact
//     const handleEdit = () => {
//         const updatedName = prompt("Enter new name:", contact.name) || contact.name;
//         const updatedEmail = prompt("Enter new email:", contact.email) || contact.email;
//         const updatedPhone = prompt("Enter new phone:", contact.phone) || contact.phone;

//         const updatedContacts = contacts.map((c) =>
//             c.id === contact.id
//                 ? { ...c, name: updatedName, email: updatedEmail, phone: updatedPhone }
//                 : c
//         );

//         setContacts(updatedContacts);
//     };

//     return (
//         <div>
//             <h3>{contact.name}</h3>
//             <p>Email: {contact.email}</p>
//             <p>Phone: {contact.phone}</p>
//             <button onClick={handleEdit}>Edit</button>
//             <button onClick={handleDelete}>Delete</button>
//         </div>
//     );
// };

// export default ContactItem;
