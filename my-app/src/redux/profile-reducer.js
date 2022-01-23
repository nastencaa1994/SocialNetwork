const ADD_POST = 'ADD_POST'
const NEW_TEXT_FUNCTION = 'NEW_TEXT_FUNCTION'

const profileReducer=(state, action)=>{

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




    return state
}