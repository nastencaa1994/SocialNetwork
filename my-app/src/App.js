import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profiles/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";


const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app_wrapper_content">
                <Routes>
                    <Route exact path='dialogs' element={<Dialogs/>}/>
                    <Route exact path='profile' element={<Profile/>}/>
                    <Route exact path='news' element={<News/>}/>
                    <Route exact path='music' element={<Music/>}/>
                    <Route exact path='setting' element={<Setting/>}/>
                </Routes>
            </div>
        </div>

    );
}


export default App;