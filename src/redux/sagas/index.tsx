import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY, BASE_URL, getApiUrl } from '../../const/constant';
import {
  ADD_FAV_LIST,
  ADD_WATCH_LIST,
  GET_ACCOUNT_ID,
  GET_FAV_LIST,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  GET_REQUEST_SESSION,
  GET_REQUEST_TOKEN,
  GET_WATCH_LIST,
  RECEIVE_FAV_LIST,
  RECEIVE_MOVIES,
  RECEIVE_MOVIE_DETAIL,
  RECEIVE_WATCH_LIST
} from '../constants';

// request token
export function* getRequestToken() {
  try {
    const { data } = yield call(axios.get, getApiUrl('authentication/token/new'));
    yield call(axios.post, getApiUrl('authentication/token/validate_with_login'), {
      username: 'AyselAmrahli',
      password: 'test1234',
      request_token: data.request_token
    });
    yield put({ type: GET_REQUEST_SESSION, payload: { request_token: data.request_token } });
  } catch (e) {
    console.log(e);
  }
}

function* watchGetRequestToken() {
  yield takeLatest(GET_REQUEST_TOKEN, getRequestToken);
}

// session id
export function* getRequestSession({ payload }: any) {
  try {
    const { data } = yield call(axios.post, getApiUrl('authentication/session/new'), {
      request_token: payload.request_token
    });
    localStorage.setItem('session_id', data.session_id);
    yield put({ type: GET_ACCOUNT_ID, payload: { session_id: data.session_id } });
  } catch (e) {
    console.log(e);
  }
}

function* watchGetRequestSession() {
  yield takeLatest(GET_REQUEST_SESSION, getRequestSession);
}

// account id
export function* getAccountId({ payload }: any) {
  try {
    const { data } = yield call(
      axios.get,
      `${BASE_URL}/account?api_key=${API_KEY}&session_id=${payload.session_id}`
    );
    localStorage.setItem('account_id', data.id);
  } catch (e) {
    console.log(e);
  }
}

function* watchGetAccountId() {
  yield takeLatest(GET_ACCOUNT_ID, getAccountId);
}

// fetch movies
export function* fetchMovies({ payload: term }: any) {
  try {
    const { data } = yield call(axios.get, getApiUrl(`movie/popular`, term));
    yield put({ type: RECEIVE_MOVIES, payload: { movies: data.results } });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchMovies() {
  yield takeLatest(GET_MOVIES, fetchMovies);
}

// fetch movie detail
export function* fetchMovieDetail({ payload: id }: any) {
  try {
    const { data } = yield call(axios.get, getApiUrl(`movie/${id}`));
    yield put({ type: RECEIVE_MOVIE_DETAIL, payload: { movie: data } });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchMovieDetail() {
  yield takeLatest(GET_MOVIE_DETAIL, fetchMovieDetail);
}

// fetch watchlist
export function* fetchWatchList() {
  try {
    const account_id = localStorage.getItem('account_id');
    const session_id = localStorage.getItem('session_id');
    const { data } = yield call(
      axios.get,
      `${BASE_URL}/account/${account_id}/watchlist/movies?api_key=${API_KEY}&session_id=${session_id}`
    );
    yield put({ type: RECEIVE_WATCH_LIST, payload: { watchList: data.results } });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchWatchList() {
  yield takeLatest(GET_WATCH_LIST, fetchWatchList);
}

// fetch fav list
export function* fetchFavList() {
  try {
    const account_id = localStorage.getItem('account_id');
    const session_id = localStorage.getItem('session_id');
    const { data } = yield call(
      axios.get,
      `${BASE_URL}/account/${account_id}/favorite/movies?api_key=${API_KEY}&session_id=${session_id}`
    );
    yield put({ type: RECEIVE_FAV_LIST, payload: { favList: data.results } });
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchFavList() {
  yield takeLatest(GET_FAV_LIST, fetchFavList);
}

// add watchlist
export function* addWatchList({ payload: id }: any) {
  try {
    const account_id = localStorage.getItem('account_id');
    const session_id = localStorage.getItem('session_id');
    yield call(
      axios.post,
      `${BASE_URL}/account/${account_id}/watchlist?api_key=${API_KEY}&session_id=${session_id}`,
      {
        media_type: 'movie',
        media_id: id,
        watchlist: true
      }
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchAddWatchList() {
  yield takeLatest(ADD_WATCH_LIST, addWatchList);
}

// add fav list
export function* addFavList({ payload: id }: any) {
  try {
    const account_id = localStorage.getItem('account_id');
    const session_id = localStorage.getItem('session_id');
    yield call(
      axios.post,
      `${BASE_URL}/account/${account_id}/favorite?api_key=${API_KEY}&session_id=${session_id}`,
      {
        media_type: 'movie',
        media_id: id,
        favorite: true
      }
    );
  } catch (e) {
    console.log(e);
  }
}

function* watchAddFavList() {
  yield takeLatest(ADD_FAV_LIST, addFavList);
}

export default function* rootSaga() {
  yield all([
    watchGetRequestToken(),
    watchGetRequestSession(),
    watchGetAccountId(),
    watchFetchMovies(),
    watchFetchMovieDetail(),
    watchFetchWatchList(),
    watchFetchFavList(),
    watchAddWatchList(),
    watchAddFavList()
  ]);
}
