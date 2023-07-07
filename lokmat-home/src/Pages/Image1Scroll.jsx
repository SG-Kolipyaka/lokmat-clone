import React from 'react'

import "../CSS/home.css"

const Image1Scroll = ({data}) => {

  return (    

       <div className='item1'>
                                <img src={data["featured-image"]} alt="" width={"100%"} className='item'  />
                                <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10px",width:"100%"}}>
                                <h2 style={{color:"red"}}>{data?.category}  </h2>
                                <h2 style={{marginLeft:"15px",color:"red"}}> :</h2>
                                <h2>{data?.title}</h2>
                            </div >
                           
                            </div>
                            
                            
                   
             
          
        
  
  )
}

export default Image1Scroll