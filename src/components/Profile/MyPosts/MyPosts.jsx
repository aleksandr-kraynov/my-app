import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                   <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0'/> 
                <Post message='My first post' likesCount='23'/> 
                <Post message='Yo' likesCount='45'/> 
                                   
            </div> 
        </div>
    );
}

export default MyPosts;