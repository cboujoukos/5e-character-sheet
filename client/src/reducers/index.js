import { combineReducers } from 'redux';
import characterBuilderReducer from './characterBuilderReducer';

const rootReducer = combineReducers({
  characterBuilder: characterBuilderReducer
})

export default rootReducer;
