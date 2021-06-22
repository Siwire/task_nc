import { combineReducers } from 'redux';
import appReducer from './appReducer';

const createRootReducer = (history) => combineReducers({
    noteStore: appReducer,
});

export default createRootReducer;