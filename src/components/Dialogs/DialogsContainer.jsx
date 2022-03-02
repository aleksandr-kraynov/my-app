import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onNewMessageChange = (text) => {        
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return <Dialogs onNewMessageChange={onNewMessageChange} 
                    onAddMessage={onAddMessage} 
                    dialogsPage={state} />
}

export default DialogsContainer;