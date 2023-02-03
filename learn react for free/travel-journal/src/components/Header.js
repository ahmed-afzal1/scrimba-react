import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
      <FaGlobeAmericas className='header--icon'/>
      <p className='header--title'>my travel journal.</p>
    </div>
  )
}

export default Header
