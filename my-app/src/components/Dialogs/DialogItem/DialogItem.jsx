import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

    let dialogClick =(e) =>{
        let id = e.target.id
       alert(id)
    }

    return (
        <div className={s.people_items}>
            <NavLink to={'/dialogs/' + props.id} id={props.id} onClick={dialogClick}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem