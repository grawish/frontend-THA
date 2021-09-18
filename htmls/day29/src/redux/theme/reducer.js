import {SET_THEME, TOGGLE_THEME, RESET_THEME} from "../KEYWORDS";

const initialState =  window.matchMedia("(prefers-color-scheme: dark)").matches

export default (state = initialState, action) => {
  console.log(state, action)
  switch (action.type){
    case SET_THEME:
      return action.payload
    case TOGGLE_THEME:
      return !state.theme
    case RESET_THEME:
      return initialState.theme
    default:
      return state
  }
}
