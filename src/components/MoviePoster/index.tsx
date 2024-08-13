import { FC } from 'react';

import NoPoster from '../../assets/images/no-poster.jpeg';

import './index.scss';

type MoviePosterProps = {
  src: string | null;
  title?: string;
};

const MoviePoster: FC<MoviePosterProps> = ({ src, title = '' }) => (
  <div className="app-movie__poster">
    <img
      data-testid={`app-movie-img-${title}`}
      src={src ? `http://image.tmdb.org/t/p/original/${src}` : NoPoster}
      alt="movie app film thumbnail"
      className="app-movie__item__thumb"
    />
  </div>
);

export default MoviePoster;
