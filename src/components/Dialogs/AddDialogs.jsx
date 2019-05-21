import React from 'react';
import s from './Dialogs.module.css';


const AddDialogs = (props) => {

    let onAddMessage = ()=>{
        props.addMessage();
    }
    let onMessageChange =(e)=>{
        let text = e.target.value;
        props.onMessageChangeText(text);
    }

    return (<div className={s.addMessage}>
        <textarea onChange={onMessageChange} value={props.newMessageText}/>
        <div>
        <button  onClick={onAddMessage}>Push message</button>
            </div>
    </div>

    );
}
export default AddDialogs;