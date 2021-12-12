import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageIncoming from "./Messages/MessagesIncoming";
import MessageOutgoing from "./Messages/MessageOutgoing";
import React from "react";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id}/>))
    let messageEl = props.state.message.map(el => el.type === 'incoming' ? (<MessageIncoming time={el.time} text={el.text}/>) : (<MessageOutgoing time={el.time} text={el.text}/>))
    let textNewMessage=React.createRef()
    let addMessage=()=>{
        textNewMessage = textNewMessage.current.value
        alert(textNewMessage)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.people_column}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageEl}
                <div className={s.addMessages}>
                    <input type="text" ref={textNewMessage}  placeholder='Введите сообщение'/>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs