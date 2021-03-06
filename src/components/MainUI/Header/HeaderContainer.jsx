import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../../redux/auth-reducer";

class HeaderContainer extends React.Component{
	componentDidMount() {
		this.props.getAuthUserData()
	}

	render(){
		return (
			<Header {...this.props}/>
		)
	}
}

const mapStateToProps = (state) => ({
	login: state.auth.data.login,
	isAuth: state.auth.isAuth,
})

export default connect (mapStateToProps, {
	setAuthUserData, getAuthUserData,
}) (HeaderContainer);
