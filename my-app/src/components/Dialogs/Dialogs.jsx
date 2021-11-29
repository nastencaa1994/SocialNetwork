import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props)=>{
    return(
    <div className={s.dialogs}>
        <div className={s.people_column}>
            <div className={`${s.people_items} ${s.active_people_items}`}>
                <NavLink to='/dialogs/5'>Настя</NavLink>
            </div>
            <div className={s.people_items}>
                <NavLink to='/dialogs/1'>Настя</NavLink>
            </div>
            <div className={s.people_items}>
                <NavLink to='/dialogs/2'>Настя</NavLink>
            </div>
            <div className={s.people_items}>
                <NavLink to='/dialogs/3'>Настя</NavLink>
            </div>
            <div className={s.people_items}>
                <NavLink to='/dialogs/4'>Настя</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.incoming}>
                <div className={s.incoming_items}>
                <div className={s.time}>23:52</div>
                <div className={s.text}>hello</div>
                </div>
            </div>
            <div className={s.outgoing}>
                <div className={s.outgoing_items}>
                <div className={s.time}>00:05</div>
                <div className={s.text}>How are you?</div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Dialogs