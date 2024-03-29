import React from 'react'
import first from '../images/card-1.png'
import { AiOutlineStar } from "react-icons/ai";

const Card = () => {
  return (
    <div className="card">
      <img src={first} className="card--image" alt=''/>
      <div className="card--stats">
          <AiOutlineStar className="card--star"/>
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}

export default Card
