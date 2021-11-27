import s from './Profile.module.css'
import MyPost from "./my_posts/MyPost";

const Profile=()=>{
    return(
        <div>
            <div>
                <img src="https://pixy.org/src/474/4741466.jpg" alt=""/>
            </div>
            <div className={s.avatar_description}>
                <div className={s.avatar}>
                    <img
                        src="https://avatars.mds.yandex.net/get-pdb/1337375/082ac2bf-5ef2-4d35-a6f2-8f291d5c9dde/s1200?webp=false"
                        alt=""/>
                </div>
                <div className={s.description}>
                    <p>name</p>
                    <p>11 years</p>
                    <p>Moscow, Vishnyakovskaya 312</p>
                </div>
            </div>
        <MyPost/>
        </div>
    );
}
export default Profile;