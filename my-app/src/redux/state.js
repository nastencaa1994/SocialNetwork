import React from "react";
import {rerenderEntireTree} from "../render";

let state={
    profilePage:{
        myPost: [
            {id: 1, text: "Hi, hoe are you?", countLike: 41},
            {id: 2, text: "It's my first pos", countLike: 14}
        ],

    },
    dialogsPage:{
        message : [
            {id: 1, type: 'incoming', time: '23:52', text: "hello"},
            {id: 2, type: 'incoming', time: '23:53', text: "How are you?"},
            {id: 3, type: 'outgoing', time: '00:05', text: "hello"},
            {id: 4, type: 'Outgoing', time: '00:06', text: "Fine"}
        ],
        dialogsData : [
            {id: 1, name: 'Настя'},
            {id: 2, name: 'Костя'},
            {id: 3, name: 'Остап'},
            {id: 4, name: 'Люся'},
            {id: 5, name: 'Наташа'}
        ]
    },
    sidebar:{}
}

export let addPost= (postMessage) => {
    let newPost = {
        id:3,
        text: postMessage,
        countLike:0
    }
   state.profilePage.myPost.push(newPost);
    rerenderEntireTree()
}

export default state