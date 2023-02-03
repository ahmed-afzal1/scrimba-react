import React from 'react'

const Intro = () => {
  return (
    <div>
        {/* <img src={logo} alt="logo" /> */}
        <div className='profile'>
            <h3>Laura Smith</h3>
            <p style={{ color:'F3BF99'}}>Frontend Developer</p>
            <small>laurasmith.website</small>
        </div>

        <div className='contact'>
            <button type="button" className='email'>Email</button>
            <button type="button" className='linkedin'>LinkedIn</button>
        </div>
    </div>
  )
}

export default Intro
