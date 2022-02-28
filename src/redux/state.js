let rerenderEntireTree = () => {
    
}

let state = {
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
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {    
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;