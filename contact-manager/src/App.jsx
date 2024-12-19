import React, { useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]); 

  console.log(contacts); 

  return (
    <div>
      <h2>Contact Manager</h2>
      
      <AddContactForm setContacts={setContacts} />
      
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
