import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {  

  let dialogs = [
    { id: 1, name: 'Bro'},
    { id: 2, name: 'NeBro'},
    { id: 3, name: 'Bratishka'},
    { id: 4, name: 'Sister'}

  ];

  let messages = [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'WTF'},
    { id: 3, message: 'Yo'},
    { id: 4, message: 'Yooho'}
  ];

    return (
        <div>
          <MyPosts posts={props.posts} dialogs={dialogs} messages={messages}/>  
        </div>
    );
}

export default Profile;