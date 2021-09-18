import {SET_LOCATION, SET_LOCATION_DATA} from "../KEYWORDS";

export const setWeatherLocation = (location) => {
  return {
    type: SET_LOCATION,
    payload: location
  }
}

export const setWeatherData = (location) => {
  return (dispatch) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${location}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.error)
          return
        dispatch({
          type: SET_LOCATION_DATA,
          payload: data,
        })
      })
  }
}
