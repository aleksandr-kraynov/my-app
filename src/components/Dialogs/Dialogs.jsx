import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Bro" id="1"/>
                <DialogItem name="NeBro" id="2"/>
                <DialogItem name="Bratishka" id="3"/>
                <DialogItem name="Sister" id="4"/>                         
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="WTF" />
                <Message message="Yo" />
                <Message message="Yooho" />                
            </div>
        </div>
    )
}

export default Dialogs;