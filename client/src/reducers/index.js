import { combineReducers } from 'redux';
import characterBuilderReducer from './characterBuilderReducer';
import characterReducer from './characterReducer'

const rootReducer = combineReducers({
  characterBuilder: characterBuilderReducer,
  character: characterReducer
})

export default rootReducer;
