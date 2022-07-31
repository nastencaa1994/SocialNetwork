import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageIncoming from "./Messages/MessagesIncoming";
import MessageOutgoing from "./Messages/MessageOutgoing";
import React from "react";

import {sendMessageActionCreator, updateNewMessageBody} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElement = state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id}/>))
    let messageEl = state.message.map(el => el.type === 'incoming' ? (<MessageIncoming time={el.time} text={el.text}/>) : (<MessageOutgoing time={el.time} text={el.text}/>))


    let onSendMessageClick=()=>{
        props.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange=(e)=>{
        let text =e.target.value
        props.dispatch(updateNewMessageBody(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.people_column}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageEl}
                <div className={s.addMessages}>
                    <textarea placeholder='Введите сообщение' value={state.newMessageText} onChange={onNewMessageChange} >{state.newMessageText}</textarea>
                    {/*<input type="text" placeholder='Введите сообщение' onChange={updateNewMessageValue} value={state.newMessageText}/>*/}
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs