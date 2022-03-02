import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
       
    }
}

window.store = store;
export default store;