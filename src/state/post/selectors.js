import { createSelector } from 'reselect';
import {
  sortObjects,
} from '../../utils/helper';

export const selectorPost = (state) => state.post;
export const selectorPosts = (state) => selectorPost(state).posts;

export const selectorSortedPosts = createSelector(
  [selectorPosts],
  (posts) => {
    return sortObjects({
      objects: posts,
      sortAttr: 'title',
    });
  },
);
