import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' />
            <NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}
const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Yura' },
        { id: 2, name: 'Lana' },
        { id: 3, name: 'Seruj' },
        { id: 4, name: 'Jugalo' }
    ]
    let messagesData = [
        { id: 1, message: 'Hey how are' },
        { id: 2, message: 'hi im fine' },
        { id: 3, message: 'What are you doing' },
        { id: 4, message: 'Now play Dota' }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>  
    );
}
export default Dialogs;