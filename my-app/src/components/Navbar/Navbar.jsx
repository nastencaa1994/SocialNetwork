import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className={s.nav}>
            <div className={s.link_nav}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.link_nav}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.link_nav}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.link_nav}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.link_nav} >
                <NavLink to="/setting">Setting</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;