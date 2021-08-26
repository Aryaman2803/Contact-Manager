import React from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'
const ContactList = ({contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id)
  }
  const RenderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHandler={deleteContactHandler}
      />
    )
  })
  return (
    <div className='main'>
      <h2>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h2>
      <div className='ui celled list'>{RenderContactList}</div>
    </div>
  )
}

export default ContactList
