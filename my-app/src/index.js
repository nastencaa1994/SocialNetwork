import React from 'react'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";

const contentElement = document.getElementById("root")
let message = [
    {id: 1, type: 'incoming', time: '23:52', text: "hello"},
    {id: 2, type: 'incoming', time: '23:53', text: "How are you?"},
    {id: 3, type: 'outgoing', time: '00:05', text: "hello"},
    {id: 4, type: 'Outgoing', time: '00:06', text: "Fine"}
]
let dialogsData = [
    {id: 1, name: 'Настя'},
    {id: 2, name: 'Костя'},
    {id: 3, name: 'Остап'},
    {id: 4, name: 'Люся'},
    {id: 5, name: 'Наташа'}
]
let myPost = [
    {id: 1, text: "Hi, hoe are you?", countLike: 41},
    {id: 1, text: "It's my first pos", countLike: 14}
]
render(
    <BrowserRouter>
       < App message={message} dialogsData={dialogsData} myPost={myPost}/>
    </BrowserRouter>
    , contentElement
);