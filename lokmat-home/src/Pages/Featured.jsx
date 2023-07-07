import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { getData } from '../Redux/StoryReducer/action'
import Image1Scroll from './Image1Scroll'
import SideNews from './SideNews'
import "../CSS/home.css"

const Featured = () => {
    
    const dispatch=useDispatch()  

    const state=useSelector((store)=> store.homereducer)


    useEffect(()=>{
  dispatch(getData)
  
    },[])
  return (
    <div>
        {state.data.map((el,i)=>{
            if(i===0){
                return <div key={i}>
                    {el.data.map((ell,i)=>{
                        if(i===0){
                            return <div className='home1'> 
                                
                                <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10px",width:"100%"}}>
                                <h1 style={{color:"red"}}>{ell?.category}  </h1>
                                <h1 style={{marginLeft:"15px",color:"red"}}> :</h1>
                                <h1>{ell?.title}</h1>
                            </div >
                            
                            <img src={ell['featured-image']} alt="lokmat"width={"100%"} />
                     
                            
                            </div>
                        }
                    })}
                </div>
            }
        })}

<div>
{state.data.map((el,i)=>{
            if(i===0){
                return <div key={i}>
                    {el.data.map((ell,i)=>{
                        if(i>0 && i<4){
                            return <SideNews key={i} ell={ell} ii={i}/>
                        }
                    })}
                </div>
            }
        })}
</div>
{/* 
scroll */}
<br />


{state.data.map((el,i)=>{
            if(i===0){
                return <div key={i} className='wrapper'>
                    {el.data.map((ell,i)=>{
                        if(i>3 && i<7){
                            return <Image1Scroll key={i} data={ell}/>
                            
                            
                        }
                    })}
                </div>
            }
        })} 


<div>
{state.data.map((el,i)=>{
            if(i===0){
                return <div key={i}>
                    {el.data.map((ell,i)=>{
                        if(i>6 && i<10){
                            return <SideNews key={i} ell={ell} ii={i}/>
                        }
                    })}
                </div>
            }
        })}
</div>

    </div>
  )
}

export default Featured






