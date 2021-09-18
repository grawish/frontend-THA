import {SET_LOCATION, SET_LOCATION_DATA} from "../KEYWORDS";

const initialState = {
  data: '',
  location: ''
}

export default (state = initialState, action) => {
  console.log(state, action)
  switch (action.type){
    case SET_LOCATION: return {
      ...state,
      location: action.payload
    }
    case SET_LOCATION_DATA: return {
      ...state,
      data: action.payload
    }
    default: return state
  }
}

