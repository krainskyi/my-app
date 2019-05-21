import React from 'react';
import {addMessageActionCreator,updateOnMessageChange} from '../../redux/dialogs-reducer';
import AddDialogs from './AddDialogs';
import Dialogs from './Dialogs';

const AddDialogsContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addMessage = ()=>{
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange =(text)=>{
        props.store.dispatch(updateOnMessageChange(text));
    }

    return (
        <div>
    <Dialogs Message={state.dialogsPage.Message}
    user={state.dialogsPage.user}/>

    <AddDialogs  addMessage={addMessage} onMessageChangeText={onMessageChange} 
    dispatch={props.dispatch} newMessageText={state.newMessageText}/>
        </div>
    );
}
export default AddDialogsContainer;