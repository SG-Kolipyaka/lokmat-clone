import React from 'react'
import "../CSS/webstories.css"

const Image2Scroll = ({data}) => {
  return (
    <div className='ite'>
    <img src={data["featured-image"]} alt="" className='item'  />

    
    <h2 className='title1'>{data?.title}</h2>


</div>
  )
}

export default Image2Scroll