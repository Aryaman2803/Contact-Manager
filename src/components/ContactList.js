import React from 'react'
import ContactCard from './ContactCard'
const ContactList = ({ contacts }) => {
  const RenderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} />
  })
  return <div className='ui celled list'>{RenderContactList}</div>
}

export default ContactList
