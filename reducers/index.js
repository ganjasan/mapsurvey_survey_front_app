import { combineReducers } from 'redux';
import mapReducer from './map';
import drawControllerReducer from './drawController';
import infoWrapperReducer from './infoWrapper';
import sectionReducer from './section';
import appReducer from './app'

const rootReducer = combineReducers({
  app:appReducer,
  map:mapReducer,
  drawcontroller:drawControllerReducer,
  infoWrapper:infoWrapperReducer,
  section:sectionReducer,
});

export default rootReducer;
