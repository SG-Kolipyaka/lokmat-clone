import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { getData } from '../Redux/StoryReducer/action'
import Image2Scroll from './Image2Scroll'
import "../CSS/webstories.css"

const WebStories = () => {
    const dispatch=useDispatch()  

    const state=useSelector((store)=> store.homereducer)


    useEffect(()=>{
  dispatch(getData)
  
    },[])
  return (
    <div>
        <br />
        {state.data.map((el,i)=>{

            if(i===1){
                
                return <>
                <div className='div1'>
                <h1 className='showtitle'>{el?.showTitle}</h1>
                <button className='but1'>पुढे वाचा &gt;&gt;</button>
                </div>
                <div key={i} className='wrapper2'>
                    {el.data.map((ell,i)=>{
                       
                            return <Image2Scroll key={i} data={ell} />
                     
                    })}
                </div>
                
                </>
                
            }
        })}
    </div>
  )
}

export default WebStories