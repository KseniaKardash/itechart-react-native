/* @flow */
import { connect } from "react-redux";
import setToggleSearchStatus from "../actions/postsFeedActions";
import { filterPostsByUserName } from "../actions/postsActions";
import PostsFeed from "../components/screens/PostsFeed/PostsFeed";

const mapStateToProps = state => {
  return {
    searchName: state.postsFeed.searchName,
    toggleSearchStatus: state.postsFeed.toggleSearchStatus,
    posts: state.postsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleSearchStatus: value => dispatch(setToggleSearchStatus(value)),
    filterPostsByUserName: query => dispatch(filterPostsByUserName(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFeed);
