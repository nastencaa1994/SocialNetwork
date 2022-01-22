import React from 'react'
import './index.css'
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";



const contentElement = document.getElementById("root")

export let rerenderEntireTree=()=>{
    render(
        <BrowserRouter>
            < App state={store.getState()} addPost={store.addPost.bind(store)} newTextFunction={store.newTextFunction.bind(store)}/>
        </BrowserRouter>
        , contentElement
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);