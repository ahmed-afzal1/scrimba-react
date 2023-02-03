import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

const SingleNews = (props) => {
    const {photo,location,title,date,description} = props.news
  return (
    <div>
        <div className='single--news'>
            <div className='news--left'>
                <img src={photo} alt=""/>
            </div>
            <div className='news--right'>
                <div className='news--location'>
                    <FaMapMarkerAlt className='location-icon'/>
                    <span className='location--name'>{location}</span>
                    <small><a href="#">View on Google Maps</a></small>
                </div>

                <div className='news--content'>
                    <p className='news--title'>{title}</p>
                    <p className='news--date'>{date}</p>
                    <p className='news--description'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleNews
