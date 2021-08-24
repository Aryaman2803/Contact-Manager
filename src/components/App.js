import './App.css'
import React, { useState, useEffect } from 'react'
import { uuid } from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
    console.log(contact)
  }
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) {
      setContacts(retrieveContacts)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  )
}

export default App
