import Detail from '../views/Detail';
import Favourites from '../views/Favourites';
import Home from '../views/Home';
import WatchLater from '../views/WatchLater';
import { AppMenuList, AppRoute } from './model';

export const API_KEY = '56b4e93d2204bee0e2d35d74719395af';

export const BASE_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://api.themoviedb.org/3'
    : 'https://api.themoviedb.org/3';

export const getApiUrl = (url: string, query?: string) => {
  if (query) return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  return `${BASE_URL}/${url}?api_key=${API_KEY}`;
};

export const appMenuList: Array<AppMenuList> = [
  {
    text: 'Home',
    route: '/'
  },
  {
    text: 'Watch Later',
    route: '/watch-later'
  },
  {
    text: 'Favourites',
    route: '/favorites'
  }
];

export const routes: Array<AppRoute> = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/watch-later',
    Component: WatchLater
  },
  {
    path: '/favorites',
    Component: Favourites
  },
  {
    path: '/:id',
    Component: Detail
  }
];
