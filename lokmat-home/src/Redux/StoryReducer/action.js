import { DATA_FAILUER,DATA_SUCCESS,DATA_REQUEST } from "./actionType";

import axios from "axios";    

export const getData=(dispatch)=>{
    dispatch({type:DATA_REQUEST})
    return axios.get("http://api.lokmat.com/assignmentassociate3").then((res)=>{
        console.log(res.data)
dispatch({type:DATA_SUCCESS,payload:res.data})

    }).catch((er)=>{
        dispatch({type:DATA_FAILUER})
    })
}

