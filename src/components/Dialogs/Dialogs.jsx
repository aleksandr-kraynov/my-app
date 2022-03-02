import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    
    let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message} />);
    let newMessageElement = React.createRef();
    
    let onAddMessage = () => {
        props.onAddMessage();
    }
    
    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;        
        props.onNewMessageChange(text);
    }
   
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }                                 
            </div>
            <div className={s.messages}>
                { messagesElements }  
                <textarea ref={ newMessageElement } onChange={onNewMessageChange} value={props.newMessageText}></textarea> 
                <div>
                   <button onClick={ onAddMessage }>Отправить</button>
                </div>
            </div>            
        </div>
    )
}

export default Dialogs;