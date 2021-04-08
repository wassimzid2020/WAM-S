
import { Route, Switch } from 'react-router';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Errors from './Pages/errors/Errors';
import LandPage from './Pages/landPage/LandPage';
import Profile from './Pages/profile/Profile';
import SignUp from './Pages/signUp/SignUp';
import SignIn from './Pages/signIn/SignIn';
import './App.css';
import Footer from './Components/Footer';
import NavBar from '../src/Components/navbar/NavBar'
import { currentUser } from './JS/actions/user';
import PrivetRoute from './router/PrivetRoute';

import PosteOneUser from './Pages/Admin/PosteOneUser';
import Admin from './Pages/Admin/Admin';
import AllPosts from './Pages/Admin/AllPosts';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  
  return (
    <div className="App">
     
     
       <NavBar/>
     <Switch>
       <Route exact path="/" component={LandPage}/>
       <Route path="/signin" component={SignIn}/>
       <Route path="/signup" component={SignUp}/>
       <Route  path="/admin" component={Admin}/>
       <Route  path="/adminallposts" component={AllPosts}/>
       <Route path="/adminpostuser" component={PosteOneUser}/>

       

       <PrivetRoute path="/profile" component={Profile} />

       <Route path="/*" component={Errors}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
