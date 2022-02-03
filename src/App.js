import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header /> 
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile posts={props.state.profilePage.posts}/>} />
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>} />           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
