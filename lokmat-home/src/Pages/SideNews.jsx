import React from 'react'
import "../CSS/home.css"

const SideNews = ({ell,ii}) => {
  return (
    <div className='side1'>
                                <br />
                                <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginLeft:"10px"}}>
                                <div >
                                    <img src={ell['featured-image']} alt="लोकमत" style={{borderRadius:"30px",width:"100%"}} />
                                </div>
                             <div>
                                
                             </div>
                            <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"10px",width:"100%"}}>
                                <h2 style={{color:"red"}}>{ell?.category}  </h2>
                                <h2 style={{marginLeft:"15px",color:"red"}}>:</h2>
                                <h2>{ell?.title}</h2>
                            </div >
                            </div>
                           {ii!==3 || ii!==5? <hr />:<h1></h1>}
                            </div>
  )
}

export default SideNews