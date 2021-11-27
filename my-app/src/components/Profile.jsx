const Profile=()=>{
    return(
        <div className="content">
            <div className="banner">
                <img src="https://pixy.org/src/474/4741466.jpg" alt=""/>
            </div>
            <div className="avatar_description">
                <div className="avatar">
                    <img
                        src="https://avatars.mds.yandex.net/get-pdb/1337375/082ac2bf-5ef2-4d35-a6f2-8f291d5c9dde/s1200?webp=false"
                        alt=""/>
                </div>
                <div className="description">
                    <p>name</p>
                    <p>11 years</p>
                    <p>Moscow, Vishnyakovskaya 312</p>
                </div>
            </div>
            <div className="new_post">
                <h2>My post</h2>
                <input type="text" placeholder='News...'/>
                <button>Поделиться</button>
            </div>
            <div className="my_post">
                <div className="post_items">
                    post 1
                </div>
                <div className="post_items">
                    post 2
                </div>
            </div>
        </div>
    );
}
export default Profile;