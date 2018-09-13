/* @flow */
import { connect } from "react-redux";
import { setUserName, setUserPhoto } from "../actions/profileActions";
import { getPosts } from "../actions/postsActions";
import InitialScreen from "../components/screens/InitialScreen/InitialScreen";

const mapStateToProps = state => {
  return {
    userName: state.profile.userName,
    userPhoto: state.profile.userPhoto,
    posts: state.postsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserName: userName => dispatch(setUserName(userName)),
    setUserPhoto: userPhoto => dispatch(setUserPhoto(userPhoto)),
    getPosts: () => dispatch(getPosts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialScreen);
