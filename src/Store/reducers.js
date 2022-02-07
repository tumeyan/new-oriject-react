import { MedReducer } from "./Med/reducer";
import { combineReducers } from "redux-immer";
import { produce } from "immer";

export default combineReducers(produce,{
    Med: MedReducer,
    
    

})