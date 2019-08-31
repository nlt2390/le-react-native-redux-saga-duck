import React from 'react';
import {
  ScrollView,
} from 'react-native';
import {
  PostListContainer,
} from '../../containers';

import styles from './PostListScreen.styles';

class PostListScreen extends React.Component {
  static navigationOptions = {
    title: 'Post List',
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={ styles.container }
      >
        <PostListContainer />
      </ScrollView>
    );
  }
}

export default PostListScreen;
