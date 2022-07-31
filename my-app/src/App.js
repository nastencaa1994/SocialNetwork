import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profiles/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route path='dialogs' element={<Dialogs dispatch={props.dispatch} store={props.store}/>}/>
                    <Route path="dialogs/:id" element={<Dialogs dispatch={props.dispatch} store={props.store}/>}/>
                    <Route path='profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='music' element={<Music/>}/>
                    <Route path='setting' element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;