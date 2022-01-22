import React from "react";



let store = {
    _state: {
        profilePage: {
            myPost: [
                {id: 1, text: "Hi, hoe are you?", countLike: 41},
                {id: 2, text: "It's my first pos", countLike: 14}
            ],
            newPostText: "Введите текст"

        },
        dialogsPage: {
            message: [
                {id: 1, type: 'incoming', time: '23:52', text: "hello"},
                {id: 2, type: 'incoming', time: '23:53', text: "How are you?"},
                {id: 3, type: 'outgoing', time: '00:05', text: "hello"},
                {id: 4, type: 'Outgoing', time: '00:06', text: "Fine"}
            ],
            dialogsData: [
                {id: 1, name: 'Настя'},
                {id: 2, name: 'Костя'},
                {id: 3, name: 'Остап'},
                {id: 4, name: 'Люся'},
                {id: 5, name: 'Наташа'}
            ]
        },
        sidebar: {}
    },

    getState(){
        return this._state
    },

    //метод перезагрузки С заглушкой
    _callSubscriber() {
        console.log('state change')
    },
    //метод добавления поста
    addPost() {
        let newPost = {
            id: 3,
            text: this._state.profilePage.newPostText,
            countLike: 0
        }
        this._state.profilePage.myPost.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    //метод отслеживание, изменение и перерисовка текста в поле новый пост
    newTextFunction (text){
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state)
    },

    subscribe (observer)  {
        this._callSubscriber = observer;
    }
}


export default store