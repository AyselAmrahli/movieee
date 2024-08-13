import { FC, ReactNode } from 'react';

import RateButton from '../RateButton';
import MoviePoster from '../MoviePoster';

import ArrowRight from '../../assets/images/arrow-right.svg';
import './index.scss';

type MovieItemProps = {
  title: string;
  poster: string;
  rate: number | null;
  navigate: () => void;
  children?: ReactNode;
};

const MovieItem: FC<MovieItemProps> = ({ title, poster, rate, navigate, children }) => (
  <div className="app-movie__item" data-testid={`app-movie-item-${title}`}>
    <MoviePoster src={poster} title={title} />
    {rate && <RateButton {...{ rate }} />}
    <div
      data-testid={`app-movie-body-${title}`}
      className="app-movie__item__title"
      onClick={navigate}
    >
      {title} <img src={ArrowRight} alt="icon" />
    </div>
    {children}
  </div>
);

export default MovieItem;
