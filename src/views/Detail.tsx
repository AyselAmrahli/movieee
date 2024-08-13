import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../components/Loading';
import MoviePoster from '../components/MoviePoster';

import { getMovieDetail } from '../redux/actions';

const Detail: FC = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  const movie = useSelector((state: any) => state.MovieReducer.movie);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, [id]);

  return (
    <section className="app-page__wrapper">
      {movie ? (
        <div>
          <MoviePoster src={movie.backdrop_path} />
          <article>
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>
          </article>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Detail;
