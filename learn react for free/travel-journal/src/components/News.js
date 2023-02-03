import React from 'react'
import data from '../data_json'
import SingleNews from './SingleNews'

const News = () => {
  return (
    <div className='news--section'>
        {
            data.map(news=><SingleNews key={news.id} news={news}/>)
        }
    </div>
  )
}

export default News
