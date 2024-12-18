// import React, { useState} from 'react';

// import AddContactForm from './components/AddContactForm';
// import ContactList from './components/ContactList';

// const App = () => {
//     // State for managing contacts, initialized from localStorage
//     const [contacts, setContacts] = useState(
//         JSON.parse(localStorage.getItem('contacts')) || []
//     );

//     // Function to update contacts and save to localStorage
//     const updateContacts = (newContacts) => {
//         setContacts(newContacts);
//         localStorage.setItem('contacts', JSON.stringify(newContacts)); // Save manually
//     };

//     return (
//         <div>
//             <h1>Contact Manager</h1>
//             {/* Pass state and updater function as props */}
//             <AddContactForm contacts={contacts} setContacts={updateContacts} />
//             <ContactList contacts={contacts} setContacts={updateContacts} />
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react'
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';



const App = () => {
  const [contact, setcontact] = useState([])

  return (
    <div>
     
     <h2>COntact Manager </h2>
     <AddContactForm contact={contact} setcontact={setcontact} />
     <ContactList/>

    </div>
  )
}

export default App