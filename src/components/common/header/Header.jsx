import React from 'react'
import '../../scss/header/header.scss'
import Logo from './logo/Logo'
import Input from './input/Input'
import Message from './message/Message'
import Notification from "./notification/Notification"
import Profile from './userAvatar/Profile'
function Header(props) {
  return (
    <header className='header'>
      <div className='header_container'>
        <ul className='navigation'>
          <li className='under_navigation'>
            <Logo />
          </li>
          <li className='under_navigation'>
            <Input />
          </li>
          <li className='control_panel'>
            <Message />
          </li>
          <li className='control_panel'>
            <Notification />
          </li>
          <li className='control_profile'>
            <Profile />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
