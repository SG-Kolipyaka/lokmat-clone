import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { reducer as homereducer } from "./StoryReducer/reducer"


const rootReducer=combineReducers({
    homereducer ,


})




export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))