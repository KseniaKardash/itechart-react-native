/* @flow */
import { takeEvery, call, put } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import {
  requestSignInSuccess,
  requestSignInError,
  requestSignOutSuccess,
  requestSignOutError
} from "../actions/authenticationActions";
import { setUserName, setUserPhoto } from "../actions/profileActions";

import { signInWithGoogle, signOutWithGoogle } from "../api/api";

const authenticationSaga = [
  takeEvery(types.SIGN_IN_REQUEST, signIn),
  takeEvery(types.SIGN_OUT_REQUEST, signOut)
];

export function* signIn(): Generator<*, *, *> {
  try {
    const currentUser = yield call(signInWithGoogle);
    yield put(requestSignInSuccess(currentUser));
    yield put(setUserName(currentUser.userInfo.name));
    yield put(setUserPhoto(currentUser.userInfo.photo));
  } catch (error) {
    yield put(requestSignInError(error));
  }
}

export function* signOut(): Generator<*, *, *> {
  try {
    yield call(signOutWithGoogle);
    yield put(requestSignOutSuccess());
  } catch (error) {
    yield put(requestSignOutError(error));
  }
}
export default authenticationSaga;