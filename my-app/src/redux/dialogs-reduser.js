const NEW_MESSAGE = 'NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

const dialogsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageText = action.text
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


    return state
}