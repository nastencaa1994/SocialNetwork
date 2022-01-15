import React from 'react'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";
import state from "./redux/state";
import {addPost} from "./redux/state";
import {rerenderEntireTree} from "./render";


rerenderEntireTree()
