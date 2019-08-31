import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { PostListContainer } from './PostListContainer';

const renderPostListContainer = (props = {}) => {
  return renderer.create(
    <PostListContainer
      fetchPosts={ () => null }
      { ...props }
    />,
  );
};

describe('<PostListContainer>', () => {
  it('Should fetch posts after mounting', () => {
    const fetchPosts = sinon.spy();

    renderPostListContainer({
      fetchPosts,
    });
  });
});
