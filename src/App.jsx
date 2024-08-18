import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContect from "./components/AddAndUpdateContect";
import useDisclouse from './hooks/useDisclouse'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contacts, setContact] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclouse();

  useEffect(() => {
    // read data....
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
      
        onSnapshot(contactsRef, (snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactLists);
        })
        
      } catch (error) {}
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[500px] m-auto px-2">
        <Navbar></Navbar>
        <Search onOpen={onOpen} filterContacts={filterContacts}></Search>
        <div>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}></ContactCard>
          ))}
        </div>
      </div>
      <AddAndUpdateContect isOpen={isOpen} onClose={onClose} onOpen={onOpen} btnTitle={'Add Contact'}></AddAndUpdateContect>
      <ToastContainer position="bottom-center">
      </ToastContainer>
    </>
  );
}

export default App;
