import { combineReducers } from 'redux';
import {
  GET_MOVIES,
  RECEIVE_FAV_LIST,
  RECEIVE_MOVIES,
  RECEIVE_MOVIE_DETAIL,
  RECEIVE_WATCH_LIST
} from '../constants';

const MovieReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state };
    case RECEIVE_MOVIES:
      return { ...state, movies: action.payload.movies };
    case RECEIVE_MOVIE_DETAIL:
      return { ...state, movie: action.payload.movie };
    case RECEIVE_WATCH_LIST:
      return { ...state, watchList: action.payload.watchList };
    case RECEIVE_FAV_LIST:
      return { ...state, favList: action.payload.favList };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  MovieReducer
});

export default rootReducer;
