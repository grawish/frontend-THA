import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import weather from './weather/reducer'
import theme from './theme/reducer'

export default createStore(combineReducers({
  weather,
  theme
}), applyMiddleware(thunk));

