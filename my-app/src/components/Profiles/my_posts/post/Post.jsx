import s from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={s.post_items}>
            <div className={s.img_text}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1337375/082ac2bf-5ef2-4d35-a6f2-8f291d5c9dde/s1200?webp=false" alt=""/>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.like_dislike}>
            <button className={s.like}>like <span>{props.countLike}</span></button>
                <button className={s.like}>dislike</button>
            </div>
        </div>
    );
}
export default Post;