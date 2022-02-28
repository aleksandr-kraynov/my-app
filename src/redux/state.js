const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 0},
                { id: 2, message: 'WTF', likesCount: 23},
                { id: 3, message: 'Yo', likesCount: 45},
                { id: 4, message: 'Yooho', likesCount: 12},
                { id: 5, message: 'LOL', likesCount: 120}    
            ],
            newPostText: 'Hi'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Bro'},
                { id: 2, name: 'NeBro'},
                { id: 3, name: 'Bratishka'},
                { id: 4, name: 'Sister'}    
            ],
        
            messages: [
                { id: 1, message: 'Hi'},
                { id: 2, message: 'WTF'},
                { id: 3, message: 'Yo'},
                { id: 4, message: 'Yooho'}
            ],
            newMessageText: 'Common'
        }   
    },
    _callSubscriber()  {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },   

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {    
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {    
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

window.store = store;
export default store;