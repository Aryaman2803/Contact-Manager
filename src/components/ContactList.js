import React, { useRef } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'
const ContactList = ({ contacts, getContactId, term, searchKeyword }) => {
  const inputEl = useRef('')

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

  const getSearhTerm = () => {
    searchKeyword(inputEl.current.value)
  }
  return (
    <div className='main'>
      <h2>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h2>
      <div className='ui search'>
        <div className='ui icon input' style={{ width: '100%' }}>
          <input
            ref={inputEl}
            className='prompt'
            type='text'
            placeholder='Search Contacts'
            value={term}
            onChange={getSearhTerm}
          />
          <i className='search icon'></i>
        </div>
      </div>
      <div className='ui celled list'>
        {RenderContactList.length > 0 ? RenderContactList : 'No Contacts'}
      </div>
    </div>
  )
}

export default ContactList
