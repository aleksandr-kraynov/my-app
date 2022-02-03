let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi', likesCount: 0},
            { id: 2, message: 'WTF', likesCount: 23},
            { id: 3, message: 'Yo', likesCount: 45},
            { id: 4, message: 'Yooho', likesCount: 12},
            { id: 5, message: 'LOL', likesCount: 120}    
        ]
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
        ]
    }   
}

export default state;