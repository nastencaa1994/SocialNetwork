import s from "./MyPost.module.css";
import Post from "./post/Post";

const MyPost = () =>{
    return(
        <div>
            <div className={s.new_post}>
                <h2>My post</h2>
                <div className={s.input_button}>
                    <input type="text" placeholder='News...'/>
                    <button>Поделиться</button>
                </div>
            </div>
            <div className={s.my_post}>
                <Post message='Hi, hoe are you?' countLike="48"/>
                <Post message="It's my first post" countLike="14"/>
            </div>

        </div>
    );
}
export default MyPost;