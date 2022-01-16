import React from 'react'
import './index.css'
import state, {subcribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";
import {addPost, newTextFunction} from "./redux/state";


const contentElement = document.getElementById("root")

export let rerenderEntireTree=(state)=>{
    render(
        <BrowserRouter>
            < App state={state} addPost={addPost} newTextFunction={newTextFunction}/>
        </BrowserRouter>
        , contentElement
    );
}
rerenderEntireTree(state)
subcribe(rerenderEntireTree);