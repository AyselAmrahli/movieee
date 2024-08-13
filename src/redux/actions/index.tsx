import { ActionType } from '../../const/model';
import {
  ADD_FAV_LIST,
  ADD_WATCH_LIST,
  GET_FAV_LIST,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  GET_REQUEST_SESSION,
  GET_REQUEST_TOKEN,
  GET_WATCH_LIST
} from '../constants';

export const getRequestToken = (): ActionType => ({
  type: GET_REQUEST_TOKEN
});

export const getRequestSession = (request_token: string): ActionType => ({
  type: GET_REQUEST_SESSION,
  payload: request_token
});

export const getMovies = (term?: string): ActionType => ({
  type: GET_MOVIES,
  payload: term
});

export const getMovieDetail = (id?: string): ActionType => ({
  type: GET_MOVIE_DETAIL,
  payload: id
});

export const addWatchList = (id?: number): ActionType => ({
  type: ADD_WATCH_LIST,
  payload: id
});

export const getWatchList = (): ActionType => ({
  type: GET_WATCH_LIST
});
export const addFavList = (id?: number): ActionType => ({
  type: ADD_FAV_LIST,
  payload: id
});

export const getFavList = (): ActionType => ({
  type: GET_FAV_LIST
});
