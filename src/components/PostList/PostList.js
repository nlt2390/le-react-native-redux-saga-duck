import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

const PostList = ({ posts }) => {
  return (
    <View>
      {
        posts.map((post) => {
          return (
            <Text key={ post.id }>
              {`_ ${post.title}`}
            </Text>
          );
        })
      }
    </View>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
