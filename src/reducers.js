import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchfield: ''
}

export const searchRobots = (state=initialState, action={}) =>{
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return {...state, searchfield: action.payload}
      // another way of doing this return statement is
      // return Object.assign({}, state, searchfield:action.payload)
    default:
      return state
  }
}