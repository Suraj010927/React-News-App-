import React from 'react'
import './NewsItem.css'
import { Card } from 'react-bootstrap';
import 'react-bootstrap'
<><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Bitter&display=swap" rel="stylesheet" /></>

export default function NewsItem(props) {
 
  return (
    <>
    <a href={props.url} target="_blank">
     <Card>
        <Card.Img className='card-img-top' style={{ height: '50vh', objectFit: 'cover' }} variant="top" src={props.image} />
       
          <div className='card-img-overlay '>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
            
          </div>
        
      </Card>
      </a>
         
    </>
  )
}

