import s from "../Dialogs.module.css";

const MessageIncoming = (props) => {
    return (
        <div className={s.incoming}>
            <div className={s.incoming_items}>
                <div className={s.time}>{props.time}</div>
                <div className={s.text}>{props.text}</div>
            </div>
        </div>
    );
}
export default MessageIncoming