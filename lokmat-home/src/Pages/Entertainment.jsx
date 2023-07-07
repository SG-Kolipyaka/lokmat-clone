import React from 'react'
import Image1Scroll from './Image1Scroll'
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { getData } from '../Redux/StoryReducer/action'
import SideNews from './SideNews'
import "../CSS/home.css"


const Entertainment = () => {
    const dispatch=useDispatch()  

    const state=useSelector((store)=> store.homereducer)


    useEffect(()=>{
  dispatch(getData)
  
    },[])
  return (
    <div>
        <br />
        <br />
        {state.data.map((el,i)=>{
             if(i===2){
             return <>
                 <div className='div1'>
                <h1 className='showtitle'>{el?.showTitle}</h1>
                <button className='but1'>पुढे वाचा &gt;&gt;</button>
                </div>
                <div key={i} className='wrapper'>
                    {el.data.map((ell,i)=>{
                        if(i>=0 && i<3){
                            return <Image1Scroll key={i} data={ell}/>
                            
                            
                        }
                    })}
                </div>
                </>
                
            }
        })}


<div>
{state.data.map((el,i)=>{
            if(i===2){
                return <div key={i}>
                    {el.data.map((ell,i)=>{
                        if(i>2 ){
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

export default Entertainment