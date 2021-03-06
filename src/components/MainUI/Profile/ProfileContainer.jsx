import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{
	componentDidMount() {
		let userId = this.props.match.params.userId
		if(!userId){
			userId = 2
		}
		this.props.getUserProfile(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

const mapStateToProps = (state)=> ({
	profile: state.profilePage.profile,
})

export default compose(
	withRouter,
	connect(mapStateToProps, {
		setUserProfile,
		getUserProfile
	})
)(ProfileContainer)
