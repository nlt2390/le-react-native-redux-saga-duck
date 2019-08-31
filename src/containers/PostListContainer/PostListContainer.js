import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  PostList,
} from '../../components';
import {
  postSelectors,
  postActions,
} from '../../state/post';


export const PostListContainer = (props) => {
  const {
    posts,
    fetchPosts,
  } = props;

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostList posts={ posts } />
  );
};

PostListContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  fetchPosts: PropTypes.func.isRequired,
};

PostListContainer.defaultProps = {
  posts: [],
};

const mapStateToProps = (state) => {
  return {
    posts: postSelectors.selectorSortedPosts(state),
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(postActions.actionFetchPosts()),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListContainer);
