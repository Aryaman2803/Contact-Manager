import React from 'react'
import ContactCard from './ContactCard'
const ContactList = ({ contacts, getContactId }) => {
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
  return <div className='ui celled list'>{RenderContactList}</div>
}

export default ContactList
