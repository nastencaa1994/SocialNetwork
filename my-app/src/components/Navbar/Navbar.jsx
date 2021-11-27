import s from './Navbar.module.css'

const Navbar=()=>{
    return(
        <nav className={s.nav}>
            <div className={`${s.link_nav} ${s.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.link_nav}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={s.link_nav}>
                <a href="/news">News</a>
            </div>
            <div className={s.link_nav}>
                <a href="/music">Music</a>
            </div>
            <div className={s.link_nav}>
                <a href="/setting">Setting</a>
            </div>
        </nav>
    );
}
export default Navbar;