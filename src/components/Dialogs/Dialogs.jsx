import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map( m => <Message message={m.message} />);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }                                 
            </div>
            <div className={s.messages}>
                { messagesElements }  
                <textarea ref={ newMessageElement } onChange={onMessageChange} value={props.newMessageText}></textarea> 
                <div>
                   <button onClick={ addMessage }>Отправить</button>
                </div>
            </div>            
        </div>
    )
}

export default Dialogs;