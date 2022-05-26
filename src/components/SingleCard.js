import React from 'react'
import { Link } from 'react-router-dom'

export const SingleCard = ({id, name, department, title, abstract}) => {
  return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{name} {department}</h6>
                <p className='card-text'>{abstract.substring(0, 50)}...</p>
                <Link to={`./${id}`} className='card-link'>阅读详情</Link> 
            </div>
        </div>
  )
}
