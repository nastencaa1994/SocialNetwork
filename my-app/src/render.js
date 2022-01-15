import React from 'react'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";
import {addPost} from "./redux/state";


const contentElement = document.getElementById("root")

export let rerenderEntireTree=(state)=>{
    render(
        <BrowserRouter>
            < App state={state} addPost={addPost}/>
        </BrowserRouter>
        , contentElement
    );
}
