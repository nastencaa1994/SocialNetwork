import React from 'react'
import './index.css'
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";


const contentElement = document.getElementById("root")

export let rerenderEntireTree = () => {
    render(
        <BrowserRouter>
            < App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , contentElement
    );
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree);