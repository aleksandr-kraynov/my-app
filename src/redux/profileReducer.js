const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi', likesCount: 0},
        { id: 2, message: 'WTF', likesCount: 23},
        { id: 3, message: 'Yo', likesCount: 45},
        { id: 4, message: 'Yooho', likesCount: 12},
        { id: 5, message: 'LOL', likesCount: 120}    
    ],
    newPostText: 'Hi'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;  
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;  
        default: 
            return state;       
    } 
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;