import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {  
    return (
        <div>
          <MyPostsContainer  store={props.store}  />  
        </div>
    );
}

export default Profile;