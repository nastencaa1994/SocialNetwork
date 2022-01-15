import s from './Profile.module.css'
import MyPost from "./my_posts/MyPost";
import ProfilrInfo from "./ProfileInfo/ProfilrInfo";

const Profile=(props)=>{
    return(
        <div>
            <div>
                <img className={s.banner_profile} src="https://pixy.org/src/474/4741466.jpg" alt=""/>
            </div>
            <ProfilrInfo/>
        <MyPost date={props.state.myPost} newPostText={props.state.newPostText} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;