import React from 'react'
import "../CSS/home.css"

const Image1Scroll = ({data}) => {

  return (    

       <div className='item1'>
                                <img src={data["featured-image"]} alt=""  className='item'  />
                                <div style={{marginLeft:"10px",width:"100%"}}>
                                <h2 style={{color:"red",display:"inline"}}>{data?.category}  :</h2>
                                
                                <h2 style={{display:"inline",marginLeft:"2px"}}>{data?.title}</h2>
                            </div >
                           
                            </div>
                            
                            
                   
             
          
        
  
  )
}

export default Image1Scroll