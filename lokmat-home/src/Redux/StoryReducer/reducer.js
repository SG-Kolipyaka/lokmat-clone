import { DATA_FAILUER,DATA_SUCCESS,DATA_REQUEST} from "./actionType";

const initialState={
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case DATA_REQUEST:
        return {...state,isLoading:true}
        case DATA_SUCCESS:
            return {...state,isLoading:false,data:payload}
            case DATA_FAILUER:
                return {...state,isLoading:false,isError:true}
    default:
        return state
}

}