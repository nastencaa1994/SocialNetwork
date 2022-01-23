import s from "./MyPost.module.css";
import Post from "./post/Post";
import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

const MyPost = (props) =>{
    let myPostEl = props.date.map(el=>(<Post message={el.text} countLike={el.countLike}/>))

    function addPost(){
        props.dispatch(addPostActionCreator())
    }
    let onPostChange=(e)=>{
        let text= e.target.value
        props.dispatch(onPostChangeActionCreator(text))
    }
    return(
        <div>
            <div className={s.new_post}>
                <h2>My post</h2>
                <div className={s.input_button}>
                    <input type="text" onChange={onPostChange} value={props.newPostText} placeholder='Новый пост'/>
                    <button onClick={addPost}>Поделиться</button>
                </div>
            </div>
            <div className={s.my_post}>
                {myPostEl}
            </div>
        </div>
    );
}

export default MyPost;