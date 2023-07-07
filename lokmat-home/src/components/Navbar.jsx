import React from 'react'
import "../CSS/nav.css"
import { BiMenu } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className='navclass' style={{display:"flex",alignItems:"center",paddingLeft:"30px"}}>
<div style={{textAlign:"left"}}>
<BiMenu style={{color: "white",fontSize:"36px"}}/>
</div>
<div>
    <h1 className='title' >लोकमत</h1>
</div>

    </div>
  )
}

export default Navbar