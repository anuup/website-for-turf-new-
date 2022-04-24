import React from 'react'
import  "../styles/Body.css"
import football from "../images/Football Goal-pana.png"

function body() {
  return (
    <div>
      <div className='body'>
        <div className='body-content'>
            <h1>We offer modern solution <br/> for your busy life</h1>
            <h2>Find your nearest turf  <br />on a tap away</h2>
            <button className='btn-2'>Book your slots now</button>
            <img src={football} alt="" className='img-1'/>
        </div>
      </div>
    </div>
  )
}

export default body