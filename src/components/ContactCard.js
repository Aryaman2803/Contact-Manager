import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact
  return (
    <div className='item'>
      <img
        className='ui avatar image '
        src={user}
        alt='user'
        style={{ fontSize: '25px' }}
      />
      <div className='content'>
        <Link to={{ pathname: `/contact/${id}`, state: { contact } }}>
          <div className='header'>{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className='trash alternate outline icon'
        onClick={() => {
          clickHandler(id)
        }}
        style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
      ></i>

      <Link to={{ pathname: `/edit`, state: { contact } }}>
        <i
          className='edit alternate outline icon'
          style={{ color: 'blue', marginTop: '7px' }}
        ></i>
      </Link>
    </div>
  )
}
export default ContactCard
