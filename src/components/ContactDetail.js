import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.jpg'

const ContactDetails = (contact) => {
  const { name, email } = contact.location.state.contact
  return (
    <div className='main'>
      <div className='ui card centered'>
        <div className='uimage'>
          <img src={user} alt={name} style={{ width: '100%' }} />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='descrption'>{email}</div>
        </div>
      </div>
      <div className='ui center aligned container'>
        <Link to='/'>
          <button className='ui button blue'>Back to Contact List</button>
        </Link>
      </div>
    </div>
  )
}
export default ContactDetails
