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
        <MyPost date={props.profilePage.myPost} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;