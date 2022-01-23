import React from "react";


const ADD_POST = 'ADD_POST'
const NEW_TEXT_FUNCTION = 'NEW_TEXT_FUNCTION'
const NEW_MESSAGE = 'NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let store = {
    _state: {
        profilePage: {
            myPost: [
                {id: 1, text: "Hi, hoe are you?", countLike: 41},
                {id: 2, text: "It's my first pos", countLike: 14}
            ],
            newPostText: ""

        },
        dialogsPage: {
            message: [
                {id: 1, type: 'incoming', time: '23:52', text: "hello Общий"},
                {id: 2, type: 'incoming', time: '23:53', text: "How are you?"},
                {id: 3, type: 'outgoing', time: '00:05', text: "hello"},
                {id: 4, type: 'Outgoing', time: '00:06', text: "Fine"}
            ],
            newMessageText:'',
            dialogsData: [
                {
                    id: 1,
                    name: 'Настя',
                },
                {
                    id: 2,
                    name: 'Костя',
                },
                {
                    id: 3,
                    name: 'Остап',
                },
                {
                    id: 4,
                    name: 'Люся',
                },
                {
                    id: 5,
                    name: 'Наташа',
                }
            ]
        },
        sidebar: {}
    },
    //метод перезагрузки С заглушкой
    _callSubscriber() {
        console.log('state change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                countLike: 0
            }
            this._state.profilePage.myPost.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }

        else if (action.type === NEW_TEXT_FUNCTION) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state)
        }
        else if(action.type===UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageText=action.text
            this._callSubscriber(this._state)
        }

        else if (action.type === NEW_MESSAGE) {
            let time = new Date();
            let newMessage = {
                id: 5,
                type: 'outgoing',
                time: String(time.toLocaleTimeString()),
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.message.push(newMessage)
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const onPostChangeActionCreator = (text) => ({
    type: NEW_TEXT_FUNCTION,
    text: text,

})

export const updateNewMessageBody = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text: text,
})

export const newMessageActionCreator = () => ({type: NEW_MESSAGE})


export default store