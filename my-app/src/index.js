import React from 'react'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {render} from "react-dom"
import App from "./App";

const contentElement = document.getElementById("root")

render(
    <BrowserRouter>
       < App/>
    </BrowserRouter>
    , contentElement
);