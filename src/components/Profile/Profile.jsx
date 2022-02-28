import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {  
 
    return (
        <div>
          <MyPosts  posts={props.profilePage.posts} 
                    newPostText={props.profilePage.newPostText} 
                    dialogs={props.dialogs} 
                    messages={props.messages} 
                    addPost={props.addPost} 
                    updateNewPostText = {props.updateNewPostText} />  
        </div>
    );
}

export default Profile;