import React, { Component, Fragment } from "react";
// import Sidebar from "./components/Sidebar/sideBar";
// import Editor from "./components/Editor/editor";
import DashBoard from "./Dashboard/dashboard";
// import Login from "./auth/login/login";
// import Signup from "./auth/signUp/signUp";

import { Route, BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Router>
					{/* <Route exact path='/login' component={Login}></Route>
					<Route exact path='/signup' component={Signup}></Route> */}
					<Route exact path='/' component={DashBoard}></Route>
				</Router>
			</Fragment>
		);
	}
}
