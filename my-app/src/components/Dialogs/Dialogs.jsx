import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageIncoming from "./Messages/MessagesIncoming";
import MessageOutgoing from "./Messages/MessageOutgoing";

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(el => (<DialogItem name={el.name} id={el.id}/>))
    let messageEl = props.state.message.map(el => el.type === 'incoming' ? (<MessageIncoming time={el.time} text={el.text}/>) : (<MessageOutgoing time={el.time} text={el.text}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.people_column}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageEl}
            </div>
        </div>
    );
}
export default Dialogs