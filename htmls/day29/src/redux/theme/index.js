import {RESET_THEME, SET_THEME, TOGGLE_THEME} from "../KEYWORDS";

export const setTheme =  (theme) => {
  return {
    type: SET_THEME,
    payload: theme
  }
}

export const resetTheme =  () => {
  return {
    type: RESET_THEME
  }
}

export const toggleTheme =  () => {
  return {
    type: TOGGLE_THEME
  }
}
