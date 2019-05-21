import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducer);


export default store;
