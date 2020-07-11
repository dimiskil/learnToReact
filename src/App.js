import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';
import Navbar from "./components/MainUI/Navbar/Navbar";
import Header from "./components/MainUI/Header/Header";
import Dialogs from "./components/MainUI/Dialogs/Dialogs";
import News from "./components/MainUI/News/News";
import Music from "./components/MainUI/Music/Music";
import Settings from "./components/MainUI/Settings/Settings";
import UsersNavbarContainer from "./components/MainUI/UsersNavbar/UsersNavbarContainer";
import ProfileContainer from "./components/MainUI/Profile/ProfileContainer";


let App = (props) => {
	return (
		<div className='wrapper'>
			<Header/>
			<Navbar/>
			<div className='wrapper__content'>
				<Route path='/profile'
							 render={() => <ProfileContainer/>}/>
				<Route path='/dialogs'
							 render={() => <Dialogs/>}/>
				<Route path='/users'
							 render={() => <UsersNavbarContainer/>}/>
				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/settings' component={Settings}/>
			</div>
		</div>
	);
}

export default App;
