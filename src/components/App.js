import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { uuid } from 'uuidv4'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetails from './ContactDetail'
import api from '../api/contacts'
function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = async (contact) => {
    // setContacts([...contacts, { id: uuid(), ...contact }])
    const request = {
      id: uuid(),
      ...contact,
    }

    const response = await api.post('/contacts', request)
    if (response) setContacts([...contacts, response.data])
    // console.log(response)
  }

  //Retrive contacts from axois
  const retrieveContacts = async () => {
    const response = await api.get('/contacts')
    return response.data
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrieveContacts) {
    //   setContacts(retrieveContacts)
    // }
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }

    getAllContacts()
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path='/add'
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            path='/contact/:id'
            render={(props) => <ContactDetails {...props} />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
