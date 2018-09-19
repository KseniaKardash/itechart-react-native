/* @flow */
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_POSTS
} from "../constants/actionTypes";
import type {
  Post,
  Posts,
  AddPostAction,
  DeletePostAction,
  UpdatePostAction,
  GetPostsAction
} from "../types/types";
import realm from "../database/index";

export function updatePostAction(post: Post): UpdatePostAction {
  return {
    type: UPDATE_POST,
    post: post
  };
}

export function deletePostAction(id: string): DeletePostAction {
  return {
    type: DELETE_POST,
    id: id
  };
}

function addPostAction(post: Post): AddPostAction {
  return {
    type: ADD_POST,
    post: post
  };
}

function getPostsAction(posts: Posts): GetPostsAction {
  return {
    type: GET_POSTS,
    posts: posts
  };
}

type Dispatch = (action: Action | ThunkAction) => any;
type ThunkAction = (dispatch: Dispatch) => any;
type Action =
  | GetPostsAction
  | AddPostAction
  | DeletePostAction
  | UpdatePostAction;

export function addPost(post: Post): ThunkAction {
  return dispatch => {
    realm.write(() => {
      realm.create("Post", post);
    });
    dispatch(addPostAction(post));
  };
}

export function updatePost(post: Post): ThunkAction {
  return dispatch => {
    realm.write(() => {
      realm.create(
        "Post",
        { id: post.id, description: post.description, tag: post.tag },
        true
      );
    });
    dispatch(addPostAction(post));
  };
}

export function deletePost(id: string): ThunkAction {
  return dispatch => {
    realm.write(() => {
      const post = realm.objects("Post").filtered(`id = "${id}"`);
      realm.delete(post);
    });
    dispatch(deletePostAction(id));
  };
}

export function getPosts(): ThunkAction {
  return dispatch => {
    const postsData = realm.objects("Post");
    const posts = postsData.map(post => {
      return { ...post };
    });
    dispatch(getPostsAction(posts));
  };
}
