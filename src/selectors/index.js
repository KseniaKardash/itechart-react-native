/* @flow */
import type { State } from "../types/types";

export const getUserName = (state: State) => state.profile.userName;
export const getUserPhoto = (state: State) => state.profile.userPhoto;
export const getPosts = (state: State) => state.postsReducer.posts;
export const getDayOfTheWeek = (state: State) => state.postsFeed.dayOfTheWeek;
export const getSearchName = (state: State) => state.postsFeed.searchName;
export const getPostsFetchingStatus = (state: State) =>
  state.postsReducer.fetching;
export const getToggleSearchStatus = (state: State) =>
  state.postsFeed.toggleSearchStatus;
