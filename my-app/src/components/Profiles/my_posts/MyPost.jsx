import s from "./MyPost.module.css";
import Post from "./post/Post";
import React from "react";

const MyPost = (props) =>{
    let myPostEl = props.date.map(el=>(<Post message={el.text} countLike={el.countLike}/>))

    let newPostEl=React.createRef()

    function addPost(){
       let text= newPostEl.current.value
        props.addPost(text)
    }

    return(
        <div>
            <div className={s.new_post}>
                <h2>My post</h2>
                <div className={s.input_button}>
                    <input type="text" ref={newPostEl} placeholder='News...'/>
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