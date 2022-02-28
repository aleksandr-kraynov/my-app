import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route} from 'react-router-dom';


const App = (props) => {
  return (    
      <div className='app-wrapper'>
        <Header /> 
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText = {props.updateNewPostText} />} />
            <Route path='/dialogs/*' element={<Dialogs  dialogs={props.state.dialogsPage.dialogs} 
                                                        messages={props.state.dialogsPage.messages}                                                         
                                                        newMessageText={props.state.dialogsPage.newMessageText} 
                                                        addMessage={props.addMessage}
                                                        updateNewMessageText = {props.updateNewMessageText}/>} />           
          </Routes>
        </div>
      </div>    
  );
}



export default App;
