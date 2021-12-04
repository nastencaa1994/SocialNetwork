import s from "../Dialogs.module.css";

const MessageOutgoing = (props) => {
    return (
        <div className={s.outgoing}>
            <div className={s.outgoing_items}>
                <div className={s.time}>{props.time}</div>
                <div className={s.text}>{props.text}</div>
            </div>
        </div>
    );
}
export default MessageOutgoing